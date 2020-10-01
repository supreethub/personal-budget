const express = require('express');
const app = express();
const port = 3000;

app.use('/', express.static('public'));

const budget = {
    myBudget: [
    {
        title: 'Rent',
        budget: 380
    },
    {
        title: 'Grocery',
        budget: 90
    },
    {
        title: 'Netflix',
        budget: 25
    }
    ]
};

app.get('/hello', (req,res) => {
    res.send ('Hello World!');
});

app.get('/budget', (req,res) => {
    res.json(budget);
});

app.listen(port, () => {
    console.log('Example app listening at http://localhost:${port}');
});