const express = require('express');
const PORT = 8081;
const app = express();

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
res.render('index')
});
app.get('/user', function (req, res) {
    var name = req.query.name;
    var img = req.query.img;
    res.render('user', {name, img});
});

app.listen(PORT, () =>
    console.log(`Started server at http://localhost:${PORT}!`),
);