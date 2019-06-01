import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from './models/location';
import { Equipment } from './models/Equipment';
import { Loot } from './models/loot';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private static newPlayerUrl = 'https://cookingquest.azurewebsites.net/api/player';

  private static getPlayerEquipment(playerId: number = 1): string {
    return `https://cookingquest.azurewebsites.net/api/Player/Equipment/${playerId}`;
  }

  getUnlockedLocations(x): Promise<Equipment[]> {
    return this.http.get<Equipment[]>(PlayerService.getPlayerEquipment(x))
      .toPromise()
      .then(res => {
        console.log(res);
        return res;
      });
    // httpclient's "get", etc generic methods
    // auto-deserialize JSON into whatever the generic type parameter is.
    // (in this case, DrawCardResponse.)
  }

  constructor(private http: HttpClient) { }
}
