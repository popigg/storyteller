var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var storySchema = new Schema({
    title       : String,
    body        : String,
    created_at  : { type: Date, default: Date.now },
    updated_at  : { type: Date, default: Date.now },
    author      : { type: Schema.Types.ObjectId, ref: 'Author' }
});

module.exports = mongoose.model('Story', storySchema);
