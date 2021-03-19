const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 3001;
const imageRouter = require("./routes/imageRoute");
const mongoose = require("mongoose");

// Adding the middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use("/", imageRouter);
app.use(cors());
app.use("/public", express.static("public"));

// Connection to MongDB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/coincreatif");

// Start the API server
app.listen(PORT, () => {
  console.log(
    "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
    PORT,
    PORT
  );
});