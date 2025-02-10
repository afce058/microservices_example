const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/service2/api/endpoint1", (req, res) => {
    return res.status(200).send({
        message: "service2 endpoint1"
    });
});

app.get("/service2/api/endpoint2", (req, res) => {
    return res.status(200).send({
        message: "service2 endpoint2"
    });
});

if(require.main == module) {
    app.listen(process.env.PORT, () => {
        console.log("service2 ok")
    });
}

module.exports = app;