import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.css']
})
export class KitchenComponent implements OnInit {
  ingredient1 = 'Test';
  ingredient2 = 'Test';
  ingredient3 = 'Test';

  constructor() { }

  ngOnInit() {
  }

}
