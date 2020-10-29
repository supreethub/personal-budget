const express = require('express');
//const movedData = require('./movedData.json');
const app = express();
const cors = require('cors');
const port = 3000;


const mongoose = require("mongoose");
const pbModel = require('./schema_model/mongo_schema');

var url = 'mongodb://localhost:27017/personal_budget_db';


app.use(cors());


// app.get('/budget', (req,res) => {
//     res.json(movedData)
// });

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        app.listen(port, () => {
            console.log(`API listening at http://localhost:${port}`);
        })
        .catch((connectionErr) => {
            console.log(connectionErr);
            mongoose.connection.close();
        })
    })

