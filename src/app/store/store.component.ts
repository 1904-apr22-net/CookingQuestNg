import { Component, OnInit } from '@angular/core';
import { Loot } from '../models/loot';
import { Player } from '../models/player';
import { Equipment } from '../equipment';
import { PlayerService } from '../player.service';
import { Store } from '../models/store';
import { StoreService } from '../store.service';
import { SelectorListContext } from '@angular/compiler';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  equipment: Equipment[];
  allEquipment: Equipment[];
  voucher: Equipment;
  nextvoucher: Equipment;
  playerloot: Loot[];
  locationid: number;
  player: Player;
  stores: Store[];
  cookStore: Store;
  ingredient1: Loot;
  ingredient2: Loot;
  ingredient3: Loot;

  constructor(private storeSvc: StoreService, private playerSvc: PlayerService) { }

  ngOnInit() {
    this.getStores();
    this.getPlayer(2);
    this.getPlayerLoot(2);
    this.getEquipment();
    this.getPlayerEquipment(2);

  }

  update(){
    this.getStores();
    this.getPlayer(2);
    this.getPlayerLoot(2);
    this.getEquipment();
    this.getPlayerEquipment(2);
  }

  getStores() {
  this.storeSvc.getAllStores().then(res => this.stores = res);
  }
  getEquipment() {
    this.storeSvc.getAllEquipment().then(res => this.allEquipment = res);
  }

  getPlayerEquipment(x) {
    this.playerSvc.getPlayerEquipment(x).then(res => {
      // this.equipment = res.filter(w => w.type !== 'Voucher');
                                                      this.voucher = res.filter(q => q.type === 'Voucher').reduce(this.equipmentReducer);
                                                      this.stores = this.stores.filter(z => z.difficulty <= this.voucher.difficulty);
                                                      this.update();
                                                      // this.storeSvc.getAllEquipment().
                                                      // then(res2 => this.allEquipment = res2.filter
                                                      // (r => this.equipment.filter(e => e.name !== r.name).length > 0));
  });
  }
  equipmentReducer = (prev, current) => (prev.difficulty > current.difficulty) ? prev : current;

  upgradeVoucher() {
    this.nextvoucher = this.allEquipment.find(q => q.type === 'Voucher' && q.difficulty === this.voucher.difficulty + 1);
    console.log(this.nextvoucher);
    if (this.nextvoucher.price <= this.player.gold) {
      this.player.gold -= this.nextvoucher.price;
      this.playerSvc.editPlayer(this.player).then(() => {
        this.playerSvc.addEquipment(this.player.playerId, this.nextvoucher).then(() => {
          this.update();
        });
      });
    }
  }

  sellLoot( store: Store , loot: Loot) {
    console.log(store, loot);
    const bonus = store.flavors.find(z => z.name === loot.flavor.name).bonus;
    this.player.gold += this.playerloot.find(q => q.name === loot.name).quantity *
    this.playerloot.find(q => q.name === loot.name).price * bonus;
    this.playerSvc.editPlayer(this.player).then(() => {
      this.playerSvc.deleteLoot(this.playerloot.find(q => q.name === loot.name).playerLootId).then(() => {
        this.update();
      });
    });
  }

  getPlayerLoot(x) {
    this.playerSvc.getPlayerLoot(x).then(res => this.playerloot = res);
  }

  getPlayer(x) {
    this.playerSvc.getPlayer(x).then(res => this.player = res);
  }

  buyEquipment(event) {
    console.log(event.target.value);
    const equipment = this.allEquipment.filter(x => x.name === event.target.value)[0];
    if (equipment.price < this.player.gold) {
      this.player.gold -= this.voucher.price;
      this.playerSvc.editPlayer(this.player).then(() => {
        this.playerSvc.addEquipment(this.player.playerId, this.nextvoucher).then(() => {
          this.update();
        });
      });
    }
  }

  buyEquipmentNew(event) {
    console.log(event.target.value);
    const equipment = this.allEquipment.filter(x => x.name === event.target.value)[0];
    if (equipment.price <= this.player.gold) {
      this.player.gold -= equipment.price;
      this.playerSvc.editPlayer(this.player).then(() => {
        this.playerSvc.addEquipment(this.player.playerId, equipment).then(() => {
          this.update();
        });
      });
    }
  }

  onClickMe(event) {
    this.cookStore = event.target.value;
  }

  ingredient1handler(x) {
    this.ingredient1 = x;
  }
  ingredient2handler(x) {
    this.ingredient2 = x;
  }
  ingredient3handler(x) {
    this.ingredient3 = x;
  }

  cooker() {
    const ingredientArr = [this.ingredient1, this.ingredient2, this.ingredient3];
    if (ingredientArr.every(x => x.flavor === ingredientArr[0].flavor)) {
        this.player.gold += 100;
        ingredientArr.forEach(loot => {
          const bonus = this.cookStore.flavors.find(z => z.name === loot.flavor.name).bonus;
          this.player.gold += this.playerloot.find(q => q.name === loot.name).quantity *
    this.playerloot.find(q => q.name === loot.name).price * bonus;
  });
        this.playerSvc.editPlayer(this.player).then(() => {
      ingredientArr.forEach(loot => {
      this.playerSvc.deleteLoot(this.playerloot.find(q => q.name === loot.name).playerLootId).then(() => {
        this.update();

      });
    });
  });
}
  }

}
