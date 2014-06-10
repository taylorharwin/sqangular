"use strict";

var express = require('express');
var app = express();
var routers = {};
var ExtraRouter = express.Router();
routers.ExtraRouter = ExtraRouter;

require('./config.js')(app, express, routers);

require('../note/extra_routes.js')(ExtraRouter);

module.exports = exports = app;