const friends = require("./../data/friends");

module.exports = app => {
  app.get("/api/friends", (req, res) => {
    res.json(friends);
  });

  app.post("/api/friends", (req, res) => {
    let totalDifference = 0;

    let bestMatch = {
      name: "",
      photo: "",
      friendDifference: 1000
    };

    let userData = req.body;
    let userName = userData.name;
    let userScores = userData.scores;

    let b = userScores.map(item => {
      return parseInt(item, 10);
    });
    userData = {
      name: req.body.name,
      photo: req.body.photo,
      scores: b
    };

    let sum = b.reduce((a, b) => a + b, 0);

    for (var i = 0; i < friends.length; i++) {
      totalDifference = 0;

      var bfriendScore = friends[i].scores.reduce((a, b) => a + b, 0);

      totalDifference += Math.abs(sum - bfriendScore);

      if (totalDifference <= bestMatch.friendDifference) {
        bestMatch.name = friends[i].name;
        bestMatch.photo = friends[i].photo;
        bestMatch.friendDifference = totalDifference;
      }
    }

    friends.push(userData);

    res.json(bestMatch);
  });
};
