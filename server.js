const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose')
const port = 8000;
const app = express();
app.use(cors());
app.use(express.json());

require("./server/config/jokes.config")
require("./server/routes/jokes.routes")(app)



app.get("/api", (req, res) => {
    res.json({"message": "Welcome"});
});


app.listen(port, () => console.log(`Listening on port ${port}`));