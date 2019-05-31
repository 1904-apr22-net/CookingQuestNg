import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from './models/location';
import { LocationResponse } from './models/location-response';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private static newLocationUrl = 'https://cookingquest.azurewebsites.net/api/location';
  private static newPlayerUrl = 'https://cookingquest.azurewebsites.net/api/player';


  private static getUnlockedLocationsUrl(playerId: number = 1): string {
    return `https://cookingquest.azurewebsites.net/api/player/locations/${playerId}`;
  }

  getUnlockedLocations(x): Promise<Location[]> {
    return this.http.get<Location[]>(LocationService.getUnlockedLocationsUrl(x))
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
