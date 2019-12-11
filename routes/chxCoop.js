const axios = require("axios");

const chxCoop = {
  searchGames(userInput, cb) {
    axios({
      method: "GET",
      url: "https://chicken-coop.p.rapidapi.com/games",
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "chicken-coop.p.rapidapi.com",
        "x-rapidapi-key": process.env.MYAPIKEY
      },
      params: {
        // user search input
        title: userInput
      }
    })
      .then(response => {
        console.log(response.data.result);
        cb(response.data.result);
      })
      .catch(error => {
        console.log(error);
      });
  },
  // Example seachGames() response:
  // ===============================================================
  //   [
  //     { title: 'Rise of the Tomb Raider: 20 Year Celebration', platform: 'PS4'},
  //     { title: 'Rise of the Tomb Raider', platform: 'PC' },
  //     { title: 'Tomb Raider: Definitive Edition', platform: 'PS4' },
  //     { title: 'Tomb Raider', platform: 'PC' },
  //     { title: 'Shadow of the Tomb Raider', platform: 'PS4' },
  //     { title: 'Rise of the Tomb Raider', platform: 'XONE' },
  //     { title: 'Tomb Raider', platform: 'PS3' },
  //     { title: 'Tomb Raider: Definitive Edition', platform: 'XONE' },
  //     { title: 'Shadow of the Tomb Raider', platform: 'XONE' },
  //     { title: 'Tomb Raider', platform: 'X360' }
  //   ]
  // ===============================================================
  // Loop through responses and display each as search results
  // ===============================================================

  displayGameInfo(gameName, platform, cb) {
    // gameName will need to be reworked if multiple words
    console.log("display game info");
    console.log(gameName + "sadlkfjsd");
    console.log(platform);
    console.log(cb);
    axios({
      method: "GET",
      url: `https://chicken-coop.p.rapidapi.com/games/${gameName}`,
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "chicken-coop.p.rapidapi.com",
        "x-rapidapi-key": "35f77dbc89mshd4954b2e71eb5dep19de2bjsn38781102f0b2"
      },
      params: {
        platform: `${platform}`
      }
    })
      .then(response => {
        console.log(response.data);
        cb(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  // Example displayGameInfo() response:
  // ===============================================================
  // {
  //     query: '/rest/games/overwatch?platform=pc',
  //     executionTime: 7.135773,
  //     result: {
  //       title: 'Overwatch',
  //       releaseDate: 'May 23, 2016',
  //       description: 'Overwatch is a highly stylized team-based shooter set on earth in the near future. Every match is an intense multiplayer showdown pitting a diverse cast of soldiers, mercenaries, scientists, adventurers, and oddities against each other in an epic, globe-spanning conflict.',
  //       genre: [ 'General', 'Action', 'Shooter', 'First-Person', 'Tactical' ],
  //       image: 'https://static.metacritic.com/images/products/games/5/5b4b131363a4dba40e923bb8f788d56e-98.jpg',
  //       score: 91,
  //       developer: 'Blizzard Entertainment',
  //       publisher: [ 'Blizzard Entertainment', 'Activision Blizzard' ],
  //       rating: 'T',
  //       alsoAvailableOn: [ 'PlayStation 4', 'Switch', 'Xbox One' ]
  //     }
  //   }
  // ===============================================================
  // I am thinking that we will want title, releaseDate, description, genre (array), image (?), developer, rating, other platforms it is available on
  // ===============================================================
};

module.exports = chxCoop;