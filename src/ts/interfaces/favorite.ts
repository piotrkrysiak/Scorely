import { MatchCard } from './match';
import { Player } from './player';
import { Post } from './post';

export interface Favorite {
  players: Player[];
  posts: Post[];
  matches: MatchCard[];
}
