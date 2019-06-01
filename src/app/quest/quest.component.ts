import { Component, OnInit } from '@angular/core';
import { Location } from '../models/location';
import { LocationService } from '../location.service';

@Component({
  selector: 'app-quest',
  templateUrl: './quest.component.html',
  styleUrls: ['./quest.component.css']
})
export class QuestComponent implements OnInit {

  location: Location[];

  constructor(private locationSvc: LocationService) { }

  ngOnInit() {
    this.getUnlockedLocations(1);
  }

  getUnlockedLocations(x) {
    this.locationSvc.getUnlockedLocations(x).then(res => this.location = res);
  }

}
