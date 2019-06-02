import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from './models/location';
import { LocationResponse } from './models/location-response';
import { Loot } from './models/loot';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private static newLocationUrl = 'https://cookingquest.azurewebsites.net/api/location';
  private static newPlayerUrl = 'https://cookingquest.azurewebsites.net/api/player';



  private static getLocationLootUrl(locationId: number = 1): string {
    return `https://cookingquest.azurewebsites.net/api/location/quest/${locationId}`;
  }


  getQuestLoot(x): Promise<Loot[]> {
    return this.http.get<Loot[]>(LocationService.getLocationLootUrl(x))
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
