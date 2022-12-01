const express = require("express");
const router = express.Router();
const {
  getAllTask,
  getTask,
  editTask,
  deleteTask,
  addTask,
} = require("../controllers/tasks");

router.route("/").get(getAllTask).post(addTask);
router.route("/:id").delete(deleteTask).patch(editTask).get(getTask);

module.exports = router;
