const router = require("express").Router();
const path = require("path")
const multer  = require('multer')
const ImageUpload = require("../models/imageUpload");

// Creates a storage of images into the public/images folder using multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../client/public/images"))
  },
  filename: function (req, file, cb) {
    cb(null,  file.originalname)
  }
})

const upload = multer({ storage: storage })

router.post('/mymarket', upload.single('avatar'), function (req, res) {
  req.body.image = req.file.originalname;
  ImageUpload.create(req.body).then(function(results) {
    res.json(results)
  })
})

module.exports = router;