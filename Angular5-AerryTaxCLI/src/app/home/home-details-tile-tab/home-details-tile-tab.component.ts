import { Component, OnInit, Input, Output, EventEmitter, DoCheck } from '@angular/core';
import {HomeDetailsTilesComponent} from '../home-details-tiles/home-details-tiles.component';
@Component({
  selector: 'arytx-home-details-tile-tab',
  templateUrl: './home-details-tile-tab.component.html',
  styleUrls: ['./home-details-tile-tab.component.scss']
})
export class HomeDetailsTileTabComponent implements OnInit, DoCheck {

  @Input() active: boolean;
  @Input('tabTitle') title: string;

  @Output() testHomeDetailsTileTabClickEvt = new EventEmitter<boolean>();
  

  constructor(tabs: HomeDetailsTilesComponent) {
   tabs.addTab(this);
 }

  ngOnInit() {
  }

  ngDoCheck() {
    this.testHomeDetailsTileTabClickEvt.emit(!this.active);    
  }

}
