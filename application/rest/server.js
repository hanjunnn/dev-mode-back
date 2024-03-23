const express = require('express');
const app = express();
let path = require('path');
let sdk = require('./sdk');

const PORT = 8001;
const HOST = '0.0.0.0';
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.get('/init', function (req, res) {
   let buy = req.query.buy;
   let buyval = req.query.buyval;
   let sell = req.query.sell;
   let sellval = req.query.sellval;
   let company = req.query.company;
   let companyval = req.query.companyval;
   let args = [buy, buyval, sell, sellval, company, companyval];
   sdk.send(false, 'Init', args, res);
});

app.get('/query', function (req, res) {
   let name = req.query.name;
   let args = [name];
   sdk.send(true, 'Query', args, res);
});

app.use(express.static(path.join(__dirname, '../client')));
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
