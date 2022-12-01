const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const port = 3000;

//middlewares
app.use(express.json());

//routes
app.get("/", (req, res) => res.send("Hello World!"));
app.use("/api/v1/tasks", tasks);
//server starting
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
