import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KitchenComponent }      from './kitchen/kitchen.component';
import { StoreComponent } from './store/store.component';
import { QuestComponent } from './quest/quest.component';

const routes: Routes = [
  { path: 'kitchen', component: KitchenComponent },
  { path: 'quest', component: QuestComponent },
  { path: 'store', component: StoreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

