const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/service1/api/endpoint1", (req, res) => {
    return res.status(200).send({
        message: "service1 endpoint1"
    });
});

app.get("/service1/api/endpoint2", (req, res) => {
    return res.status(200).send({
        message: "service1 endpoint2"
    });
});

if(require.main == module) {
    app.listen(process.env.PORT, () => {
        console.log("service1 ok")
    });
}

module.exports = app;