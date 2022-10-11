const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 8000;
const userRouter = require('./routes/user');
const { mongoDB } = require('./repository/mongoDbConfig');


app.use(userRouter);
app.listen(PORT, () => {
    console.log('server is running on ', PORT);
});