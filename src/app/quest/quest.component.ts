import { Component, OnInit } from '@angular/core';
import { Location } from '../models/location';
import { Loot } from '../models/loot';
import { LocationService } from '../location.service';
import { PlayerService } from '../player.service';
import { Equipment } from '../models/equipment';

@Component({
  selector: 'app-quest',
  templateUrl: './quest.component.html',
  styleUrls: ['./quest.component.css']
})
export class QuestComponent implements OnInit {

  locations: Location[];
  equipment: Equipment[];
  selectedEquipment: Equipment;
  loot: Loot[];
  locationid: number;

  constructor(private locationSvc: LocationService, private playerSvc: PlayerService) { }

  ngOnInit() {
    this.getUnlockedLocations(1);
    this.getPlayerEquipment(1);
  }

  getUnlockedLocations(x) {
    this.locationSvc.getUnlockedLocations(x).then(res => this.locations = res);
  }

  getPlayerEquipment(x) {
    this.playerSvc.getUnlockedLocations(x).then(res => this.equipment = res);
  }

  onClickMe(x) {
    this.locationSvc.getQuestLoot(x.target.value).then(res => this.loot = res);
  }

  
}
