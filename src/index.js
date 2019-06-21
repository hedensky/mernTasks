const express = require('express');
const morgan = require('morgan');
const app = express();
const path = require('path');
require('./database');

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/api/tasks', require('./routes/task.routes'));

//Static files
app.use(express.static(path.join(__dirname, 'public')));

//Starting server
app.listen(app.get('port'), () => {
    console.log(`Puerto ${app.get('port')}`);
});