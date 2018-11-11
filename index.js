const axios = require("axios");

module.exports = (req, res) => {
  axios.get("https://github.com").then(function(res) {
    res.end("done");
  });
};
