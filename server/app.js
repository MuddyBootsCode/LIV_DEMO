var express = require('express');
var app = express();
const router = express.Router();
const testJson = require('./test.json');

app.listen('8000', () => {
    console.log('Server Listening on Port 8000');
});

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
});

app.use('/api', router);

router.get('/test', (req, res) => {
    console.log(res);
    res.json(testJson);
});

app.get('*', function(req, res) {
    res.render('error');
});
