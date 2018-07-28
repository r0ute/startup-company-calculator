var Module = require('../models/module');
var errorHandler = require('../handlers/errors');

var ModuleService = {
    getAll: (req, res) => Module.find({})
        .then((docs) => res.json(docs))
        .catch((err) => errorHandler.handleDbError(err, res)),
};

module.exports = ModuleService;