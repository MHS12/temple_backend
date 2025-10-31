const router = require("express").Router();
const upload = require("../middleware/upload");
const { getAllImages, addImage,addImageFile} = require("../controllers/imageController");
/**
 * @swagger
 * /all:
 *   get:
 *     summary: Get all images
 *     description: Fetch all uploaded images
 *     responses:
 *       200:
 *         description: Successfully fetched all Data
 */
router.get("/all", getAllImages);

/**
 * @swagger
 * /add:
 *   post:
 *     summary: Add a new image
 *     description: Save image metadata to MongoDB
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               imageTitle:
 *                 type: string
 *                 description: Title related to the image
 *               imageDescription:
 *                 type: string
 *                 description: Description specific to the image
 *               title:
 *                 type: string
 *                 description: General title for categorization
 *               description:
 *                 type: string
 *                 description: General description or notes
 *               Time:
 *                 type: string
 *                 description: Time value or timestamp
 *               specialTime:
 *                 type: string
 *                 description: A special time or event marker
 *               url:
 *                 type: string
 *                 description: URL or path to the image
 *     responses:
 *       201:
 *         description: Image added successfully
 */
router.post("/add", addImage);



/**
 * @swagger
 * /addimg:
 *   post:
 *     summary: Upload an image file
 *     description: Upload a single image file (e.g. JPG/PNG) to Cloudinary and store its URL in MongoDB
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               image:
 *                 type: string
 *                 format: binary
 *                 description: The image file to upload
 *               title:
 *                 type: string
 *                 description: Optional image title
 *     responses:
 *       201:
 *         description: Image uploaded successfully
 */
router.post("/addimg", upload.single("image"), addImageFile);

module.exports = router;
