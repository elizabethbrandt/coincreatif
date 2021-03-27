const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 3001;
const imageRouter = require("./routes/imageRoute");
const routes = require("./routes");
const mongoose = require("mongoose");
const path = require("path");

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
app.use(routes);
app.use(
  cors({
      origin: ["http://localhost:3000"],
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
      credentials: true //allow session cookie to pass through
  }));
app.use(express.static("public"));

// Connection to MongDB
mongoose
  .connect(
    process.env.MONGODB_URI || "mongodb://localhost/coincreatif",
    { useNewUrlParser: true })
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));


app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log("server working at http://localhost:" + PORT);
});