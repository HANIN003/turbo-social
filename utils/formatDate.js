const moment = require("moment");

const formatDate = (date) => {
  return moment(date).format("MMM DD, YYYY [at] hh:mm:ss a");
};

module.exports = formatDate;
