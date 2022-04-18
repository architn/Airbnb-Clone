const express = require("express");
const { nextTick } = require("process");
const user = require("../model/user");
const router = express();
const bcrypt = require("bcrypt");
const { check, validationResult } = require("express-validator");
const property = require("../model/property");

const saltRounds = 10;

const validateEmail = () => {
  return check("email", "Invalid Email Address").isEmail();
};

const validatePassword = () => {
  return check(
    "password",
    "Invalid Password. Password must contain 1 uppercase, 1 lowercase, 1 numeric character and 1 special character atleast"
  ).matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/);
  // next();
};
router.post(
  "/signup",
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

router.get("/property", (req, res) => {
  let session = req.session;
  if (!session.userid) {
    res.sendStatus(401);
  }
  // console.log(session.userid);

  property.find({user : session.userid}, function (err, user) {
    if (err) {
      res.send("Something went wrong");
      // next();
    }
    console.log(user);
    res.json(user);
  });
});

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

router.post("/login", async (req, res, next) => {
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
      console.log(session);
      // console.log(data);
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

router.post("/host", async (req, res) => {
  console.log(req.body);
  let session = req.session;
  if (!session.userid) {
    res.sendStatus(401);
  }
  const propertyData = new property({
    user: session.userid,
    ApartmentType: req.body.ApartmentType,
    SpaceType: req.body.SpaceType,
    Street: req.body.Street,
    City: req.body.City,
    State: req.body.State,
    Zip: req.body.Zip,
    Country: req.body.Country,
    Guests: req.body.Guests,
    Beds: req.body.Beds,
    Bathrooms: req.body.Bathrooms,
    Title: req.body.Title,
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

module.exports = router;
