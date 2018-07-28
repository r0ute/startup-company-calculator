import mongoose from 'mongoose';

export const Module = mongoose.model('Module', new mongoose.Schema({
    modules: [mongoose.Schema.ObjectId],
    components: [mongoose.Schema.ObjectId],
}));