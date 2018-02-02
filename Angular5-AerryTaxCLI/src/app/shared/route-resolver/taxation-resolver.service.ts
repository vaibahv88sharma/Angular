import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { AppSettings } from '../app.settings';
import { HomeDataService } from '../services/home-data.service';

@Injectable()
export class TaxationResolverService implements Resolve<any> {

  constructor(private router: Router, private ds: HomeDataService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    //let id = route.params['id'];
    /*     this.ds.getTaxation(AppSettings.SERVICES_PROVIDED).subscribe(
          data => {
            debugger;
            //this.tabsThumbnails = data.tabs;
          },
          err => console.log('get error: ', err)
        ); */
    let id1 = route.params['id'];
    let id = route.paramMap.get('id');
    //debugger;
    if (isNaN(+id)) {
      //console.log(`Taxation id was not a number: ${id}`);
      this.router.navigate(['/home']);
      return Observable.of(null);
    }
    return this.ds.getTaxation(AppSettings.SERVICES_PROVIDED)
      .map(data => {
        if (data) {
          //debugger;
          //Object.keys(data.tabs).forEach((tab) =>
          //{
          //  //console.log(id);
          //  //console.log(data.tabs[tab].id);
          //  //debugger;
          //  if(data.tabs[tab].id == id){
          //    return data.tabs[tab];
          //  }
          //});  
          let tab = data.tabs.filter(
            tab => tab.id == id
          );
          //debugger;
          if (tab){
            //debugger;
            //console.log(tab[0]);
            return tab[0];
          }
          //debugger;
          //return null;
        }
        //debugger;
        //console.log(`Taxation was not found: ${id}`);
        this.router.navigate(['/home']);
        return null;
      })
      .catch(error => {
        debugger;
        //console.log(`Retrieval error: ${error}`);
        this.router.navigate(['/home']);
        return Observable.of(null);
      });
  }

}
