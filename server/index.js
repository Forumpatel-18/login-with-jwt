const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const authRoutes = require("./Routes/AuthRoutes");

app.listen(4000, () => {
  console.log("Server started on port 4000");
});

app.use(
  cors({
    origin: ["http://localhost:3000"],
    method: ["GET", "POST"],
    credentails: true,
  })
);

mongoose
  .connect("mongodb://localhost:27017/jwt", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connection established");
  })
  .catch((err) => {
    console.log(console.log(err.message));
  });

app.use(express.json());
app.use("/", authRoutes);
