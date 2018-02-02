import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
//import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";
import { HttpClientModule, HttpClient, HttpHandler } from '@angular/common/http';
import {Pipe, PipeTransform} from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HomeDetailsComponent } from './home-details.component';
import { HomeDetailsTileTabComponent } from '../home-details-tile-tab/home-details-tile-tab.component';
import { HomeDetailsTilesComponent } from '../home-details-tiles/home-details-tiles.component';
import { HomeDataService } from '../../shared/services/home-data.service';
import { ITaxation } from '../../shared/data-model/taxation';

@Pipe({name: 'capitalize'})
class MockCapitalizePipe implements PipeTransform {
  transform(value: string, args?: string[]): any {
    if (!value) return value;
    
        return value.replace(/\w\S*/g, function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
  }
}

@Pipe({name: 'uselessPipe'})
class MockUselessPipePipe implements PipeTransform {
  transform(value: string, before: string, after: string): string {
    let newStr = `${before} ${value} ${after}`;
    return newStr;
  }
}

describe('HomeDetailsComponent', () => {
  let component: HomeDetailsComponent;
  let fixture: ComponentFixture<HomeDetailsComponent>;
  let hds: HomeDataService;
  let el: DebugElement;
  let el2: DebugElement;
  let spy: any;
  let hdsSpy: jasmine.Spy;
  let componentSpy: jasmine.Spy;  
  const dummyData: Array<ITaxation> = [
    {
      "id": "5002",
      "title": "Taxation",
      "titleDescription": "We have been providing range of accounting services to our customers and advising best financial solutions. When you choose Aerry Tax & Accounting as your financial partner, you gain the advantages of a complete financial services solution that is dynamic, flexible and created to satisfy your individual requirements.",
      "navPath": "/taxation",
      "image": "/assets/images/2a.jpg",
      "pageDescription1": "We understand there are many things you would rather be doing than your tax return.",
      "pageDescription2": "Our highly qualified staff in Aerry Tax & Accounting are capable of handling any kind of a return from a simple tax return to very complex returns. They have in depth knowledge in different types of returns so that you will not miss out a single dollar that you are entitled to.",
      "servicesListH1": "For people with employment income and deductions",
      "servicesList": [
        {
          "id": "101",
          "title": "Salary & Wage Income",
          "cost": 40,
          "selected":  true
        },
        {
          "id": "102",
          "title": "Centrelink and Government Payments (if applicable)",
          "cost":  80,
          "selected":  false
        }
      ]        
    }      
  ];  

  class MockHomeDataService{
    getHomeData(): Observable<Array<ITaxation>>{
      return Observable.of(dummyData);
    }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeDetailsComponent,
        HomeDetailsTileTabComponent,
        HomeDetailsTilesComponent,
        MockCapitalizePipe,
        MockUselessPipePipe
       ],
       imports: [
        //RouterModule
        RouterTestingModule
      ],
        providers: [
        HomeDataService,
        //{provide: HomeDataService, useValue: MockHomeDataService },
        HttpClient,
        HttpHandler
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeDetailsComponent);
    component = fixture.componentInstance;
    hds = TestBed.get(HomeDataService);        
    el = fixture.debugElement.nativeElement;//.querySelectorAll('.arytx-home-details-tiles-css');
    //el2 = fixture.debugElement.query(By.css('arytx-home-details-tiles'));
    
    hdsSpy = spyOn(hds,'getHomeData').and.returnValue(Observable.of(dummyData));
    //hdsSpy = spyOn(hds,'getHomeData').and.callThrough(); -- GIVING ERROR -- SPY HAS TO BE CALLED WITH DATA AS WELL -- DID THAT IN ABOVE LINE
    
    componentSpy = spyOn(component, "ngOnInit").and.callThrough();    
    //fixture.detectChanges();
  });

  afterEach(() => {
    hds = null;
    component = null;
  });  

  it('should not have called ngOnInit() yet', () => {
    expect(componentSpy).not.toHaveBeenCalled();
  });

  it('should make a call to ngOnInit()', () => {
    fixture.detectChanges();
    expect(componentSpy).toHaveBeenCalled();
    expect(hdsSpy).toHaveBeenCalled();
  });

  it('should get data from getHomeData method', () => {
    fixture.detectChanges();
    expect(hdsSpy).toHaveBeenCalled();
    expect(hdsSpy.and.returnValue(dummyData)).toBeTruthy();
  });

  it('should show arytx-home-details-tiles component', fakeAsync(() => {
    //console.log(el.nativeElement.querySelectorAll('arytx-home-details-tiles'));  // will not work --  WE ARE TESING ONT COMPONENT IN CONJUCTION TO ANOTHER COMPONENT
    component.ngOnInit();
    tick();
    fixture.detectChanges();
    expect(hdsSpy).toHaveBeenCalled();
    console.log(fixture.debugElement);    
    console.log(el); 
  }));

  it('should have the HomeDetailsTilesComponent and HomeDetailsTileTabComponent components', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('arytx-home-details-tiles')).not.toBe(null);
    console.log(fixture.debugElement.queryAll(By.css("arytx-home-details-tiles"))[0].nativeElement);
    console.log(fixture.debugElement.queryAll(By.css("arytx-home-details-tile-tab"))[0].nativeElement);
    expect(compiled.querySelector('arytx-home-details-tiles').length).not.toBeNull();
    expect(compiled.querySelector('arytx-home-details-tile-tab').length).not.toBeNull();
    //expect(compiled.querySelector('arytx-home-details-tile-tab').length).toBeGreaterThan(0);
    //expect(compiled.querySelector('arytx-home-details-tile-tab').length).toBeUndefined();
  }));

  it('should assign data to tabsThumbnails', () => {
    component.tabsThumbnails = dummyData;
    fixture.detectChanges();
    const s = fixture.debugElement.nativeElement;
    const ts = s.querySelectorAll("arytx-home-details-tiles");
    expect(ts.length).toEqual(1);    
    expect(fixture.debugElement.nativeElement.querySelectorAll("arytx-home-details-tiles").length).toEqual(1);    
    console.log(fixture.debugElement.nativeElement.querySelectorAll("arytx-home-details-tiles").length);
  });

  it('should assign data to tabsThumbnails ASYNC', fakeAsync(() => {
    expect(fixture.debugElement.nativeElement.querySelectorAll("arytx-home-details-tiles").length).toEqual(0);
    component.ngOnInit();
    tick();
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.querySelectorAll("arytx-home-details-tiles").length).toEqual(1);
  }));
  

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
