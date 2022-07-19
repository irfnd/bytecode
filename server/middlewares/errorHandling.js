const error = (err, req, res, next) => {
  const code = err?.cause?.code ? err.cause.code : 500;

  res.status(code).json({
    error: {
      status: code,
      name: err.name,
      message: err.message,
    },
  });
  next();
};

module.exports = error;
