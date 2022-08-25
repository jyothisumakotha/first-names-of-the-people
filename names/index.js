const getFirstNames = require("../utilities/utils/index.js");
const result = require("../country/state/city/index.js");

function getPeopleInCity() {
  return getFirstNames(result);
}

module.exports = getPeopleInCity;
