var Feature = require('../models/feature');
var errorHandler = require('../handlers/errors');

var FeatureService = {
    getAll: (req, res) => Feature.find({})
        .then((docs) => res.json(docs))
        .catch((err) => errorHandler.handleDbError(err, res)),
};

module.exports = FeatureService;