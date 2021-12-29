import {
  Match,
  Player,
  PlayerDetails,
  ResponseGameweek,
  ResponseTopScorers,
} from 'src/ts/interfaces';

export const convertToPlayers = (response: ResponseTopScorers[]): Player[] =>
  response.map(({ player, statistics }: ResponseTopScorers) => ({
    id: player.id,
    name: player.name,
    photo: player.photo,
    position: statistics[0].games.position,
    team: statistics[0].team.name,
    statistics: {
      goals: statistics[0].goals.total,
      assists: statistics[0].goals.assists,
      gamesPlayed: statistics[0].games.appearences,
      rating: statistics[0].games.rating,
      shots: statistics[0].shots.total,
      shotsOn: statistics[0].shots.on,
    },
  }));

export const convertToMatches = (response: ResponseGameweek[]): Match[] =>
  response.map(({ fixture, teams, goals }: ResponseGameweek) => ({
    id: fixture.id,
    date: fixture.date,
    status: fixture.status.short,
    minutes: fixture.status.elapsed,
    home: {
      id: teams.home.id,
      name: teams.home.name,
      logo: teams.home.logo,
      goals: goals.home,
    },
    away: {
      id: teams.away.id,
      name: teams.away.name,
      logo: teams.away.logo,
      goals: goals.away,
    },
  }));

export const convertToPlayersDetails = (
  response: ResponseTopScorers[],
): PlayerDetails => {
  const playerDetails = response.map(
    ({ player, statistics }: ResponseTopScorers) => ({
      id: player.id,
      firstName: player.firstname,
      lastName: player.lastname,
      name: player.name,
      photo: player.photo,
      nationality: player.birth.country,
      age: player.age,
      date: player.birth.date,
      height: player.height,
      weight: player.weight,
      city: player.birth.place,
      position: statistics[0].games.position,
      team: statistics[0].team.name,
      teamLogo: statistics[0].team.logo,
      statistics: {
        goals: statistics[0].goals.total,
        assists: statistics[0].goals.assists,
        gamesPlayed: statistics[0].games.appearences,
        rating: statistics[0].games.rating,
        shots: statistics[0].shots.total,
        shotsOn: statistics[0].shots.on,
        dribbles: {
          attempts: statistics[0].dribbles.attempts,
          success: statistics[0].dribbles.success,
          past: statistics[0].dribbles.past,
        },
        fouls: {
          drawn: statistics[0].fouls.drawn,
          committed: statistics[0].fouls.committed,
        },
        tackles: {
          total: statistics[0].tackles.total,
          blocks: statistics[0].tackles.blocks,
          interceptions: statistics[0].tackles.interceptions,
        },
        passes: {
          total: statistics[0].passes.total,
          key: statistics[0].passes.key,
          accuracy: statistics[0].passes.accuracy,
        },
      },
    }),
  );
  return playerDetails[0];
};
