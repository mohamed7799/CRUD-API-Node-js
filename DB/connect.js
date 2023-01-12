const mongoose = require("mongoose");

async function main() {
  await mongoose.set("strictQuery", false);
  await mongoose.connect(process.env.MONGO_URL);
  console.log("connected to the DB");
}

module.exports = main;
