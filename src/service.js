const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const port = 8080;

app.get('/load', (req, res) => {
    fs.readFile('./test.txt', 'utf8' , (err, data) => {
        if (err) {
            console.error(err);
            return false;
        }
        res.send(data);
    })
})
// app.use(express.urlencoded())
app.use(bodyParser.urlencoded({extended:false}));
app.post('/save', (req, res) => {
    let data = req.body.data;
    fs.writeFile('./test.txt', data, err => {
        if (err) {
            console.error(err);
            return false;
        }
        //文件写入成功。
    })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})