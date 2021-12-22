import {
  Match,
  Player,
  ResponseGameweek,
  ResponseTopScorers,
} from 'src/ts/interfaces';
import { ResponseStanding } from 'src/ts/interfaces/standingsResponse';
import { TableTeam } from 'src/ts/interfaces/table';

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

export const convertToTable = (response: ResponseStanding[]): TableTeam[] => {
  const tableArray = response.map(
    ({ league: { standings } }: ResponseStanding) => ({
      standings: standings[0].map(
        ({ team, rank, points, goalsDiff, all: { played } }) => ({
          team: {
            id: team.id,
            name: team.name,
            logo: team.logo,
          },
          rank,
          points,
          goalsDiff,
          played,
        }),
      ),
    }),
  );
  return tableArray[0].standings;
};
