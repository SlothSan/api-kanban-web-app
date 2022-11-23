const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const app = express();
const port = 3000;
const url = 'mongodb://root:password@localhost:27017';

app.use(express.json());

app.get('/', (req, res) => {
    console.log('just-testing');
})


app.listen(port);