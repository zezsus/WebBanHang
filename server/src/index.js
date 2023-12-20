const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const routers = require("./routers/index");

const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 5001;
mongoose
  .connect(process.env.DB)
  .then(() => {
    console.log("Connected database");
  })
  .catch((error) => {
    console.log(error);
  });

routers(app);

app.listen(port, () => {
  console.log("Server listen on port", port);
});
