const express = require("express");
const router = express.Router();

// 引入 home 模組程式碼
const home = require("./modules/home");
// 引入 todos 模組程式碼
const todos = require("./modules/todos");

router.use("/", home);

router.use("/todos", todos);

module.exports = router;
