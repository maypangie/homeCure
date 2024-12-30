const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FavoriteSchema = new Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    name: { type: String, required: true },
    usage: { type: String, required: true },
});

module.exports = mongoose.model("Favorite", FavoriteSchema);


