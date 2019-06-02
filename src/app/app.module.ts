import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { QuestComponent } from './quest/quest.component';
import { StoreComponent } from './store/store.component';
import { HomeComponent } from './home/home.component';
import { NgxPopper } from 'angular-popper';

@NgModule({
  declarations: [
    AppComponent,
    KitchenComponent,
    QuestComponent,
    StoreComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPopper
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
