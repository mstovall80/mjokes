const Joke = require('../models/jokes.model')


module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then(allJokes => res.json({ resultes: allJokes }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.createOneJoke = (req, res)=>{
    Joke.create(req.body)
    .then(newlyCreateJoke=> res.json({results: newlyCreateJoke}))
    .catch(err => res.json({errors:err}))
}

module.exports.findAJoke = (req, res)=>{
    Joke.findOne({_id: req.params.jokeid})
    .then(oneJoke=> res.json({results: oneJoke}))
    .catch(err => res.json({errors:err}))
}

module.exports.updateAJoke = (req, res)=>{
    Joke.findOneAndUpdate(
        {_id: req.params.jokeid},
        req.body,
        {new:true})
        .then(updatedJoke => res.json({results: updatedJoke}))
        .catch(err => res.json({errors:err}))
}

module.exports.deleteJoke = (req, res)=>{
    Joke.deleteOne({ _id: req.params.jokeid })
        .then(deleteResult => res.json({ results: deleteResult }))
        .catch(err => res.json({errors:err}))
}