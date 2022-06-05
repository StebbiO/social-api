const { Schema, model, Types } = require('mongoose');

const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: "What's on your mind?",
            minlength: 1,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now
        },
        username: {
            type: String,
            required: true,
            trim: true
        },
        reactions: []
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

const Thought = model('Thought', ThoughtSchema);

ThoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

module.exports = Thought;