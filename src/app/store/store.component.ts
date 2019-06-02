import { Component, OnInit } from '@angular/core';
import { Loot } from '../models/loot';
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
  voucher: Equipment;
  nextvoucher: Equipment;
  playerloot: Loot[];
  locationid: number;
  player: Player;
  stores: Store[];

  constructor(private storeSvc: StoreService, private playerSvc: PlayerService) { }

  ngOnInit() {
    this.getStores();
    this.getPlayer(1);
  }

  getStores() {
  this.storeSvc.getAllStores().then(res => this.stores = res);
  }

  getPlayerEquipment(x) {
    this.playerSvc.getPlayerEquipment(x).then(res => {this.equipment = res.filter(x => x.type != "Voucher"); this.voucher = res.filter(x => x.type == "Voucher").reduce(this.EquipmentReducer);
    this.nextvoucher = res.find(x => x.type == "Voucher" && x.difficulty == this.voucher.difficulty + 1) ? res.find(x => x.type == "Voucher" && x.difficulty == this.voucher.difficulty + 1) : null;
    this.stores = this.stores.filter(x => x.difficulty <= this.voucher.difficulty)  
  });
  }
  EquipmentReducer = (prev, current) => (prev.difficulty > current.difficulty) ? prev : current;

  UpgradeVoucher() {
    if (this.nextvoucher.price < this.player.gold) {
      this.player.gold -= this.nextvoucher.price;


      this.getPlayerEquipment(1)
    }
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
