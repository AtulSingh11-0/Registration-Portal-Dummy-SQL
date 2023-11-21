const express = require('express');
const route = require('./src/routes/routes');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.resolve('./src/views'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/registration', route);

const PORT = process.env.PORT || 8080;
app.listen(PORT, console.log(`App listening at PORT ${PORT}`));