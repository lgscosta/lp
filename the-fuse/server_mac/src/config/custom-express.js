const express = require('express');
const app = express();

const route = require('../app/controllers/main');
route(app);

// consign().include('src/app/controllers').into(app);

module.exports = app;