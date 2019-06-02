import { Flavor } from './flavor';

export interface Store {
  name: string;
  description: string;
  storeId: number;
  difficulty: number;
  flavors: Flavor[];
}
