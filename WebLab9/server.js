
const express = require('express');
const multer  = require('multer');
const fs = require("fs")
const PORT = 8081;
const app = express();

app.use(express.urlencoded({ extended: true }));


const upload = multer({ dest: './uploads/' });

app.post('/processForm', upload.single('user_image'), function (req, res) {
    var name = req.body.name;
    var description = req.body.description;
    var image = req.body.image;
    var gender = req.body.gender;
    var date = req.body.date;
    var color = req.body.color;
    var path = `./public/${name}.html`;
    if(fs.existsSync(path)){
        console.log("file already exists!");
        res.sendFile(path, {root: __dirname});
    }
    else{
    let htmlFile = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>Name: ${name}</h1>
        <p>Description: ${description}</p>
        <img src="${image}" alt="">
        <p>Gender: ${gender}</p>
        <p>Birth Date: ${date}</p>
        <p>favorite Color: ${color}</p>
    </body>
    </html>`;
    fs.writeFile(path,htmlFile, ()=>{
            console.log("file was created successfully");
        })
    res.send(htmlFile);

}
})

app.listen(PORT, () =>
    console.log(`Started server at http://localhost:${PORT}!`),
);
// const express = require('express');
// const app = express();

// /** Decode Form URL Encoded data */
// app.use(express.urlencoded());

// /** Show page with a form */
// app.get('/', (req, res, next) => {
//   res.send(`<form method="POST" action="/">
//   <input type="text" name="username" placeholder="username">
//   <input type="submit">
// </form>`);
// });

// /** Process POST request */
// app.post('/', function (req, res, next) {
//   res.send(JSON.stringify(req.body.username));
// });
// app.listen(3000);