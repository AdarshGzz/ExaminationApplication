const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors())
const port = 5400;

const QueBank = require("./QuestionDB");
url = "mongodb://localhost:27017/ExamApplication";

mongoose.connect(url, (err) => {
  if (err) {
    console.log(`unable to connet`);
  }
  console.log(`database connected`);
});

app.post("/", async (req, res) => {
  try {
    let data = new QueBank(req.body);
    const result = await data.save();
    res.send(result);
    console.log(`data inserted`);
  } catch (error) {
    console.log(error);
  }
});

app.get("/allque/", async (req, res) => {
  try {
    let data = await QueBank.find();
    res.json(data);
  } catch (err) {
    console.log(err);
  }
});

app.get("/phyque/", async (req, res) => {
  try {
    let data = await QueBank.find({"subject":"physics"});
    res.json(data);
  } catch (err) {
    console.log(err);
  }
});
app.get("/chemque/", async (req, res) => {
  try {
    let data = await QueBank.find({"subject":"chemistry"});
    res.json(data);
  } catch (err) {
    console.log(err);
  }
});
app.get("/mathsque/", async (req, res) => {
  try {
    let data = await QueBank.find({"subject":"maths"});
    res.json(data);
  } catch (err) {
    console.log(err);
  }
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
