export interface Parameters {
  league: string;
  season: string;
}

export interface Paging {
  current: number;
  total: number;
}

export interface League {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag: string;
  season: number;
  standings: Standings[][];
}

export interface ResponseStanding {
  league: League;
}

export interface RootObjectStanding {
  get: string;
  parameters: Parameters;
  errors: any[];
  results: number;
  paging: Paging;
  response: ResponseStanding[];
}

export interface Team {
  id: number;
  name: string;
  logo: string;
}

export interface Goals {
  for: number;
  against: number;
}

export interface All {
  played: number;
  win: number;
  draw: number;
  lose: number;
  goals: Goals;
}

export interface Goals2 {
  for: number;
  against: number;
}

export interface Home {
  played: number;
  win: number;
  draw: number;
  lose: number;
  goals: Goals2;
}

export interface Goals3 {
  for: number;
  against: number;
}

export interface Away {
  played: number;
  win: number;
  draw: number;
  lose: number;
  goals: Goals3;
}

export interface Standings {
  rank: number;
  team: Team;
  points: number;
  goalsDiff: number;
  group: string;
  form: string;
  status: string;
  description: string;
  all: All;
  home: Home;
  away: Away;
  update: Date;
}
