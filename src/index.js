const express = require("express");
const bodyParser = require("body-parser");
const api = require("./api");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api/account/v3", api.wallet);

// app.get("/api/account/v3/currencies", async (req, res) => {
//   try {
//     const result = await authenticatedClient.get(req.path, req.query);
//     return res.status(200).json({
//       ...result.data
//     });
//   } catch (error) {
//     const { status, data } = error.response;
//     return res.status(status).json({
//       ...data
//     });
//   }
// });

// app.get("/api/account/v3/withdrawal/fee", async (req, res) => {
//   try {
//     const result = await authenticatedClient.get(req.path, req.query);
//     return res.status(200).json({
//       ...result.data
//     });
//   } catch (error) {
//     const { status, data } = error.response;
//     return res.status(status).json({
//       ...data
//     });
//   }
// });

// app.get("/api/account/v3/wallet", async (req, res) => {
//   try {
//     const result = await authenticatedClient.get(req.path, req.query);
//     return res.status(200).json({
//       ...result.data
//     });
//   } catch (error) {
//     const { status, data } = error.response;
//     return res.status(status).json({
//       ...data
//     });
//   }
// });

// app.get("/api/account/v3/deposit/address", async (req, res) => {
//   try {
//     const result = await authenticatedClient.get(req.path, req.query);
//     return res.status(200).json({
//       ...result.data
//     });
//   } catch (error) {
//     const { status, data } = error.response;
//     return res.status(status).json({
//       ...data
//     });
//   }
// });

// app.get("/api/account/v3/wallet/:currency", async (req, res) => {
//   try {
//     const result = await authenticatedClient.get(req.path, req.query);
//     return res.status(200).json({
//       ...result.data
//     });
//   } catch (error) {
//     const { status, data } = error.response;
//     return res.status(status).json({
//       ...data
//     });
//   }
// });

// app.get("/api/account/v3/ledger", async (req, res) => {
//   try {
//     const result = await authenticatedClient.get(req.path, req.query);
//     return res.status(200).json({
//       ...result.data
//     });
//   } catch (error) {
//     const { status, data } = error.response;
//     return res.status(status).json({
//       ...data
//     });
//   }
// });

app.listen(4000, () => {
  console.log("app is running on port", 4000);
});
