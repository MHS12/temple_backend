const mon = require("mongoose");

const imageSchema = new mon.Schema({
    imageTitle: String,
    imageDescription: String,
    title: String,
    description: String,
    Time: String,
    specialTime: String,
    url: String,
    description: String,
    createdAt: { type: Date, default: Date.now },
    createdBy: { type: mon.Schema.Types.ObjectId, ref: "User" }
});

const Image = mon.model("Image", imageSchema);