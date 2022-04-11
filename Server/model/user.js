var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const userSchema = new Schema({

    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
    }
})

const userModel = mongoose.model('users',userSchema);
module.exports = userModel;