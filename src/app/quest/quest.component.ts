import { Component, OnInit } from '@angular/core';
import { Location } from '../models/location';
import { Loot } from '../models/loot';
import { LocationService } from '../location.service';
import { PlayerService } from '../player.service';
import { Equipment } from '../models/equipment';
import { Player } from '../models/player';

@Component({
  selector: 'app-quest',
  templateUrl: './quest.component.html',
  styleUrls: ['./quest.component.css']
})
export class QuestComponent implements OnInit {

  locations: Location[];
  equipment: Equipment[];
  selectedEquipment: Equipment;
  playerloot: Loot[];
  loot: Loot[];
  locationid: number;
  player: Player;

  constructor(private locationSvc: LocationService, private playerSvc: PlayerService) { }

  ngOnInit() {
    this.getUnlockedLocations(1);
    this.getPlayerEquipment(1);
  }

  getUnlockedLocations(x) {
    this.playerSvc.getUnlockedLocations(x).then(res => this.locations = res);
  }

  getPlayerEquipment(x) {
    this.playerSvc.getPlayerEquipment(x).then(res => this.equipment = res);
  }

  getPlayerLoot(x) {
    this.playerSvc.getPlayerLoot(x).then(res => this.playerloot = res);
  }

  onClickMe(x) {
    this.locationSvc.getQuestLoot(x.target.value).then(res => this.loot = res);
    if (this.loot) {
      this.playerSvc.addPlayerLoot(2, this.loot[0]);
    }
  }

  getPlayer(x) {
    this.playerSvc.getPlayer(x).then(res => this.player = res);
    this.getPlayerLoot(x);
    this.getPlayerEquipment(x);
  }

}
