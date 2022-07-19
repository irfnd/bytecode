const error = (err, req, res, next) => {
  res.status(err.cause.code).json({
    err: {
      status: err.cause.code,
      name: err.name,
      message: err.message,
    },
  });
  next();
};

module.exports = error;
