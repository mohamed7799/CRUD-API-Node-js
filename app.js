require("dotenv").config();
require("./DB/connect");
const express = require("express");
const tasks = require("./routes/tasks");
const main = require("./DB/connect");
const app = express();
const port = process.env.PORT || 3000;

//middlewares
app.use(express.json());

//routes
app.get("/", (req, res) => res.send("Hello World!"));
app.use("/api/v1/tasks", tasks);
//server starting

const start = async () => {
  try {
    await main();
    app.listen(port, () => console.log("the server is running"));
  } catch (error) {}
};
start();
