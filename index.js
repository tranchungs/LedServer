require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 6945;
var mongoose = require("mongoose");

try {
  mongoose.connect(process.env.MONGO_URL);
} catch (e) {
  console.log(e);
}

let apiGetDataRoute = require("./api/routes/getData.route");
let apiUpdateRoute = require("./api/routes/updateData.route");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/api/getdata", apiGetDataRoute);
app.use("/api/updatedata", apiUpdateRoute);

app.listen(PORT, () => {
  console.log(`Sever listen on ${PORT}`);
});
