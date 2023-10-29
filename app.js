const express = require('express');
const route = require('./src/routes/routes');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.resolve('./src/views'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/registration', route);

// for error handling, just dont use this as it always shows res.status is not a function
// app.use((req, res, err, next) => {
//   console.error(err.stack);
//   return res.status(500).send('Something Broke!');
// });

const PORT = process.env.PORT || 8080;
app.listen(PORT, console.log(`App listening at PORT ${PORT}`));