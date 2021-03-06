const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Mongodb connection is established successfullly");
});

//Routes setup
const qaRouter = require("./routes/Qa");
const qnaRouter = require("./routes/Qna");
const userRouter = require("./routes/User");
const authRoute = require("./routes/Auth");

app.use("/Qas", qaRouter);
app.use("/Qnas", qnaRouter);
app.use("/user", userRouter);
app.use("/auth", authRoute);

app.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});
