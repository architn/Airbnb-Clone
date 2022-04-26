var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const userSchema = new Schema({

    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
    }, 
    name: {
        type: String,
    },
    isAdministrator: {
        type: Boolean,
        default: false,
    },
    mobile: {
        type: String,
    },
    address: {
        type: String,
        default: '',
    },
    bio: {
        type: String,
        default: '',
    },
})

const userModel = mongoose.model('users',userSchema);
module.exports = userModel;