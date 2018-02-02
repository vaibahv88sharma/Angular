import { Component, OnInit } from '@angular/core';

import { HomeDataService } from '../../shared/services/home-data.service';
import { AppSettings } from '../../shared/app.settings';
import { ITaxation } from '../../shared/data-model/taxation';

@Component({
  selector: 'arytx-home-details',
  templateUrl: './home-details.component.html',
  styleUrls: ['./home-details.component.scss']
})
export class HomeDetailsComponent implements OnInit {

  //tabsThumbnails: Array<any> = [];
  //tabsThumbnails: Array<ITaxation> = [];
  tabsThumbnails: Array<ITaxation> = [];
  
  private message : string = 'welcome to aerry tax';

    constructor(private hds: HomeDataService) {
/*       hds.getTaxation(AppSettings.SERVICES_PROVIDED).subscribe(
        data => {
          //debugger;;
          this.tabsThumbnails = data.tabs;
        },
        err => console.log('get error: ', err)
      ); */
    }

  ngOnInit() {
    //this.hds.getTaxation(AppSettings.SERVICES_PROVIDED).subscribe(
    this.hds.getHomeData(AppSettings.SERVICES_PROVIDED).subscribe(
      data => {
        //debugger;
        this.tabsThumbnails = data;
        //debugger;
        //this.tabsThumbnails = data.tabsDuplicate;
        //console.log(this.tabsThumbnails);
      },
      err => console.log('get error: ', err)
    );    
  }

  testHomeDetailsTileTabClickEvtNotify(hidden: boolean): void{
    //debugger;
    //console.log(hidden);
  }

}
