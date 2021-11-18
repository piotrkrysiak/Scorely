import { Response } from 'src/ts/interfaces/topPlayerResponse';
import { Player } from 'src/ts/interfaces/player';

// eslint-disable-next-line import/prefer-default-export
export const convertToPlayers = (response: Response[]): Player[] =>
  response.map(({ player, statistics }: Response) => ({
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
