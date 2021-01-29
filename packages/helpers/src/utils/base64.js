function decodeBase64(codedText) {
  const buff = Buffer.from(codedText, 'base64');
  return buff.toString('ascii');
}

module.exports = {
  decodeBase64,
};
