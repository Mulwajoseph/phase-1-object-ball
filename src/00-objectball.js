function gameObject (){
    return{
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                  },
                  "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                  },
                  "Brook Lopes": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                  },
                  "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                  },
                  "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                  },
            },
        },
        away: {
            "Jeff Adrien ": {
                number: 4,
                shoe: 18,
                points: 10,
                rebounds: 1,
                assists: 1,
                steals: 2,
                blocks: 7,
                slamDunks: 2,
              },
              "Bismark Biyombo": {
                number: 0,
                shoe: 16,
                points: 12,
                rebounds: 4,
                assists: 7,
                steals: 7,
                blocks: 15,
                slamDunks: 10,
              },
              "DeSagna Diop": {
                number: 2,
                shoe: 14,
                points: 24,
                rebounds: 12,
                assists: 12,
                steals: 4,
                blocks: 5,
                slamDunks: 5,
              },
              "Ben Gordon": {
                number: 8,
                shoe: 15,
                points: 33,
                rebounds: 3,
                assists: 2,
                steals: 1,
                blocks: 1,
                slamDunks: 0,
              },
              "Brendan Haywood": {
                number: 33,
                shoe: 15,
                points: 6,
                rebounds: 12,
                assists: 12,
                steals: 22,
                blocks: 5,
                slamDunks: 12,
              },
        },
    }
}

//to output our home team name
function homeTeamName(){
    const game = gameObject();
    return game.home.teamName;
}
console.log(homeTeamName());

//to find the shoe number of a certain player 
function getPlayerStat(playerName, stat){
    const game = gameObject();
    //search for the player in both home and away teams\
    const player = game.home.players.find(player["playerName"] === playerName) || game.away.players.find(player => player["playerName"] === playerName)

    // If the player is found, return the requested stat; otherwise, return null
    return player ? player[stat] : null;
}

console.log(getPlayerStat("Ben Gordon", "blocks"))

//I can also write a function to find just a single players stats 
function shoeNumberOfReggieEvans(game) {
    // Access the players object of the away team
    const homePlayers = game.home.players;
  
    // Find Reggie Evans in the awayPlayers object
    const reggieEvans = homePlayers.find(player => player["Player Name"] === "Reggie Evans");
  
    // Return the shoe number of Reggie Evans
    return reggieEvans.shoe;
  }
  
  // Create the game object
  const game = gameObject();
  
  // Call the function with the game object and log the result
  console.log(shoeNumberOfReggieEvans(game)); // Output: 14
  