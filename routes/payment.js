const router = require("express").Router()
const { createPaymentSession } = require("../controllers/PaymentController")

router.post("/", createPaymentSession)
// Router.get("/create", create)
// Router.get("/:id", getSingleArtile)
// Router.post("/", saveArticle)

module.exports = router;