const express = require("express");
const exphbs = require("express-handlebars");
const methodOverride = require("method-override");
const flash = require("connect-flash");
const session = require("express-session");
const routes = require("./routes");
const PORT = process.env.PORT || 3000;
const usePassport = require("./config/passport");

// console.log(process.env);
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
// console.log("----------------");
// console.log(process.env);

require("./config/mongoose");
const app = express();

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//express session
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

//body parser
app.use(express.urlencoded({ extended: true }));

//method override
app.use(methodOverride("_method"));

usePassport(app);

app.use(flash());

app.use((req, res, next) => {
  res.locals.isAuthenticated = req.isAuthenticated;
  res.locals.user = req.user;
  res.locals.success_msg = req.flash("success_msg");
  res.locals.warning_msg = req.flash("warning_msg");
  next();
});

app.use(routes);

app.listen(PORT, () => {
  console.log(`running on http://localhost:${PORT}`);
});
