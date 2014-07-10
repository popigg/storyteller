var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var authorSchema = new Schema({
    fullName    : { type: String, required: true },
    age         : { type: Number, required: true },
    created_at  : { type: Date, required: true, default: Date.now },
    upadated_at : { type: Date, required: true, default: Date.now }
});

module.exports = mongoose.model('Author', authorSchema);
