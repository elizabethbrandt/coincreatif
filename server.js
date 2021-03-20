const express = require("express");
const uuid = require("uuid");
const routes = require("./routes/uploadRoutes");
const app = express();
const cors = require("cors");
const dbConfig = require("./config/db");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const api = require("./routes/uploadRoutes");
const multerUploads = require("./middleware/multer");
const { ImageUploadRouter } = require("./routes/uploadRoutes");


// Start the API server
const port = process.env.PORT || 3000;


// Connect to MongDB
require("./config/db");

    
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


// Add routes, both API and view
app.use("/api", ImageUploadRouter);
app.use(cors());
app.use("/public", express.static("public"));
app.use("/api", api);

app.use((req, res, next) => {
  res.locals.stringify = JSON.stringify;
  res.locals.parse = JSON.parse;
  next();
});

// Define Stripe here
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Add your Stripe Secret Key to the .require('stripe') statement!");
});

app.post("/checkout", async (req, res) => {
  console.log("Request:", req.body);

  let error;
  let status;
  try {
    const { product, token } = req.body;

    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id
    });

    const idempotency_key = uuid();
    const charge = await stripe.charges.create(
      {
        amount: product.price * 100,
        currency: "usd",
        customer: customer.id,
        receipt_email: token.email,
        description: `Purchased the ${product.name}`,
        shipping: {
          name: token.card.name,
          address: {
            line1: token.card.address_line1,
            line2: token.card.address_line2,
            city: token.card.address_city,
            country: token.card.address_country,
            postal_code: token.card.address_zip
          }
        }
      },
      {
        idempotency_key
      }
    );
    console.log("Charge:", { charge });
    status = "success";
  } catch (error) {
    console.error("Error:", error);
    status = "failure";
  }

  res.json({ error, status });
});



app.listen(port, () => {
  console.log("server working at http://localhost:" + port);
});
