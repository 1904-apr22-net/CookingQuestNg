import { Injectable } from '@angular/core';
import { Equipment } from './equipment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Loot } from './models/loot';
import { Store } from './models/store';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private static getPlayerLoot(playerId: number = 1): string {
    return `https://cookingquest.azurewebsites.net/api/Player/Loot/${playerId}`;
  }

  private static getStores(): string {
    return `https://cookingquest.azurewebsites.net/api/Store/`;
  }
  private static getEquipment(): string {
    return `https://cookingquest.azurewebsites.net/api/Equipment/`;
  }

  getAllStores(): Promise<Store[]> {
    return this.http.get<Store[]>(StoreService.getStores())
      .toPromise()
      .then(res => {
        console.log(res);
        return res;
      });
  }

  getAllEquipment(): Promise<Equipment[]> {
    return this.http.get<Equipment[]>(StoreService.getEquipment())
      .toPromise()
      .then(res => {
        console.log(res);
        return res;
      });
  }

  constructor(private http: HttpClient) { }
}
