const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 8000;
const { mongoDB } = require('./repository/mongoDbConfig');

app.listen(PORT, () => {
    console.log('server is running on ', PORT);
});