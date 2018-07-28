var mongoose = require('mongoose');

var Module = mongoose.model('Module', new mongoose.Schema({
    modules: [mongoose.Schema.ObjectId],
    components: [mongoose.Schema.ObjectId],
}));

module.exports = Module;