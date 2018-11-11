const axios = require("axios");

module.exports = async (req, res) => {
  try {
    const data = await axios.get("https://github.com");
    if (data) {
      res.end("ok");
    }
  } catch (e) {
    console.log(e)
  }
};
