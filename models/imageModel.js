const MongoDB = require("mongoose");

const imageSchema = new MongoDB.Schema({
  imageTitle: String,
  imageDescription: String,
  title: String,
  description: String,
  Time: String,
  specialTime: String,
  url: String,
  description: String,
  createdAt: { type: Date, default: Date.now },
  createdBy: { type: MongoDB.Schema.Types.ObjectId, ref: "User" },
});

module.exports = MongoDB.model("ImageDetails", imageSchema);
