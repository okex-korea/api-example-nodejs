const axios = require("axios");
const crypto = require("crypto");
const queryString = require("querystring");

const signRequest = (key, secret, passPhrase, method, path, options) => {
  const timestamp = Date.now() / 1000;
  const what = timestamp + method.toUpperCase() + path + (options.body || "");
  const hmac = crypto.createHmac("sha256", secret);
  const signature = hmac.update(what).digest("base64");
  return {
    key,
    passPhrase,
    signature,
    timestamp
  };
};

const getSignature = (
  key,
  secret,
  passPhrase,
  method,
  relativeURI,
  opts = {}
) => {
  const sig = signRequest(key, secret, passPhrase, method, relativeURI, opts);

  return {
    "OK-ACCESS-KEY": sig.key,
    "OK-ACCESS-PASSPHRASE": sig.passPhrase,
    "OK-ACCESS-SIGN": sig.signature,
    "OK-ACCESS-TIMESTAMP": sig.timestamp
  };
};

const authenticatedClient = (
  key,
  secret,
  passPhrase,
  apiUri,
  timeout,
  axiosConfig
) => {
  const axiosInstance = axios.create({
    baseURL: apiUri,
    timeout,
    ...axiosConfig
  });

  const get = (url, queryParams) => {
    const requestUrl = `${url}${
      Object.keys(queryParams).length !== 0
        ? `?${queryString.stringify(queryParams)}`
        : ""
    }`;
    return axiosInstance.get(requestUrl, {
      headers: { ...getSignature(key, secret, passPhrase, "get", requestUrl) }
    });
  };

  const post = (url, body, queryParams) => {
    const requestUrl = `${url}${
      Object.keys(queryParams).length !== 0
        ? `?${queryString.stringify(queryParams)}`
        : ""
    }`;

    const bodyJson = JSON.stringify(body);
    const signature = getSignature(
      key,
      secret,
      passPhrase,
      "post",
      requestUrl,
      {
        body: bodyJson
      }
    );
    const headers = {
      "content-type": "application/json; charset=utf-8",
      ...signature
    };

    return axiosInstance.post(requestUrl, body, {
      headers
    });
  };

  return {
    get,
    post
  };
};

module.exports = (
  key,
  secret,
  passPhrase,
  apiUri = "https://okex.co.kr",
  timeout = 3000,
  axiosConfig = {}
) => {
  return authenticatedClient(
    key,
    secret,
    passPhrase,
    apiUri,
    timeout,
    axiosConfig
  );
};
