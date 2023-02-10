const { MongoClient, ServerApiVersion } = require("mongodb");
const dotenv = require("dotenv");
dotenv.config();
const url = process.env.URL

const client = new MongoClient(`${url}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
const database = "examApp";

const pool = async (res, req) => {
  try {
    let result = await client.connect();
    let db = result.db(database);
    return db.collection("questionBank");
  } catch (err) {
    console.error(err);
  }
};

module.exports = pool;
