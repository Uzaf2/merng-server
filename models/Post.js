const { model, Schema} = require('mongoose');

const postSchema = new Schema({
    username: String,
    creationTime: String,
    body: String,
    likes:[{
        username: String,
        creationTime: String
    }],
    comments:[{
        username: String,
        body: String,
        creationTime: String
    }],
    user: [{
        type: Schema.Types.ObjectId,
        ref: 'users'
    }]

});

module.exports = model('Post', postSchema);