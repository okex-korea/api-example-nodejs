const express = require("express");
const walletCtrl = require("./wallet.ctrl");

const router = express.Router();

router.get("/currencies", walletCtrl.getCurrencies);
router.get("/wallet", walletCtrl.walletInformation);
router.get("/wallet/:currency", walletCtrl.walletCurrency);
router.post("/transfer", walletCtrl.fundsTransfer);
router.post("/withdrawal", walletCtrl.withdrawal);
router.get("/withdrawal/fee", walletCtrl.withdrawalFees);
router.get("/withdrawal/history", walletCtrl.recentWithdrawalHistory);
router.get(
  "/withdrawal/history/:currency",
  walletCtrl.recentWithdrawalHistoryOfCurrency
);
router.get("/ledger", walletCtrl.billsDetails);
router.get("/deposit/address", walletCtrl.getDepositAddress);
router.get("/deposit/history", walletCtrl.getDepositHistoryOfAllCurrencies);
router.get(
  "/deposit/history/:currency",
  walletCtrl.getDepositHistoryOfCurrency
);

module.exports = router;
