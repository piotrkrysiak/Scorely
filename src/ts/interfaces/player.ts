export interface Player {
  id: number;
  name: string;
  photo: string;
  position: string;
  team: string;
  statistics: Statistics;
}

interface Statistics {
  goals: number;
  assists: number;
  gamesPlayed: number;
  rating: string;
  shots: number;
  shotsOn: number;
}
