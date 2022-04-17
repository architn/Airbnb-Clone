var mongoose = require("mongoose");

var Schema = mongoose.Schema;

const propertySchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },

  ApartmentType: {
    type: String,
  },

  SpaceType: {
    type: String,
  },

  Space: {
    type: String,
  },

  Street: {
    type: String,
  },

  City: {
    tyep: String,
  },

  State: {
    type: String,
  },

  Zip: {
    type: Number,
  },

  County: {
    type: String,
  },

  Country: {
    type: String,
  },

  Guests: {
    type: Number,
  },

  Beds: {
    type: Number,
  },

  Bathrooms: {
    type: Number,
  },

  Title: {
    type: String,
  },

  Description: {
    type: String,
  },

  Price: {
    type: Number,
  },
});

const propertyModel = mongoose.model("property", propertySchema);

module.exports = propertyModel;
