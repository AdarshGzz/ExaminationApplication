const express = require("express");
const cors = require("cors");
const app = express();
const pool = require("./QuestionDB");
const dotenv = require("dotenv");
app.use(express.json());
app.use(cors());
const port = process.env.PORT;



app.get("/allque/", async (req, res) => {
  try {
    let data =  await pool()
    data = await data.find().toArray();
    res.json(data);
  } catch (err) {
    console.log(err);
  }
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
