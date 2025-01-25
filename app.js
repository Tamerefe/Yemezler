const express = require('express');
const app = express();
const usersRouter = require('./routes/users');

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(usersRouter);

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/photos'));

app.listen(8080, () => {
    console.log('This project created by BTA for Yemezler at 6.20.2020');
    console.log('Server is running on http://localhost:8080');
});