function cleanObject() {
  const { _id, __v, ...formattedItem } = this.toObject();
  return {
    id: _id,
    ...formattedItem,
  };
}

module.exports = {
  cleanObject,
};
