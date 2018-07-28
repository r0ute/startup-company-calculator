var express = require('express');
var ComponentService = require('../services/components');

var componentRouter = express.Router();

componentRouter.route('/')
    .get(ComponentService.getAll);

module.exports = componentRouter;