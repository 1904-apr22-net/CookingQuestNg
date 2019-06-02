import { Component, OnInit } from '@angular/core';
import { LocationService } from '../location.service';
import { Loot } from '../models/loot';
import { Location } from '../models/location';
import { Player } from '../models/player';
import { Equipment } from '../models/equipment';
import { PlayerService } from '../player.service';
import { Store } from '../models/store';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  equipment: Equipment[];
  selectedEquipment: Equipment;
  playerloot: Loot[];
  locationid: number;
  player: Player;
  stores: Store[];

  constructor(private storeSvc: StoreService, private locationSvc: LocationService, private playerSvc: PlayerService) { }

  ngOnInit() {
    this.getStores();
    this.getPlayer(1);
    console.log(this.stores);
  }

  getStores() {
  this.storeSvc.getAllStores().then(res => this.stores = res);
  }

  getPlayerEquipment(x) {
    this.playerSvc.getPlayerEquipment(x).then(res => this.equipment = res);
  }

  getPlayerLoot(x) {
    this.playerSvc.getPlayerLoot(x).then(res => this.playerloot = res);
  }

  getPlayer(x) {
    this.playerSvc.getPlayer(x).then(res => this.player = res);
    this.getPlayerLoot(x);
    this.getPlayerEquipment(x);
  }

}
