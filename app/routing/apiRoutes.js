var friendsArray = require("../data/friends");
var surveyArray = require("../data/survey");

module.exports = function (app) {
  app.get("/api/friends", function (req, res) {
    res.json(friendsArray);
    res.json(surveyArray);
  });
  


  app.post("/api/friends", function (req, res) {
    console.log(req.body);
   
   var user = req.body;
    
    
    var friendDiff = 0;
    var currentLowest = 1000;
    var currentMatch;

    for (var i = 0; i < friendsArray.length; i++) {

      for (var j = 0; j < user.scores.length; j++ ){
        friendDiff += Math.abs(friendsArray[i].scores[j] - user.scores[j]);
      }


      if (friendDiff < currentLowest) {
        currentLowest = friendDiff;
        currentMatch = friendsArray[i];
      }

    }

    res.json(currentMatch);
    friendsArray.push(user);
  });
};

