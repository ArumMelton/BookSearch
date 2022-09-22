const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URI || "0.0.0.0:27017/book-stuff",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;