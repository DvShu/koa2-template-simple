const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.model('test', new Schema({
    name: String
}));