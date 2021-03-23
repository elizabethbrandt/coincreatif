const router = require("express").Router();
const productRoute = require("./products");

router.use("/api", productRoute);

module.exports = router;