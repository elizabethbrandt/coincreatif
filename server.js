const express = require("express");

const mongoose = require("mongoose");
const routes = require("./client/routes/userRoutes");
const app = express();
const cors = require("cors");
const dbConfig = require("./client/config/db");
const PORT = process.env.PORT || 3001;

const api = require("./client/routes/userRoutes");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);
app.use(cors());
app.use("/public", express.static("public"));
app.use("/api", api);

app.use((req, res, next) => {
  setImmediate(() => {
    next(new Error("Something went wrong."));
  });
});

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});

// Connect to the Mongo DB
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Database connected succesfully!");
},
  error => {
    console.log("Could not connect to database: " + error);
  }
)

// Start the API server
app.listen(PORT, () => {
  console.log(
    "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
    PORT,
    PORT
  );
});