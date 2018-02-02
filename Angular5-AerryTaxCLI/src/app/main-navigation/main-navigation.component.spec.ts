import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { Routes, Router, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Location } from '@angular/common';
import { HttpClientModule, HttpClient, HttpHandler } from '@angular/common/http';

import { MainNavigationComponent } from './main-navigation.component';
//import { HomeDetailsComponent } from '../home/home-details/home-details.component';
import { HomeModule } from '../home/home.module';
import { AboutModule } from '../about/about.module';
import { DisclaimerModule } from '../disclaimer/disclaimer.module';
import { HomeDataService } from '../shared/services/home-data.service';
import { NgModuleFactoryLoader } from '@angular/core';

class MockRouter {
  navigateByUrl(url: string) { return url; }
}

describe('MainNavigationComponent', () => {
  let component: MainNavigationComponent;
  let fixture: ComponentFixture<MainNavigationComponent>;

  let router: Router;
  let location: Location;
  //let fixture;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [ MainNavigationComponent ],
      imports: [
        //RouterModule
        RouterTestingModule.withRoutes([
          {
            path: '',
            redirectTo: 'home',
            pathMatch: 'full'
          },  
          {
            path: 'home',
            loadChildren: '../home/home.module#HomeModule'
          },                  
          //{
          //  path: 'home',
          //  component: HomeDetailsComponent
          //}
        ])        
      ],
      providers: [
        HttpClient, HttpHandler,
        HomeDataService
        //Router
        //{ provide: Router, useClass: MockRouter }
        //{provide: Router, useClass: RouterModule},
      ]
    })
    .compileComponents();

  }));

/*   beforeEach(() => {

    router = TestBed.get(Router);
    location = TestBed.get(Location);
    //fixture = TestBed.createComponent(MainNavigationComponent);

    fixture = TestBed.createComponent(MainNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    router.initialNavigation();
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    //expect(location.path);
  });

  it('navigate to "" redirects you to /home', fakeAsync(() => {
    router.navigate(['']);
    tick();
    expect(location.path()).toBe('home');
  })); */

  it('should navigate to disclaimer child path', fakeAsync(() => {
    let router = TestBed.get(Router);
    let location = TestBed.get(Location);
    let fixture = TestBed.createComponent(MainNavigationComponent);
    router.initialNavigation();
  
    const loader = TestBed.get(NgModuleFactoryLoader);
    loader.stubbedModules = {lazyModule: DisclaimerModule};
  
    router.resetConfig([
      {path: 'disclaimer', loadChildren: 'lazyModule'}, // AboutModule //lazyModule
    ]);
  
    router.navigateByUrl('/disclaimer');
    
    tick();
    fixture.detectChanges();
  
    expect(location.path()).toBe('/disclaimer');   
  }));

  it('should navigate to about child path', fakeAsync(() => {
    let router = TestBed.get(Router);
    let location = TestBed.get(Location);
    let fixture = TestBed.createComponent(MainNavigationComponent);
    router.initialNavigation();
  
    const loader = TestBed.get(NgModuleFactoryLoader);
    loader.stubbedModules = {lazyModule: DisclaimerModule};
  
    router.resetConfig([
      {path: 'about', loadChildren: 'lazyModule'},
    ]);
  
    router.navigateByUrl('/about');
    
    tick();
    fixture.detectChanges();
  
    expect(location.path()).toBe('/about'); 
  }));

});
