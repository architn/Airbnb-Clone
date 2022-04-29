const express = require("express");
const user = require("../model/user");
const router = express();
const bcrypt = require("bcrypt");
const { check, validationResult } = require("express-validator");
const property = require("../model/property");
const reservation = require('../model/reservation')
let Images = require('../modules/images');
const saltRounds = 10;


const validateEmail = () => {
  return check("email", "Invalid Email Address").isEmail();
};

const validatePassword = () => {
  return check(
    "password",
    "Invalid Password. Password must contain 1 uppercase, 1 lowercase, 1 numeric character and 1 special character atleast"
  ).matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/);
};


/**
 * This post method is used for creating a new user by validating the email and password
 * and creating a hash for the password and storing it in the Mongo database
 */
router.post("/userSignUp",
  validateEmail(),
  validatePassword(),
  async (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      // console.log(result.errors.map((error) => error.msg).join(", "));
      return res.status(400).json(result);
    }
    const data = new user({
      email: req.body.email,
      password: req.body.password,
      name: req.body.name,
    });

    data.password = await bcrypt.hash(data.password, saltRounds);

    try {
      let doc = await data.save();
      res.status(201).send(doc);
      console.log("User created successfully");
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
);

/**
 * This post method is used to authenticate the user by checking the email and password
 * and then creating the session using express-session for that particular user 
 */
router.post("/userSignIn", async (req, res, next) => {
  const userAuth = await user.findOne({ email: req.body.email });
  
  if (!userAuth) {
    console.log("User does not exist");
    return res.status(400).json({ msg: "User does not exist" });
  }

  bcrypt.compare(req.body.password, userAuth.password, async (err, data) => {
    if (err) throw err;
    if (data) {
      let session = req.session;
      session.userid = userAuth._id.toString();
      console.log("User logged in successfully");
      return res.json(userAuth).status(200);
    } else {
      console.log(
        "Not able to login User since email or password provided does not match"
      );
      return res.status(400).json({
        msg: "Not able to login User since email or password provided does not match",
      });
    }
  });
});

/**
 * This get method is used for logging out the user and destroying the session created for him
 */
router.get('/logout',(req,res) => {
  req.session.destroy();
  res.status(200).send();
  return;
});

/**
 *  This get method is used to get all the properties added by the user and it is displayed only if
 *  the user is logged in by using the session for that user
 */
router.get("/getPropertyByUser", (req, res) => {
  let session = req.session;
  if (!session.userid) {
    res.sendStatus(401);
    return;
  }
  property.find({user : session.userid}, function (err, user) {
    if (err) {
      res.send("Something went wrong");
    }
    // console.log(user);
    res.json(user);
  });
});

/**
 * This get method is used for displaying the personal information of the user once he is logged in
 */
router.get("/getUserDetails", (req, res) => {
  let session = req.session;
  if (!session.userid) {
    res.sendStatus(401);
    return;
  }
  user.find({_id : session.userid}, function (err, user) {
    if (err) {
      res.send("Something went wrong");
    }
    // console.log(user);
    res.json(user);
  });
});

/**
 * This post method is used for booking a reservation of the property once the user is logged in
 */
router.post("/addReservation", async (req, res) => {
  // console.log(req.body);
  let session = req.session;
  if (!session.userid) {
    res.sendStatus(401);
    return;
  }
  const propertyData = await property.findOne({ _id: req.body.propertyID });
  const reservationData = new reservation({
    title: propertyData.Title,
    user: session.userid,
    property: req.body.propertyID,
    checkInDate: req.body.checkInDate,
    checkOutDate: req.body.checkOutDate, 
    cost: req.body.totalCost, 
    numberOfGuests: req.body.numberOfGuests
  });

  try {
    // console.log(reservationData);
    let doc = await reservationData.save();
    res.status(201).send(doc);
    console.log("Reservation added successfully");
  } catch (error) {
    console.log(error);
  }
});

/*
 * This get method is used to all display the properties booked by that particular user 
 */
router.get('/getReservationsByUser', (req, res) => {
  let session = req.session;
  if (!session.userid) {
    res.sendStatus(401);
    return;
  }
  reservation.find({user : session.userid}, function (err, user) {
    if (err) {
      res.send("Something went wrong");
    }
    // console.log(user);
    res.json(user);
  });

});

/**
 * This get method is used to display all the properties based on the search criteria
 */
router.get("/getPropertyByLocation",(req, res) => {
  property.find({SearchParam : req.query.search}, function (err, user) {
    if (err) {
      res.send("Something went wrong");
      return;
    }
    // console.log(user);
    res.json(user);
  });
});


/**
 * This post method is used to add a new property by the user which he wished to give for renting purpose
 * The adding property can only be done if he is logged in
 */
router.post("/addNewProperty", async (req, res) => {
  const shuffled = Images.sort(() => 0.5 - Math.random());
  // console.log(req);
  // Get sub-array of first n elements after shuffled
  let selected = shuffled.slice(0, 5);
  let session = req.session;
  if (!session.userid) {
    res.sendStatus(401);
    return;
  }
  const propertyData = new property({
    user: session.userid,
    ApartmentType: req.body.ApartmentType,
    Space: req.body.Space,
    Street: req.body.Street,
    City: req.body.City,
    State: req.body.State,
    Zip: req.body.Zip,
    Country: req.body.Country,
    Guests: req.body.Guests,
    Beds: req.body.Beds,
    Bathrooms: req.body.Bathrooms,
    Title: req.body.Title,
    Lat: 40.7549,
    Long: -73.9840,
    img1: selected[0],
    img2: selected[1],
    img3: selected[2],
    img4: selected[3],
    img5: selected[4],
    SearchParam: `${req.body.City}, ${req.body.State}, ${req.body.Country}`,
    Description: req.body.Description,
    Price: req.body.Price,
    features: {
        isWifi: req.body.isWifi,
        ac: req.body.ac,
        bar: req.body.bar,
        microwave: req.body.microwave,
        fridge: req.body.fridge,
        fireplace: req.body.fireplace,
        toaster: req.body.toaster,
        tv: req.body.tv,
    }
  });

  try {
    // console.log(propertyData);
    let doc = await propertyData.save();
    res.status(201).send(doc);
    console.log("Property added successfully");
  } catch (error) {
    console.log(error);
  }
});

/**
 * This get method is used to display a detailed description of the property and the ability to book the property
 */
router.get("/property/:id", async (req, res) => {
  property.find({_id : req.params.id}, function (err, user) {
    if (err) {
      res.send("Something went wrong");
      return;
    }
    // console.log(user);
    res.json(user);
  });
})

/**
 * This delete method is used to delete the property
 */
router.delete('/deleteProperty/:id', async (req, res) => {
  let propertyID = req.params.id;
  await property.deleteOne({id: propertyID});
  res.status(201).send();
})

/**
 * This delete method is used to delete the reservation for the property
 */
router.delete('/deleteReservation/:id', async (req, res) => {
  let reservationID = req.params.id;
  await reservation.deleteOne({id: reservationID});
  res.status(201).send();
})

/**
 * This delete method is used to delete the user which is accessible only by the admin
 */
router.delete('/deleteUser/:id',  async (req, res) => {
  let session = req.session;
  let userID = req.params.id;
  if (!session.userid && user.isAdministrator === false) {
    res.sendStatus(401);
    return;
  }
  await user.deleteOne({id: userID});
  res.status(201).send();
})

/**
 * This post method is used to edit the user details
 */
router.post('/editUser', async(req, res) => {
  
  let session = req.session;
  if (!session.userid) {
    res.sendStatus(401);
    return;
  }
  const doesUserExist = await user.findOne({__id: session.userid})
  if(doesUserExist){
     try{
        await user.updateOne({_id: session.userid},
        {$set : req.body })
        res.status(201).send();
        console.log("User Profile Updated succesfully!")
     }
     catch{
      res.status(400).send();
     }
  }
})

/**
 * This post method is used to edit the property details which the user have added
 */
router.post('/editProperty', async(req, res) => {
  // console.log(req.body);
  let session = req.session;
  if (!session.userid) {
    res.sendStatus(401);
    return;
  }
  const doesPropertyExist = await property.findOne({_id: req.body._id})
  // console.log(doesPropertyExist._id);
  if(doesPropertyExist){
     try{
        await property.updateOne({_id : doesPropertyExist._id},
        {$set : {
          ApartmentType: req.body.ApartmentType,
          Space: req.body.Space,
          Guests: req.body.Guests,
          Beds: req.body.Beds,
          Bathrooms: req.body.Bathrooms,
          Title: req.body.Title,
          Description: req.body.Description,
          Price: req.body.Price,
          features: {
              isWifi: req.body.isWifi,
              ac: req.body.ac,
              bar: req.body.bar,
              microwave: req.body.microwave,
              fridge: req.body.fridge,
              fireplace: req.body.fireplace,
              toaster: req.body.toaster,
              tv: req.body.tv,
          }
        } })
        res.status(201).send();
        console.log("Updated succesfully!")
     }
     catch{
      res.status(400).send();
     }
  }
})

/**
 *  This get method for getting all the properties listed for the admin view
 */
router.get('/getAllProperties', async (req, res) => {
      property.find({}, (err, results) => {
          res.send(results);
      });

})

/**
 *  This get method for getting all the users listed for the admin view
 */
router.get('/getAllUsers', async (req, res) => {
  user.find({}, (err, results) => {
      res.send(results);
  });

})


module.exports = router;
