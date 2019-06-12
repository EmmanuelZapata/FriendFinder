// Dependencies
var friends = require('../data/friends.js');

// Export the function
module.exports = function(app) {

    // Sets the get for the api/friends route
    app.get('/api/friends', function(req, res) {
        res.json(friends);
    });

    // Set the post for the api/friends route
    app.post('/api/friends', function(req, res) {

	// Set variables only needed for the post
        var difference = 40;
        var matchName = '';
        var matchPhoto = '';

        // Find a match by looping through the data
        friends.forEach(function(friend) {
        		// Variables for comparing matches
            var matchedScoresArray = [];
            var totalDifference = 40;

            // Function to assist in the addition reduce() below
            function add(total, num) {
                return total + num;
            }

            //loops through data and create a new array
            for (var i = 0; i < friend.scores.length; i++) {
                matchedScoresArray.push(Math.abs(parseInt(req.body.scores[i]) - parseInt(friend.scores[i])));

            }

            // redux
            totalDifference = matchedScoresArray.reduce(add, 0);
            if (totalDifference < difference) {
                difference = totalDifference;
                matchName = friend.name;
                matchPhoto = friend.photo;
            }
        });
        res.json({
            name: matchName,
            photo: matchPhoto
        });
        friends.push(req.body);
    });
}