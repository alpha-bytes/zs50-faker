/* eslint-disable */
// for a full working demo of Netlify Identity + Functions, see https://netlify-gotrue-in-react.netlify.com/

const fetch = require("node-fetch");
exports.handler = async function(event, context) {
  return await fetch("https://api.chucknorris.io/jokes/random");
};
