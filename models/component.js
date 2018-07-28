var mongoose = require('mongoose');

var Component = mongoose.model('Component', new mongoose.Schema({
    name: String,
    prodTime: Number,
    employee: String,
    level: String,
}));

module.exports = Component;