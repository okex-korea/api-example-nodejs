const express = require("express");
const bodyParser = require("body-parser");
const api = require("./api");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api/account/v3", api.wallet);
app.use("/api/spot/v3", api.tokenTrading);

app.listen(4000, () => {
  console.log("app is running on port", 4000);
});
