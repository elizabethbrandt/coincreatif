const express = require("express");

const routes = require("./routes/uploadRoutes");
const app = express();
const cors = require("cors");
const dbConfig = require("./config/db");
const PORT = process.env.PORT || 3001;

const api = require("./routes/uploadRoutes");
const multerUploads = require("./middleware/multer");
const { ImageUploadRouter } = require("./routes/uploadRoutes");

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
<<<<<<< HEAD
app.use(routes);


// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/coincreatif");
=======
app.use("/api", ImageUploadRouter);
app.use(cors());
app.use("/public", express.static("public"));
app.use("/api", api);
>>>>>>> da3144be08630567c9bcab15f17717e144047d15

// Start the API server
app.listen(PORT, () => {
  console.log(
    "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
    PORT,
    PORT
  );
});

function checkEnv() {
  const price = process.env.PRICE;
  if(price === "price_12345" || !price) {
    console.log("You must set a Price ID in the environment variables. Please see the README.");
    process.exit(0);
  }
}