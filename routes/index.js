const router = require("express").Router();
const productRoute = require("./products");
const cartRoute = require("./cart")

router.use("/api", productRoute);
router.use("/api", cartRoute);

module.exports = router;