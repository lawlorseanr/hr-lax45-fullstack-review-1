const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/hrla45-fullstack-review';

const db = mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

module.exports = db;