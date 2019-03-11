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

module.exports.spotTradingAccount = async (req, res) => {
  try {
    const result = await authenticatedClient.get(
      "/api/spot/v3/accounts",
      req.query
    );
    return res.status(200).json({
      ...result.data
    });
  } catch (e) {
    return errorHandler(res, e);
  }
};

module.exports.spotTradingAccountOfCurrency = async (req, res) => {
  const { currency } = req.params;
  try {
    const result = await authenticatedClient.get(
      `/api/spot/v3/accounts/${currency}`,
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
  const { currency } = req.params;
  try {
    const result = await authenticatedClient.get(
      `/api/spot/v3/accounts/${currency}/ledger`,
      req.query
    );
    return res.status(200).json({
      ...result.data
    });
  } catch (e) {
    return errorHandler(res, e);
  }
};

module.exports.placeOrder = async (req, res) => {
  try {
    const result = await authenticatedClient.post(
      "/api/spot/v3/orders",
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

module.exports.placeMultipleOrders = async (req, res) => {
  try {
    const result = await authenticatedClient.post(
      "/api/spot/v3/batch_orders",
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

module.exports.cancelOrder = async (req, res) => {
  const { order_id } = req.params;
  try {
    const result = await authenticatedClient.post(
      `/api/spot/v3/cancel_orders/${order_id}`,
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

module.exports.cancelAllOrders = async (req, res) => {
  try {
    const result = await authenticatedClient.post(
      "/api/spot/v3/cancel_batch_orders",
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

module.exports.getOrderList = async (req, res) => {
  try {
    const result = await authenticatedClient.get(
      "/api/spot/v3/orders",
      req.query
    );
    return res.status(200).json({
      ...result.data
    });
  } catch (e) {
    return errorHandler(res, e);
  }
};

module.exports.getAllOpenOrders = async (req, res) => {
  try {
    const result = await authenticatedClient.get(
      "/api/spot/v3/orders_pending",
      req.query
    );
    return res.status(200).json({
      ...result.data
    });
  } catch (e) {
    return errorHandler(res, e);
  }
};

module.exports.getOrderDetails = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await authenticatedClient.get(
      `/api/spot/v3/orders/${id}`,
      req.query
    );
    return res.status(200).json({
      ...result.data
    });
  } catch (e) {
    return errorHandler(res, e);
  }
};

module.exports.getTransactionDetails = async (req, res) => {
  try {
    const result = await authenticatedClient.get(
      "/api/spot/v3/fills",
      req.query
    );
    return res.status(200).json({
      ...result.data
    });
  } catch (e) {
    return errorHandler(res, e);
  }
};

module.exports.getTokenPairDetails = async (req, res) => {
  try {
    const result = await authenticatedClient.get(
      "/api/spot/v3/instruments",
      req.query
    );
    return res.status(200).json({
      ...result.data
    });
  } catch (e) {
    return errorHandler(res, e);
  }
};

module.exports.getOrderBook = async (req, res) => {
  const { instrument_id } = req.params;
  try {
    const result = await authenticatedClient.get(
      `/api/spot/v3/instruments/${instrument_id}/book`,
      req.query
    );
    return res.status(200).json({
      ...result.data
    });
  } catch (e) {
    return errorHandler(res, e);
  }
};

module.exports.getAllTokenPairsInformation = async (req, res) => {
  try {
    const result = await authenticatedClient.get(
      "/api/spot/v3/instruments/ticker",
      req.query
    );
    return res.status(200).json({
      ...result.data
    });
  } catch (e) {
    return errorHandler(res, e);
  }
};

module.exports.getTokenInformation = async (req, res) => {
  const { instrument_id } = req.params;
  try {
    const result = await authenticatedClient.get(
      `/api/spot/v3/instruments/${instrument_id}/ticker`,
      req.query
    );
    return res.status(200).json({
      ...result.data
    });
  } catch (e) {
    return errorHandler(res, e);
  }
};

module.exports.getFilledOrdersInformation = async (req, res) => {
  const { instrument_id } = req.params;
  try {
    const result = await authenticatedClient.get(
      `/api/spot/v3/instruments/${instrument_id}/trades`,
      req.query
    );
    return res.status(200).json({
      ...result.data
    });
  } catch (e) {
    return errorHandler(res, e);
  }
};

module.exports.getMarketData = async (req, res) => {
  const { instrument_id } = req.params;
  try {
    const result = await authenticatedClient.get(
      `/api/spot/v3/instruments/${instrument_id}/candles`,
      req.query
    );
    return res.status(200).json({
      ...result.data
    });
  } catch (e) {
    return errorHandler(res, e);
  }
};
