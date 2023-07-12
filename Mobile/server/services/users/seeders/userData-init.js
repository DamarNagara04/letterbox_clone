// const user = require("./userData.json");

// const { MongoClient } = require("mongodb");

// const connectionString = "mongodb://127.0.0.1:27017"; // nanti ganti dengan dotenv

// let db = null;

// const mongoConnect = async () => {
//   const client = new MongoClient(connectionString);

//   try {
//     const database = client.db("chal2-phas3-hck8");

//     db = database;

//     return database;
//   } catch (err) {
//     await client.close();
//   }
// };

// const getDatabase = () => db;

// module.exports = {
//   mongoConnect,
//   getDatabase,
// };
