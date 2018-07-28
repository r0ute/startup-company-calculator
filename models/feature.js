var mongoose = require('mongoose');

var componentCostSchema = new mongoose.Schema({
    component_id: mongoose.Schema.ObjectId,
    count: Number,
});

var moduleCostSchema = new mongoose.Schema({
    module_id: mongoose.Schema.ObjectId,
    count: Number,
});

var Feature = mongoose.model('Feature', new mongoose.Schema({
    name: String,
    componentCosts: [componentCostSchema],
    moduleCosts: [moduleCostSchema]
}));

module.exports = Feature;