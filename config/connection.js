const { connect, connection } = require("mongoose");

connect("mongodb://localhost/turbo-social", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
