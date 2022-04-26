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

  Space: {
    type: String,
  },

  Street: {
    type: String,
  },

  City: {
    type: String,
  },

  State: {
    type: String,
  },

  Zip: {
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

  SearchParam: {
    type: String,
  },

  Price: {
    type: Number,
  },

  lat: {
    type: Number,
    default: 40.7549
  },
  
  long: {
    type: Number,
    default: -73.9840
  },

  features: {
    isWifi: { type: Boolean, default: false },
    ac: { type: Boolean, default: false },
    bar: { type: Boolean, default: false },
    microwave: { type: Boolean, default: false },
    fireplace: { type: Boolean, default: false },
    toaster: { type: Boolean, default: false },
    fridge: { type: Boolean, default: false },
    tv: { type: Boolean, default: false }
  },

});

const propertyModel = mongoose.model("property", propertySchema);

module.exports = propertyModel;
