module.exports = (res, error) => {
  const { status, data } = error.response;
  return res.status(status).json({
    ...data
  });
};
