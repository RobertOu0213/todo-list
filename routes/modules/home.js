const express = require("express");
const router = express.Router();

const Todo = require("../../models/todo");

//定義路由首頁
router.get("/", (req, res) => {
  Todo.find()
    .lean()
    .sort({ _id: "desc" })
    .then((todos) => res.render("index", { todos }))
    .catch((error) => console.error(error));
});

module.exports = router;
