const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 3001;
const imageRouter = require("./routes/imageRoute");
const mongoose = require("mongoose");

require("dotenv").config();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use("/", imageRouter);
app.use(cors());
app.use(express.static("public"));

// Connection to MongDB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/coincreatif");


app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log("server working at http://localhost:" + PORT);
});
