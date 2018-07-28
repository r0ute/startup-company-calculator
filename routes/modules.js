var express = require('express');
var ModuleService = require('../services/modules');

var moduleRouter = express.Router();

moduleRouter.route('/')
    .get(ModuleService.getAll);

module.exports = moduleRouter;