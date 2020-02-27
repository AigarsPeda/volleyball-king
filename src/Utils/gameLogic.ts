export const gameForFive = (
  playerArray: Player[],
  gameNumber: number,
  teamA: Player[],
  teamB: Player[]
) => {
  playerArray.forEach(player => {
    switch (gameNumber) {
      case 1:
        if (player.id === 0 || player.id === 1) {
          teamA.push(player);
        } else if (player.id === 2 || player.id === 3) {
          teamB.push(player);
        }
        break;
      case 2:
        if (player.id === 0 || player.id === 2) {
          teamA.push(player);
        } else if (player.id === 1 || player.id === 4) {
          teamB.push(player);
        }
        break;
      case 3:
        if (player.id === 0 || player.id === 4) {
          teamA.push(player);
        } else if (player.id === 1 || player.id === 3) {
          teamB.push(player);
        }
        break;
      case 4:
        if (player.id === 0 || player.id === 3) {
          teamA.push(player);
        } else if (player.id === 2 || player.id === 4) {
          teamB.push(player);
        }
        break;
      case 5:
        if (player.id === 1 || player.id === 2) {
          teamA.push(player);
        } else if (player.id === 3 || player.id === 4) {
          teamB.push(player);
        }
        break;
      case 6:
        if (player.id === 0 || player.id === 2) {
          teamA.push(player);
        } else if (player.id === 1 || player.id === 3) {
          teamB.push(player);
        }
        break;
      case 7:
        if (player.id === 0 || player.id === 1) {
          teamA.push(player);
        } else if (player.id === 2 || player.id === 4) {
          teamB.push(player);
        }
        break;
      case 8:
        if (player.id === 0 || player.id === 3) {
          teamA.push(player);
        } else if (player.id === 1 || player.id === 4) {
          teamB.push(player);
        }
        break;
      case 9:
        if (player.id === 0 || player.id === 4) {
          teamA.push(player);
        } else if (player.id === 2 || player.id === 3) {
          teamB.push(player);
        }
        break;
      case 10:
        if (player.id === 1 || player.id === 3) {
          teamA.push(player);
        } else if (player.id === 2 || player.id === 4) {
          teamB.push(player);
        }
        break;
      case 11:
        if (player.id === 0 || player.id === 3) {
          teamA.push(player);
        } else if (player.id === 1 || player.id === 2) {
          teamB.push(player);
        }
        break;
      case 12:
        if (player.id === 0 || player.id === 4) {
          teamA.push(player);
        } else if (player.id === 1 || player.id === 2) {
          teamB.push(player);
        }
        break;
      case 13:
        if (player.id === 0 || player.id === 1) {
          teamA.push(player);
        } else if (player.id === 3 || player.id === 4) {
          teamB.push(player);
        }
        break;
      case 14:
        if (player.id === 0 || player.id === 2) {
          teamA.push(player);
        } else if (player.id === 3 || player.id === 4) {
          teamB.push(player);
        }
        break;
      case 15:
        if (player.id === 1 || player.id === 4) {
          teamA.push(player);
        } else if (player.id === 2 || player.id === 3) {
          teamB.push(player);
        }
        break;
      default:
        break;
    }
  });
};

export const gameForFour = (
  playerArray: Player[],
  gameNumber: number,
  teamA: Player[],
  teamB: Player[]
) => {
  playerArray.forEach(player => {
    switch (gameNumber) {
      case 1:
        if (player.id === 0 || player.id === 1) {
          teamA.push(player);
        } else if (player.id === 2 || player.id === 3) {
          teamB.push(player);
        }
        break;
      case 2:
        if (player.id === 0 || player.id === 2) {
          teamA.push(player);
        } else if (player.id === 1 || player.id === 3) {
          teamB.push(player);
        }
        break;
      case 3:
        if (player.id === 0 || player.id === 3) {
          teamA.push(player);
        } else if (player.id === 1 || player.id === 2) {
          teamB.push(player);
        }
        break;
      case 4:
        if (player.id === 0 || player.id === 1) {
          teamA.push(player);
        } else if (player.id === 2 || player.id === 3) {
          teamB.push(player);
        }
        break;
      case 5:
        if (player.id === 0 || player.id === 2) {
          teamA.push(player);
        } else if (player.id === 1 || player.id === 3) {
          teamB.push(player);
        }
        break;
      case 6:
        if (player.id === 0 || player.id === 3) {
          teamA.push(player);
        } else if (player.id === 1 || player.id === 2) {
          teamB.push(player);
        }
        break;
      case 7:
        if (player.id === 0 || player.id === 1) {
          teamA.push(player);
        } else if (player.id === 2 || player.id === 3) {
          teamB.push(player);
        }
        break;
      case 8:
        if (player.id === 0 || player.id === 2) {
          teamA.push(player);
        } else if (player.id === 1 || player.id === 3) {
          teamB.push(player);
        }
        break;
      case 9:
        if (player.id === 0 || player.id === 3) {
          teamA.push(player);
        } else if (player.id === 1 || player.id === 2) {
          teamB.push(player);
        }
        break;
      default:
        break;
    }
  });
};
