require("dotenv").config();

const {
  API_KEY: apiKey,
  SECRET_KEY: secretKey,
  PASS_PHRASE: passPhrase
} = process.env;

const authMaker = require("../../lib/AuthenticatedClient");
const authenticatedClient = authMaker(
  apiKey,
  secretKey,
  passPhrase,
  "https://www.okex.com",
  3000,
  {}
);
const errorHandler = require("../../lib/ErrorHandler");

module.exports.getCurrencies = async (req, res) => {
  try {
    const result = await authenticatedClient.get(
      "/api/account/v3/currencies",
      req.query
    );
    return res.status(200).json({
      ...result.data
    });
  } catch (e) {
    // console.log(e);
    return errorHandler(res, e);
  }
};

module.exports.walletInformation = async (req, res) => {
  try {
    const result = await authenticatedClient.get(
      "/api/account/v3/wallet",
      req.query
    );

    return res.status(200).json({
      ...result.data
    });
  } catch (e) {
    return errorHandler(res, e);
  }
};

module.exports.walletCurrency = async (req, res) => {
  const { currency } = req.params;
  try {
    const result = await authenticatedClient.get(
      `/api/account/v3/wallet/${currency}`,
      req.query
    );

    return res.status(200).json({
      ...result.data
    });
  } catch (e) {
    return errorHandler(res, e);
  }
};

module.exports.fundsTransfer = async (req, res) => {
  try {
    const result = await authenticatedClient.post(
      "/api/account/v3/transfer",
      req.body,
      req.query
    );

    return res.status(200).json({
      ...result.data
    });
  } catch (e) {
    return errorHandler(res, e);
  }
};

module.exports.withdrawal = async (req, res) => {
  try {
    const result = await authenticatedClient.post(
      "/api/account/v3/withdrawal",
      req.body,
      req.params
    );

    return res.status(200).json({
      ...result.data
    });
  } catch (e) {
    return errorHandler(res, e);
  }
};

module.exports.withdrawalFees = async (req, res) => {
  try {
    const result = await authenticatedClient.get(
      "/api/account/v3/withdrawal/fee",
      req.query
    );

    return res.status(200).json({
      ...result.data
    });
  } catch (e) {
    return errorHandler(res, e);
  }
};

module.exports.recentWithdrawalHistory = async (req, res) => {
  try {
    const result = await authenticatedClient.get(
      "/api/account/v3/withdrawal/history",
      req.query
    );

    return res.status(200).json({
      ...result.data
    });
  } catch (e) {
    return errorHandler(res, e);
  }
};

module.exports.recentWithdrawalHistoryOfCurrency = async (req, res) => {
  const { currency } = req.params;
  try {
    const result = await authenticatedClient.get(
      `/api/account/v3/withdrawal/history/${currency}`,
      req.query
    );

    return res.status(200).json({
      ...result.data
    });
  } catch (e) {
    return errorHandler(res, e);
  }
};

module.exports.billsDetails = async (req, res) => {
  try {
    const result = await authenticatedClient.get(
      "/api/account/v3/ledger",
      req.query
    );

    return res.status(200).json({
      ...result.data
    });
  } catch (e) {
    return errorHandler(res, e);
  }
};

module.exports.getDepositAddress = async (req, res) => {
  try {
    const result = await authenticatedClient.get(
      "/api/account/v3/deposit/address",
      req.query
    );

    return res.status(200).json({
      ...result.data
    });
  } catch (e) {
    return errorHandler(res, e);
  }
};

module.exports.getDepositHistoryOfAllCurrencies = async (req, res) => {
  try {
    const result = await authenticatedClient.get(
      "/api/account/v3/deposit/history",
      req.params
    );

    return res.status(200).json({
      ...result.data
    });
  } catch (e) {
    return errorHandler(res, e);
  }
};

module.exports.getDepositHistoryOfCurrency = async (req, res) => {
  const { currency } = req.params;
  try {
    const result = await authenticatedClient.get(
      `/api/account/v3/deposit/history/${currency}`,
      req.params
    );

    return res.status(200).json({
      ...result.data
    });
  } catch (e) {
    return errorHandler(res, e);
  }
};
