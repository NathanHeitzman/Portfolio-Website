require("dotenv").config({path: "../.env"}); //loads environment variables

const express = require("express");
const app = express();
const port = 8080;

const cors = require("cors");
const corsOptions = {
    origin: ["http://localhost:5173"], //requests only accepted from this origin
};

app.use(cors(corsOptions));

app.get("/api", (req,res) => {
    res.json({"tests" : ["test1","test2","test3"]});
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});