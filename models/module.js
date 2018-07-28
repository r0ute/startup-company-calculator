var mongoose = require('mongoose');

var Module = mongoose.model('Module', new mongoose.Schema({
    name: String,
    prodTime: Number,
    employee: String,
    level: String,
    modules: [mongoose.Schema.ObjectId],
    components: [mongoose.Schema.ObjectId],
}));

module.exports = Module;