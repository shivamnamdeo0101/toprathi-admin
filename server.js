require("dotenv").config({ path: "./config.env" });
require('./helpers/init_redis')

const express = require("express");
const app = express();
const connectDB = require("./config/db");
const errorHandler = require("./middleware/error");
const cors = require('cors');
const path = require('path');



connectDB();

app.use(cors({
  "origin": ['https://toprathi.onrender.com','https://toprathi-9ce5d.web.app','http://localhost:3000'],
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
}));


app.use(express.json());


// app.use(express.static(path.join(__dirname, 'client/build')))
// app.get('*', (request, response) => {
//   response.sendFile(path.join(__dirname + '/build/index.html'));
// });

app.get("/", (req, res, next) => {
  res.send("Api running");
});

// Connecting Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/private", require("./routes/private"));

// Error Handler Middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () =>
  console.log(`Sever running on port ${PORT}`)
);

process.on("unhandledRejection", (err, promise) => {
  console.log(`Logged Error: ${err.message}`);
  server.close(() => process.exit(1));
});
