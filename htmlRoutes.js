var path = require("path");

module.exports = function (app) {
    app.get('survey', function (req, res) {
        res.sendFole(path.join(_dirname + '/../public/survey.html'));
    });
};
app.use('survey', function (req, res) {
    res.sendFole(path.join(_dirname + '/../public/survey.html'));
});