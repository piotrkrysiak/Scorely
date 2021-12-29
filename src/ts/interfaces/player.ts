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
interface Dribbles {
  attempts: number;
  success: number;
  past?: number;
}
interface Fouls {
  drawn: number;
  committed: number;
}

interface Passes {
  total: number;
  key: number;
  accuracy: number;
}

interface Tackles {
  total: number;
  blocks?: any;
  interceptions: number;
}
interface DetailsStatistics extends Statistics {
  dribbles: Dribbles;
  faults: Fouls;
  tackles: Tackles;
  passes: Passes;
}

export interface PlayerDetails extends Player {
  nationality: string;
  age: number;
  height: string;
  weight: string;
  date: string;
  city: string;
  statistics: DetailsStatistics;
}
