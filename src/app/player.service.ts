import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from './models/location';
import { Equipment } from './models/Equipment';
import { Loot } from './models/loot';
import { Player } from './models/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private static newPlayerUrl = 'https://cookingquest.azurewebsites.net/api/player';

  private static getPlayerEquipment(playerId: number = 1): string {
    return `https://cookingquest.azurewebsites.net/api/Player/Equipment/${playerId}`;
  }

  private static getPlayerLoot(playerId: number = 1): string {
    return `https://cookingquest.azurewebsites.net/api/Player/Loot/${playerId}`;
  }

  private static getPlayer(playerId: number = 1): string {
    return `https://cookingquest.azurewebsites.net/api/Player/${playerId}`;
  }

  private static getUnlockedLocationsUrl(playerId: number = 1): string {
    return `https://cookingquest.azurewebsites.net/api/player/locations/${playerId}`;
  }

  private static postNewLoot(playerId: number = 1): string {
    return `https://cookingquest.azurewebsites.net/api/player/newloot/${playerId}`;
  }



  getPlayerEquipment(x): Promise<Equipment[]> {
    return this.http.get<Equipment[]>(PlayerService.getPlayerEquipment(x))
      .toPromise()
      .then(res => {
        console.log(res);
        return res;
      });
  }

  getPlayerLoot(x): Promise<Loot[]> {
    return this.http.get<Loot[]>(PlayerService.getPlayerLoot(x))
      .toPromise()
      .then(res => {
        console.log(res);
        return res;
      });
  }



  getPlayer(x): Promise<Player> {
    return this.http.get<Player>(PlayerService.getPlayer(x))
      .toPromise()
      .then(res => {
        console.log(res);
        return res;
      });
  }

  getUnlockedLocations(x): Promise<Location[]> {
    return this.http.get<Location[]>(PlayerService.getUnlockedLocationsUrl(x))
      .toPromise()
      .then(res => {
        console.log(res);
        return res;
      });
    }

  addPlayerLoot(i, x) {
    return this.http.post(PlayerService.postNewLoot(i),
    {
      name: x.name,
      description: x.description,
      quantity: 1,
      lootId: x.lootId
    });

  }

  

  constructor(private http: HttpClient) { }
}
