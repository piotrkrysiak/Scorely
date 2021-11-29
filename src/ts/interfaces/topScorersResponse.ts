interface Parameters {
  league: string;
  season: string;
}

interface Paging {
  current: number;
  total: number;
}

interface Birth {
  date: string;
  place: string;
  country: string;
}

interface Player {
  id: number;
  name: string;
  firstname: string;
  lastname: string;
  age: number;
  birth: Birth;
  nationality: string;
  height: string;
  weight: string;
  injured: boolean;
  photo: string;
}

interface Team {
  id: number;
  name: string;
  logo: string;
}

interface League {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag: string;
  season: number;
}

interface Games {
  appearences: number;
  lineups: number;
  minutes: number;
  number?: any;
  position: string;
  rating: string;
  captain: boolean;
}

interface Substitutes {
  in: number;
  out: number;
  bench: number;
}

interface Shots {
  total: number;
  on: number;
}

interface Goals {
  total: number;
  conceded?: any;
  assists: number;
  saves: number;
}

interface Passes {
  total: number;
  key: number;
  accuracy: number;
}

interface Tackles {
  total: number;
  blocks: number;
  interceptions: number;
}

interface Duels {
  total: number;
  won: number;
}

interface Dribbles {
  attempts: number;
  success: number;
  past?: any;
}

interface Fouls {
  drawn: number;
  committed: number;
}

interface Cards {
  yellow: number;
  yellowred: number;
  red: number;
}

interface Penalty {
  won: number;
  commited?: any;
  scored: number;
  missed: number;
  saved?: any;
}

interface Statistic {
  team: Team;
  league: League;
  games: Games;
  substitutes: Substitutes;
  shots: Shots;
  goals: Goals;
  passes: Passes;
  tackles: Tackles;
  duels: Duels;
  dribbles: Dribbles;
  fouls: Fouls;
  cards: Cards;
  penalty: Penalty;
}

export interface ResponseTopScorers {
  player: Player;
  statistics: Statistic[];
}

export interface RootObjectTopScorers {
  get: string;
  parameters: Parameters;
  errors: any[];
  results: number;
  paging: Paging;
  response: ResponseTopScorers[];
}
