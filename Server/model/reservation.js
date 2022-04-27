var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const reservationSchema = new Schema({

    property: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "properties",
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
    },

    checkInDate: {
        type: String,

    },

    checkOutDate: {
        type: String,

    },
    cost: {
        type: Number,

    },
    numberOfGuests: {
        type: Number,
    }
})

const reservationModel = mongoose.model("reservation", reservationSchema);
module.exports = reservationModel;
