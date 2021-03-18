const express = require("express");

const routes = require("./routes/uploadRoutes");
const app = express();
const cors = require("cors");
const dbConfig = require("./config/db");

const api = require("./routes/uploadRoutes");
const multerUploads = require("./middleware/multer");
const { ImageUploadRouter } = require("./routes/uploadRoutes");

require("dotenv").config();


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

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", require("./routes/products"));
app.use("/payment", require("./routes/payment"));

app.get("/checkout", (req, res) => {
  res.render("checkout");
});

app.all("*", (req, res) => {
  res.render("pages.404");
});


// Start the API server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("server working at http://localhost:" + port);
});
