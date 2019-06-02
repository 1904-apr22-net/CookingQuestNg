import { Equipment } from './equipment';
import { Loot } from './loot';
import { Location } from './location';

export interface Player {
  name: string;
  equipment: Equipment[];
  loot: Loot[];
  locations: Location[];
  playerId: number;
  gold: number;
}
