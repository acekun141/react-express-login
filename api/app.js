const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

// initialize app
const app = express();

// middleware
app.use(cors());
app.use(morgan());
app.use(bodyParser.json());

// import routes
const usersRoute = require('./routes/users');
app.use('/users', usersRoute);

// connect db
mongoose.connect('mongodb://0.0.0.0:27017/appdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('DB connected'))
.catch((err) => console.log(`DB Connection Error: ${err}`))

app.listen(8000);