/// <reference types="react-scripts" />

type Player = {
  id: number;
  name: string;
  bigPoints: number;
  smallPoints: number;
};

type MainText = {
  eng: Language;
  lv: Language;
};

type Language = {
  text: string;
  buttonNewTournament: string;
  buttonBack: string;
  points: string;
  wins: string;
  gameNumber: string;
  nextGame: string;
  playersName: string;
  editPlayersName: string;
  addPlayer: string;
  four: string;
  five: string;
  count: string;
  howManyPlayers: string;
  tournamentEnd: string;
  newTournaments: string;
  newTournamentsConfirm: string;
};
