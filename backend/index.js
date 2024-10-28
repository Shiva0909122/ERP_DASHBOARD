const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const Routes = require("./routes/route.js");

const mongoURI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/sm';
const PORT = process.env.PORT || 5000;

app.use(express.json({ limit: '10mb' }));
app.use(cors());

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB successfully");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB", error);
  });

app.use('/', Routes);

// Basic error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
  console.log(`Server started at port no. ${PORT}`);
});
