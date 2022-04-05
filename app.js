const team = {
    _players: [
      {
        firstName: 'Pablo',
        lastName: 'Sanchez',
        age: 11
      },
      {
        firstName: 'Pablo2',
        lastName: 'Sanchez2',
        age: 12
      },
      {
        firstName: 'Pablo3',
        lastName: 'Sanchez2',
        age: 13
      }
    ],
    get players() {
      return this._players;
    },
    _games: [
      {
        opponent: 'Broncos',
        teamPoints: 42,
        opponentPoints: 27
      },
      {
        opponent: 'Broncos2',
        teamPoints: 43,
        opponentPoints: 28
      },
      {
        opponent: 'Broncos3',
        teamPoints: 44,
        opponentPoints: 29
      }
    ],
    get games() {
      return this._games;
    },
    addPlayer(firstName, lastName, age) {
      const player = {
        firstName: firstName,
        lastName: lastName,
        age: age
      }
  
      this.players.push(player);
    },
    addGame(opponent, teamPoints, opponentPoints) {
      const game = {
        opponent: opponent,
        teamPoints: teamPoints,
        opponentPoints: opponentPoints
      }
  
      this.games.push(game);
    }
  }
  team.addPlayer('Steph', 'Curry', 28);
  team.addPlayer('Lisa', 'Leslie', 44);
  team.addPlayer('Bugs', 'Bunny', 76);
  
  team.addGame('wari', 44, 28);
  team.addGame('iera', 22, 44);
  team.addGame('porina', 66, 76);
  
  console.log(team._players);
  console.log(team._games);