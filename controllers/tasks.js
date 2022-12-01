const getAllTask = (req, res) => {
  res.send("all items");
};

const getTask = (req, res) => {
  res.send("one item");
};

const addTask = (req, res) => {
  res.send("new item");
};

const deleteTask = (req, res) => {
  res.send("deleted item");
};

const editTask = (req, res) => {
  res.send("edited item");
};

module.exports = { getAllTask, getTask, editTask, deleteTask, addTask };
