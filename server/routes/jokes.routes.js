const JokeController = require("../controllers/jokes.controller")

module.exports = app => {
    app.get("/api/allJokes", JokeController.findAllJokes)
    app.post("/api/jokes/create", JokeController.createOneJoke)
    app.get("/api/jokes/:jokeid", JokeController.findAJoke)
    app.put("/api/jokes/update/:jokeid", JokeController.updateAJoke)
    app.delete("/api/jokes/delete/:jokeid", JokeController.deleteJoke)
}