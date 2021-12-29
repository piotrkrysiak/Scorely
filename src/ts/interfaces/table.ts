export interface Team {
  id: number;
  name: string;
  logo: string;
}

export interface TableTeam {
  team: Team;
  rank: number;
  points: number;
  goalsDiff: number;
  played: number;
}
