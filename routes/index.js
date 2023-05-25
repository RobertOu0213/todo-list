const express = require("express");
const router = express.Router();

// 引入 home 模組程式碼
const home = require("./modules/home");
// 引入 todos 模組程式碼
const todos = require("./modules/todos");
//引入login 模組程式碼
const users = require("./modules/users");

const { authenticator } = require("../middleware/auth");

router.use("/todos", authenticator, todos);
router.use("/users", users);
router.use("/", authenticator, home);

module.exports = router;
