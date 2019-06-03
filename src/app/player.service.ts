import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Location } from './models/location';
import { Equipment } from './equipment';
import { Loot } from './models/loot';
import { Player } from './models/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  constructor(private http: HttpClient) { }
  private static newPlayerUrl = 'https://cookingquest.azurewebsites.net/api/player';

  private static httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

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
  private static postNewLootArr(playerId: number = 1): string {
    return `https://cookingquest.azurewebsites.net/api/player/newlootarr/${playerId}`;
  }

  private static postNewEquip(playerId: number = 1): string {
    return `https://cookingquest.azurewebsites.net/api/player/postequipment/${playerId}`;
  }

  private static deleteLoot(playerLootId: number = 1): string {
    return `https://cookingquest.azurewebsites.net/api/player/deleteloot/${playerLootId}`;
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



  addPlayerLoot(id: number, loot: Loot): Promise<boolean> {
    return this.http.post<boolean>(PlayerService.postNewLoot(id), loot, PlayerService.httpOptions)
    .toPromise()
    .then(res => {
      console.log(res);
      return res;
    });
  }

  addPlayerLootArr(id: number, loot: Loot[]): Promise<boolean> {
    return this.http.post<boolean>(PlayerService.postNewLootArr(id), loot, PlayerService.httpOptions)
    .toPromise()
    .then(res => {
      console.log(res);
      return res;
    });
  }

  editPlayer(player: Player): Promise<boolean> {
    console.log(player);
    return this.http.put<boolean>(PlayerService.getPlayer(player.playerId), player, PlayerService.httpOptions)
    .toPromise()
    .then(res => {
      console.log(res);
      return res;
    });
  }

  addEquipment(id: number, equipment: Equipment): Promise<boolean> {
    return this.http.post<boolean>(PlayerService.postNewEquip(id), equipment, PlayerService.httpOptions)
    .toPromise()
    .then(res => {
      console.log(res);
      return res;
    });
  }

  deleteLoot(playerLootId: number): Promise<boolean> {
    return this.http.delete<boolean>(PlayerService.deleteLoot(playerLootId))
    .toPromise()
    .then(res => {
      console.log(res);
      return res;
    });
  }

}
