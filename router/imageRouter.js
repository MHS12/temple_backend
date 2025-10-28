const router = require("express").Router();

const { getAllImages } = require("../controllers/imageController");

router.get("/all", getAllImages);
module.exports = router;
