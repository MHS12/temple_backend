const imageModel = require("../models/imageModel");

// Controller to get all images
const getAllImages = (req, res) => {
  res.json({ name: "List of all images" });
};

  // imageTitle: String,
  // imageDescription: String,
  // title: String,
  // description: String,
  // Time: String,
  // specialTime: String,
  // url: String,
  // description: String,

// Controller to add images can be added here
const addImage = (req, res) => {
  const data = req.body;
 
  const newImage = new imageModel({
    imageTitle: data.imageTitle,
    imageDescription: data.imageDescription,
    title: data.title,
    description: data.description,
    Time: data.Time,
    specialTime: data.specialTime,
    url: data.url,
    description: data.description,
  });
  newImage.save();

  res.json({ name: "Image added successfully" });
}

const addImageFile = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No image uploaded" });
    }

    res.status(201).json({
      message: "✅ Image uploaded successfully",
      imageUrl: req.file.path, // Cloudinary URL
    });
  } catch (error) {
    console.error("❌ Upload error:", error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllImages,
  addImage,
  addImageFile
};
