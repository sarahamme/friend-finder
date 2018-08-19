
var path = require('path');

module.exports = function (app) {
    //HTML GET Requests
    //Code handles when user is home or in survel HTML files
    app.get('/', function (request, result) {
        result.sendFile(path.join(__dirname + '../public/home.html'));
    });
    app.get('/survey', function (request, result) {
        result.sendFile(path.join(_dirname + '../public/survey.html'));
    });

};