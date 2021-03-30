const router = require("express").Router();
const path = require("path")
const multer  = require('multer')
// const ImageUpload = require("../models/imageUpload");
const Item = require("../models/item")

// Creates a storage of images into the public/images folder using multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../public/images"))
  },
  filename: function (req, file, cb) {
    cb(null,  file.originalname)
  }
})

const upload = multer({ storage: storage })

router.post('/mymarket', upload.single('image'), function (req, res) {
  console.log(req.body)
  req.body.image = req.file.originalname;
  Item.create(req.body).then(function(results) {
    res.redirect("/mymarket")
  })
})

module.exports = router;