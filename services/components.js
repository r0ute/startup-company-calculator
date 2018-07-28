var Component = require('../models/component');
var errorHandler = require('../handlers/error');

var ComponentService = {
    getAll: (req, res) => Component.find({})
        .then((docs) => res.json(docs))
        .catch((err) => errorHandler.handleDbError(err, res)),
};

module.exports = ComponentService;