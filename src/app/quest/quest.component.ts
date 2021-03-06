import { Component, OnInit } from '@angular/core';
import { Location } from '../models/location';
import { Loot } from '../models/loot';
import { LocationService } from '../location.service';
import { PlayerService } from '../player.service';
import { Equipment } from '../equipment';
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
  cookloot: Loot[];

  constructor(private locationSvc: LocationService, private playerSvc: PlayerService) { }

  ngOnInit() {
    this.getUnlockedLocations(2);
    this.getPlayerEquipment(2);
  }

  getUnlockedLocations(x) {
    this.playerSvc.getUnlockedLocations(x).then(res => this.locations = res);
  }

  getPlayerEquipment(x) {
    this.playerSvc.getPlayerEquipment(x).then(res => {this.equipment = res; this.selectedEquipment = res[0]; });

  }

  getPlayerLoot(x) {
    this.playerSvc.getPlayerLoot(x).then(res => this.playerloot = res);
  }

  onClickMe(x) {
    this.locationSvc.getQuestLoot(x.target.value, this.selectedEquipment.modifier).then(res => {this.loot = res;
                                                                                                if (this.loot) {
        this.loot.forEach(z => z.quantity = 1);
        this.playerSvc.addPlayerLootArr(2, this.loot);
        }});

    }

    // onClickMe(x) {
    //   this.locationSvc.getQuestLoot(x.target.value, this.selectedEquipment.modifier).then(res => {this.loot = res;
    //                                                                                               if (this.loot) {
    //       this.loot.map(x => x.quantity = 1);
    //       this.playerSvc.addPlayerLoot(2, this.loot[0]);
    //       }});

    //   }


  selectEquipment(equip) {
    this.selectedEquipment = equip;
    console.log(this.selectedEquipment);
  }

  getPlayer(x) {
    this.playerSvc.getPlayer(x).then(res => this.player = res);
    this.getPlayerLoot(x);
    this.getPlayerEquipment(x);
  }

}
