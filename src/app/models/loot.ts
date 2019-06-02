import { Flavor } from './flavor';

export interface Loot {
  name: string;
  description: string;
  lootId: number;
  playerLootId: number;
  price: number;
  quantity: number;
  flavor: Flavor
}
