const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const routes = require("./routes/route");

const app = express();
app.use(bodyParser.json());
const port = 4500;


app.use(routes);
//test our route
app.get("/", function(req, res) {
  res.send("hello 🌎");
});
//listen for requests
app.listen(port, () => {
console.log('🌎 live at ', port);
})
