const express = require("express");
const exphbs = require("express-handlebars");
const methodOverride = require("method-override");
const session = require("express-session");
const routes = require("./routes");
const PORT = process.env.PORT || 3000;

require("./config/mongoose");

const app = express();

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//express session
app.use(
  session({
    secret: "ThisIsMySecret",
    resave: false,
    saveUninitialized: true,
  })
);

//body parser
app.use(express.urlencoded({ extended: true }));

//method override
app.use(methodOverride("_method"));

app.use(routes);

app.listen(PORT, () => {
  console.log(`running on http://localhost:${PORT}`);
});
