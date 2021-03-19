import UploadImage from "../controllers/uploadImage";
import parser from "../middleware/cloudinaryConfig";
const router = require("express").Router();

router.post("/image", parser.single("image"), UploadImage);

module.exports = router;