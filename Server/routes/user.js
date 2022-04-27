const express = require("express");
const { nextTick } = require("process");
const user = require("../model/user");
const router = express();
const bcrypt = require("bcrypt");
const { check, validationResult } = require("express-validator");
const property = require("../model/property");
const reservation = require('../model/reservation')
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

router.post("/userSignUp",
  validateEmail(),
  validatePassword(),
  async (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      console.log(result.errors.map((error) => error.msg).join(", "));
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

router.get("/getPropertyByUser", (req, res) => {
  let session = req.session;
  if (!session.userid) {
    res.sendStatus(401);
  }
  property.find({user : session.userid}, function (err, user) {
    if (err) {
      res.send("Something went wrong");
    }
    console.log(user);
    res.json(user);
  });
});

router.get("/getUserDetails", (req, res) => {
  let session = req.session;
  if (!session.userid) {
    res.sendStatus(401);
  }
  user.find({_id : session.userid}, function (err, user) {
    if (err) {
      res.send("Something went wrong");
    }
    console.log(user);
    res.json(user);
  });
});

router.post("/addReservation", async (req, res) => {
  console.log(req.body);
  let session = req.session;
  if (!session.userid) {
    res.sendStatus(401);
  }
  const reservationData = new reservation({
    user: session.userid,
    property: req.body.propertyID,
    checkInDate: req.body.checkInDate,
    checkOutDate: req.body.checkOutDate, 
    cost: req.body.totalCost, 
    numberOfGuests: req.body.numberOfGuests
  });

  try {
    console.log(reservationData);
    let doc = await reservationData.save();
    res.status(201).send(doc);
    console.log("Reservation added successfully");
  } catch (error) {
    console.log(error);
  }
});


router.get('/getReservationsByUser', (req, res) => {
  let session = req.session;
  if (!session.userid) {
    res.sendStatus(401);
  }
  reservation.find({user : session.userid}, function (err, user) {
    if (err) {
      res.send("Something went wrong");
    }
    console.log(user);
    res.json(user);
  });

});


router.get("/getPropertyByLocation",(req, res) => {
  // console.log(req.query.search);
  property.find({SearchParam : req.query.search}, function (err, user) {
    if (err) {
      res.send("Something went wrong");
      return;
    }
    console.log(user);
    res.json(user);
  });
});

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
      return res.status(200).json({ msg: "User logged in successfully" });
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

router.post("/addNewProperty", async (req, res) => {
  console.log(req.body);
  let session = req.session;
  if (!session.userid) {
    res.sendStatus(401);
  }
  const propertyData = new property({
    user: session.userid,
    ApartmentType: req.body.ApartmentType,
    SpaceType: req.body.Space,
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
    console.log(propertyData);
    let doc = await propertyData.save();
    res.status(201).send(doc);
    console.log("Property added successfully");
  } catch (error) {
    console.log(error);
  }
});

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

router.delete('/deleteProperty/:id', async (req, res) => {
  let propertyID = req.params.id;
  await property.deleteOne({id: propertyID});
  res.status(201).send();
})

router.delete('/deleteReservation/:id', async (req, res) => {
  let reservationID = req.params.id;
  await property.deleteOne({id: reservationID});
  res.status(201).send();
})

router.delete('/deleteUser/:id',  async (req, res) => {
  let userID = req.params.id;
  await user.deleteOne({id: userID});
  res.status(201).send();
})

router.patch('/editUser', async(req, res) => {
  
  let session = req.session;
  const doesUserExist = await user.findOne({__id: session.userid})
  if(doesUserExist){
    // Add validations for email ID
    // Add validations for password
     try{
        await user.updateOne({_id: session.userid},
        {$set : req.body })
        res.status(201).send();
        console.log("Updated succesfully!")
     }
     catch{
      res.status(400).send();
     }
  }
})

router.get('/getAllProperties', async (req, res) => {
      property.find({}, (err, results) => {
          res.send(results);
      });

})

router.get('/getAllUsers', async (req, res) => {
  user.find({}, (err, results) => {
      res.send(results);
  });

})

// router.post(
//   "/edit",
//   validateEmail(),
//   validatePassword(),
//   async (req, res, next) => {
//     const result = validationResult(req);
//     if (!result.isEmpty()) {
//       console.log(result.errors.map((error) => error.msg).join(", "));
//       return res.status(400).json(result);
//     }
//     const userToUpdate = await user.findOne({ email: req.query.email }).exec();
//     console.log(userToUpdate);
//     if (!userToUpdate) {
//       res.status(400).send("User does not exist");
//       return;
//     }
//     const hash = await bcrypt.hash(req.body.password, saltRounds);
//     user.findOneAndUpdate(
//       { _id: userToUpdate._id },
//       { email: req.body.email, password: hash },
//       { new: true },
//       async (err, docs) => {
//         if (err) {
//           console.error("Email should be unique");
//         } else {
//           console.log("User updated successfully");
//         }
//         res.json(docs);
//       }
//     );
//   }
// );

// router.delete("/delete", async (req, res, next) => {
//   const userToDelete = await user.findOne({ email: req.query.email });
//   if (!userToDelete) {
//     console.log("User does not exist");
//     return res.status(400).json({ msg: "User does not exist" });
//   }
//   bcrypt.compare(
//     req.query.password,
//     userToDelete.password,
//     async (err, data) => {
//       if (err) throw err;
//       if (data) {
//         await user.findByIdAndRemove(userToDelete._id).exec();
//         console.log("User deleted successfully");
//         return res.status(200).json({ msg: "User deleted successfully" });
//       } else {
//         console.log(
//           "Not able to delete User since email or password provided does not match"
//         );
//         return res.status(400).json({
//           msg: "Not able to delete User since email or password provided does not match",
//         });
//       }
//     }
//   );
// });



module.exports = router;
