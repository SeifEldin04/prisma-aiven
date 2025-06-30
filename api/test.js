// api/test.js
module.exports = (req, res) => {
  return res.status(200).json({ message: '✅ Serverless is working!' });
};
