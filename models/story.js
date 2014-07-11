var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var storySchema = new Schema({
    title       : { type: String, required: true },
    body        : { type: String, required: true },
    created_at  : { type: Date, required: true, default: Date.now },
    updated_at  : { type: Date, required: true, default: Date.now },
    author      : { type: Schema.Types.ObjectId, ref: 'Author', required: true }
});

module.exports = mongoose.model('Story', storySchema);
