require("dotenv").config(); //loads environment variables, make sure to run this script from the portfolio-website folder

const express = require("express");
const app = express();
const port = process.env.BACKEND_PORT || 8080; //fall back to port 8080 if port is not specified

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