import { Component, OnInit } from '@angular/core';
import {HomeDetailsTileTabComponent} from '../home-details-tile-tab/home-details-tile-tab.component';
@Component({
  selector: 'arytx-home-details-tiles',
  templateUrl: './home-details-tiles.component.html',
  styleUrls: ['./home-details-tiles.component.scss']
})
export class HomeDetailsTilesComponent implements OnInit {


  tabs: HomeDetailsTileTabComponent[] = [];

    constructor() { }

    selectTab(tab: HomeDetailsTileTabComponent){
      //debugger;
     this.tabs.forEach((tab) => {
       tab.active = false;
     });
     tab.active = true;
   }

   addTab(tab: HomeDetailsTileTabComponent){
     if (this.tabs.length === 0){
       tab.active = true;
     }
     //debugger;
     this.tabs.push(tab);
   }


  ngOnInit() {
  }

}
