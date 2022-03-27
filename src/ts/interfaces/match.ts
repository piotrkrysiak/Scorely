export interface Match {
  id: number;
  date: Date;
  status: string;
  minutes: number | undefined;
  home: Team;
  away: Team;
}
interface Team {
  id: number;
  name: string;
  logo: string;
  goals: number | undefined;
}

export interface MatchCard {
  id: number;
  home: {
    name: string;
    logo: string;
    goals: number | undefined;
  };
  away: {
    name: string;
    logo: string;
    goals: number | undefined;
  };
  status: string;
}
