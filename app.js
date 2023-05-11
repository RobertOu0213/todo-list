const express = require("express");
const exphbs = require("express-handlebars");
const methodOverride = require("method-override");
const routes = require("./routes");
const PORT = process.env.PORT || 3000;

require("./config/mongoose");

const app = express();

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//body parser
app.use(express.urlencoded({ extended: true }));

//method override
app.use(methodOverride("_method"));

app.use(routes);

app.listen(PORT, () => {
  console.log(`running on http://localhost:${PORT}`);
});
