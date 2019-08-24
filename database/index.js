const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:3003/db')
.then(() => console.log('db connected'))
.catch((err) => console.log('db not connected'))