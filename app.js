const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const expressValidator = require('express-validator');
require('dotenv').config();

const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const modelRoutes = require('./routes/TMAmodel');
const fonmmRoutes = require('./routes/fonmm');
const dt_sportsRoutes = require('./routes/dt_sports');

// app
const app = express();
app.get('/', (req, res) => {
    res.send("What tha fuck are you tryna see here!!!");
});

// db
mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true
    })
    .then(() => console.log('DB Connected'));

// middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());
app.use(cors());

// Route middleware
app.use('/api', authRoutes);
app.use('/api', userRoutes);
app.use('/api', modelRoutes);
app.use('/api', fonmmRoutes);
app.use('/api', dt_sportsRoutes);


const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
