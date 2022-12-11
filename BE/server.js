const express = require('express');
const bodyParser = require('body-parser');
const port = 9999;
var cors = require('cors');
const mongoose = require('mongoose');

const authenRoute = require('./routes/authen')
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://localhost:27017/login-travel-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/authen',authenRoute);

app.listen(port, () => {
    console.log(`Server up at ${port}`)
})