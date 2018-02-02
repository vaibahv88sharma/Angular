import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/delay';

import { ITaxation } from '../data-model/taxation';
import { IAllDataFromJsonService } from '../data-model/all-data-from-json-service';

@Injectable()
export class HomeDataService {
private response: Response;
  constructor(private http: HttpClient) { }

  getTaxation(url: string): Observable<any> {
    return this.http.get<any>(
            url
        )
        .delay(2000)
        .map(this.handleSuccess)
        .catch(this.handleError);
  }

  
  getHomeData(url: string): Observable<Array<ITaxation>> {
    return this.http.get<IAllDataFromJsonService>(
            url
        )
        .delay(2000)
        .map(this.handleHomeDataSuccess)
        .catch(this.handleError);
  }  
/*
  getTaxation(url: string): Observable<any> {
    return this.http.get(
            url
        )
        .delay(2000)
        .map(this.handleSuccess)
        .catch(this.handleError);
  }
*/  
  private handleHomeDataSuccess(res: IAllDataFromJsonService) {//Response
    //debugger;
    return res.tabs || {};
  }
  private handleSuccess(res: Response) {//Response
    //const body = res.json();
    return res || {};
  }

/*   getTaxationById(url: string, id: number): Observable<any> {
    return this.http.get(
            url
        )
        // .delay(5000)
        .map(this.handleSuccessById)
        .catch(this.handleError);
  }
  private handleSuccessById(res: Response, id: number) {
    //const body = res.json();
    debugger;
    Object.keys(res.tabs).forEach((name) =>
    {
        // if (controlName === name)
        //{
        //    this.cr[name] = '';
        //    if ((c.touched || c.dirty) && c.errors) {
        //        this.cr[name] = Object.keys(c.errors).map(key =>
        //            this.formValidation[name][key]).join(' ');
        //    }
        //} 
    });    
    return res || {};
  } */

  private handleError(error: any) {
      debugger;
      console.log(error);
      return Observable.throw(error.json());
  }


}
