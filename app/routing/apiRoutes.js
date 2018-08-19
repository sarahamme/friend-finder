var bodyParser = require('body-parser');
var path = require('path');

//Load Data in from friends.js
var friendsData = require('../data/friends.js');

app.get('/api/friends', function (request, result) {
    result.json(friendsData);
});

app.post("/api/friends", function(request, result){
    var you = request.body;
    var newFriend = -1;
    var newFriendScore = 100;
    var currentFriendScore = 0;
    //Loop through all the friends in friends.js
for (i = 0; i < friendsData.length; i++){
    if (you.sex != friendsData[i].sex){
        for (x = 0; x < you.scores.length; x++) {
            currentFriendScore = currentFriendScore + math.abs(friendsData[i].scores[x] - you.scores[x]);
        }
        if (currentFriendScore <= newFriendScore) {
            newFriend = i;
            newFriendScore = currentFriendScore;
        }
        currentFriendScore = 0;
    }
    }
    friendsData.push(you);
    newMatchDetails = friendsData[newFriend];
    results.json(newMatchDetails);
});
