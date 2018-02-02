import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HomeDataService } from '../shared/services/home-data.service';
import { AppSettings } from '../shared/app.settings';
import { MainNav } from '../shared/data-model/main-nav';

@Component({
  selector: 'arytx-main-navigation',
  templateUrl: './main-navigation.component.html',
  styleUrls: ['./main-navigation.component.scss']
})
export class MainNavigationComponent implements OnInit {

  dropdownMenu: Array<MainNav> = [];
  // dropdownMenu: Array<any> = [];
  show = false;

  toggleCollapse() {
    this.show = !this.show;
  }

  isActive(url: string): boolean {
    return url === this._router.url;
  }

  constructor(private _router: Router, private hds: HomeDataService) {
/*     hds.getTaxation(AppSettings.SERVICES_PROVIDED).subscribe(
      data => {
        this.dropdownMenu = data.navDropdown;
      },
      err => console.log('get error: ', err)
    ); */
  }

  ngOnInit() {
    this.hds.getTaxation(AppSettings.SERVICES_PROVIDED).subscribe(
      data => {
        this.dropdownMenu = data.navDropdown;
      },
      err => console.log('get error: ', err)
    );
  }

}
