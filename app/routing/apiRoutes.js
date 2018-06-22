var friendsArray = require("../data/friends");
var surveyArray = require("../data/survey");

module.exports = function (app) {
  app.get("/api/friends", function (req, res) {
    res.json(friendsArray);
    res.json(surveyArray);
  });
  //A POST routes /api/friends. This will be used to handle incoming survey results.
  //This route will also be used to handle the compatibility logic.
  app.post("/api/friends", function (req, res) {
    //req.body is the information passed by the array
    //in newFriend.  this information will be pushed into the friendsArray

    function arrayTotal(arr) {
      var sum = 0;
      for (i = 0; i < arr.length; i++) {
        sum = sum + parseInt(arr[i]);
      }
      console.log(sum);
      //return sum;
    }
    //var surveyFriend = [];
    friendsArray.push(req.body);
    //I'm encountering a problem as what should be pushed is an integer, but maybe after the push
    //it changes to a string?
    //console.log(friendsArray);
    //console.log(surveyFriend);
    //console.log(surveyArray);
    for (i = 0; i < friendsArray.length; i++) {
      var friendScores = friendsArray[i].scores;
      console.log(friendsArray[i].scores);
    }
    //the survey information continues to appear as a string.  I can't find a way
    // to change everything in the array into an integer.  parseInt() will only remove the first element

    for (k = 0; k < surveyArray.length; k++) {
      var surveyScores = surveyArray[k].scores;

      console.log(surveyArray[k].scores);
      for (l = 0; l < surveyScores.length; l++) {
        parseInt(surveyScores[l]);
        parseInt(surveyScores[l++]);
        //console.log(parseInt(surveyScores[l]));
        //console.log(parseInt(surveyScores[l++]));
      }
    }
    arrayTotal(friendScores);
    arrayTotal(surveyScores);
    friendDiff = 0;
    for (i = 0; i < surveyScores.length; i++) {
      friendDiff += Math.abs(friendScores[i] - +surveyScores[i]);
    }
    console.log(friendDiff);
    //this returns our friendsArray in JSON format on the /api/friends html page.
    res.json(true);
  });
};

/*for (i = 0; i < data.length; i++) {
    console.log("For loop answers" + i);
}*/