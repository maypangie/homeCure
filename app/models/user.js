/*const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    email: String,
    password: String
});

module.exports = mongoose.model('User', userSchema); */


const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: String,
    password: String,


        favorites: [{
            name: String,
            benefits: String,
        }],


        favoritedBy: [{ type: Schema.Types.ObjectId, ref: "User" }] // Array of user IDs
    });
    



   


module.exports = mongoose.model('User', UserSchema);




