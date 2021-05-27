const mongoose = require('mongoose');

const jokesSchema = new mongoose.Schema({
    setUp: String,
    punchLine: String
});

const Joke = mongoose.model('Joke', jokesSchema);

module.exports = Joke;
