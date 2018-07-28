var express = require('express');
var FeatureService = require('../services/features');

var featureRouter = express.Router();

featureRouter.route('/')
    .get(FeatureService.getAll);

module.exports = featureRouter;