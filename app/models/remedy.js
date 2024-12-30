



const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RemedySchema = new Schema({
    symptom: { type: String, required: true },
    remedies: [
        {
            name: { type: String, required: true },
            usage: { type: String, required: true }
           
        }
    ],

favoritedBy: [{ type: Schema.Types.ObjectId, ref: "User" }] // Array of user IDs




        });

module.exports = mongoose.model("Remedy", RemedySchema);






