var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var authorSchema = new Schema({
    fullName    : String,
    age         : Number,
    created_at  : { type: Date, default: Date.now },
    upadated_at : { type: Date, default: Date.now }
});

module.exports = mongoose.model('Author', authorSchema);
