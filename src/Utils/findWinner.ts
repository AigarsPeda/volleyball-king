export const whoIsWinner = (
  team: Player[],
  playerArray: Player[],
  teamAScore: string
) => {
  const [playerOne, playerTwo] = team;
  const newPlayerArray = playerArray.map(player => {
    if (player.id === playerOne.id || player.id === playerTwo.id) {
      return {
        ...player,
        bigPoints: player.bigPoints + 1,
        smallPoints: player.smallPoints + parseInt(teamAScore)
      };
    }
    return player;
  });
  return newPlayerArray;
};
