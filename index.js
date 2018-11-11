const axios = require("axios");

module.exports = async (req, res) => {
  try {
    const result = await axios.get("https://api.github.com/");
    if (result) {
      res.end("ok " + result.status);
    }
  } catch (e) {
    console.log(e)
  }
};
