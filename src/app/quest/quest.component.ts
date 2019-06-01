import { Component, OnInit } from '@angular/core';
import { Location } from '../models/location';
import { Loot } from '../models/loot';
import { LocationService } from '../location.service';

@Component({
  selector: 'app-quest',
  templateUrl: './quest.component.html',
  styleUrls: ['./quest.component.css']
})
export class QuestComponent implements OnInit {

  locations: Location[];
  loot: Loot[];
  locationid: number;

  constructor(private locationSvc: LocationService) { }

  ngOnInit() {
    this.getUnlockedLocations(1);
  }

  getUnlockedLocations(x) {
    this.locationSvc.getUnlockedLocations(x).then(res => this.locations = res);
  }

  onClickMe(x) {
    this.locationSvc.getQuestLoot(x.target.value).then(res => this.loot = res);
  }

}
