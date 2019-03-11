const express = require("express");
const tokenTradingCtrl = require("./tokenTrading.ctrl");

const router = express.Router();

router.get("/accounts", tokenTradingCtrl.spotTradingAccount);
router.get(
  `/accounts/:currency`,
  tokenTradingCtrl.spotTradingAccountOfCurrency
);
router.get("/accounts/:currency/ledger", tokenTradingCtrl.billsDetails);
router.post("/orders", tokenTradingCtrl.placeOrder);
router.post("/batch_orders", tokenTradingCtrl.placeMultipleOrders);
router.post("/cancel_orders/:order_id", tokenTradingCtrl.cancelOrder);
router.post("/cancel_batch_orders", tokenTradingCtrl.cancelAllOrders);
router.get("/orders", tokenTradingCtrl.getOrderList);
router.get("/orders_pending", tokenTradingCtrl.getAllOpenOrders);
router.get("/orders/:id", tokenTradingCtrl.getOrderDetails);
router.get("/fills", tokenTradingCtrl.getTransactionDetails);
router.get("/instruments", tokenTradingCtrl.getTokenPairDetails);
router.get("/instruments/:instrument_id/book", tokenTradingCtrl.getOrderBook);
router.get("/instruments/ticker", tokenTradingCtrl.getAllTokenPairsInformation);
router.get(
  "/instruments/:instrument_id/ticker",
  tokenTradingCtrl.getTokenInformation
);
router.get(
  "/instruments/:instrument_id/trades",
  tokenTradingCtrl.getFilledOrdersInformation
);
router.get(
  "/instruments/:instrument_id/candles",
  tokenTradingCtrl.getMarketData
);

module.exports = router;
