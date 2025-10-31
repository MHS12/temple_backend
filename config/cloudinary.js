const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: 'Temple',
  api_key: '887179234477494',
  api_secret:'nUVnYLHyJluXded1_S_w3bs70nE',
});

module.exports = cloudinary;