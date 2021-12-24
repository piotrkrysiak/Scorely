interface Parameters {
  league: string;
  season: string;
}
interface Paging {
  current: number;
  total: number;
}
interface League {
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
interface Team {
  id: number;
  name: string;
  logo: string;
}
interface Goals {
  for: number;
  against: number;
}
interface All {
  played: number;
  win: number;
  draw: number;
  lose: number;
  goals: Goals;
}
interface Goals2 {
  for: number;
  against: number;
}
interface Home {
  played: number;
  win: number;
  draw: number;
  lose: number;
  goals: Goals2;
}
interface Goals3 {
  for: number;
  against: number;
}
interface Away {
  played: number;
  win: number;
  draw: number;
  lose: number;
  goals: Goals3;
}
interface Standings {
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
