const uniqueNotNullString = key => ({
  type: String,
  index: {
    unique: true,
    sparse: true,
    partialFilterExpression: { [key]: { $type: 'string' } },
  },
});

module.exports = {
  uniqueNotNullString,
};
