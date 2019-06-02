import Nexmo from 'nexmo';
import express from 'express';
const app = express();
require('dotenv').config();

// Setting the template engine
app.set("view engine", "ejs");
import bodyParser from 'body-parser';
const port = process.env.PORT;
// const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: true });
// Serving resources on public directory
app.use(express.static(__dirname + "/public"));

app.use(urlencodedParser);

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/success', (req, res) => {
    res.render('success');
});

app.post('/sms', (req, res) => {
    const from = req.body.sender;
    const to = req.body.receiver;
    const text = req.body.message;
    const nexmo = new Nexmo({
        apiKey: 'facbb13b',
        apiSecret: 'jVkx7QPnGIuZWfLT',
    });
    nexmo.message.sendSms(from, to, text,  (err , messaged) => {
        (err) ? res.redirect ('back') : res.redirect('/success');
    });
});

app.listen(process.env.PORT, process.env.IP, (req, res) => {
    console.log('server listening on port ' + port);
});