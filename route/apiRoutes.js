//Load Data
var friends = require("../data/friends");

module.exports = function (app) {
    //a GET route that displays JSON of all possible friends
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });


    app.post("/api/friends", function (req, res) {
        var totalDifference = 0;


        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: 1000
        };

        var userData = req.body;
        var userName = userData.name;
        var userScores = userData.scores;

        var userPhoto = userData.photo;


        for (let i = 0; i < friends.length - 1; i++) {
            totalDifference = 0;
            console.log(friends[i].name);

            for (var j = 0; j < 10; j++) {
                totalDifference += (Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j])));

                if (totalDifference <= bestMatch.friendDifference) {
                    bestMatch.name = friends[i].name;
                    bestMatch.photo = friends[i].photo;
                    bestMatch.friendDifference = totalDifference;
                }
            }


        }
        friends.push(userData);
        res.json(bestMatch);


    });
};
