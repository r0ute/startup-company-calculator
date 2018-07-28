import mongoose from 'mongoose';


const componentCostSchema = new mongoose.Schema({
    component_id: mongoose.Schema.ObjectId,
    count: Number,
});

const moduleCostSchema = new mongoose.Schema({
    module_id: mongoose.Schema.ObjectId,
    count: Number,
});


export const Feature = mongoose.model('Feature', new mongoose.Schema({
    name: String,
    componentCosts: [componentCostSchema],
    moduleCosts: [moduleCostSchema]
}));