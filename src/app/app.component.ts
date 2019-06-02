import { Component, OnInit } from '@angular/core';
import { LocationService } from './location.service';
import { PlayerService } from './player.service';
import { Equipment } from './equipment';
import { Loot } from './models/loot';
import { Location } from './models/location';
import { Player } from './models/player';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cooking Quest';

  locations: Location[];
  equipment: Equipment[];
  selectedEquipment: Equipment;
  playerloot: Loot[];
  loot: Loot[];
  locationid: number;
  player: Player;

  constructor(private locationSvc: LocationService, private playerSvc: PlayerService) { }

  // ngOnInit() {
  //   this.getPlayerEquipment(1);
  // }

  // getPlayerEquipment(x) {
  //   this.playerSvc.getPlayerEquipment(x).then(res => this.equipment = res);
  // }

  // getPlayerLoot(x) {
  //   this.playerSvc.getPlayerLoot(x).then(res => this.playerloot = res);
  // }

  // onClickMe(x) {
  //   this.locationSvc.getQuestLoot(x.target.value).then(res => this.loot = res);
  // }

  // getPlayer(x) {
  //   this.playerSvc.getPlayer(x).then(res => this.player = res);
  //   this.getPlayerLoot(x);
  //   this.getPlayerEquipment(x);
  // }
}
