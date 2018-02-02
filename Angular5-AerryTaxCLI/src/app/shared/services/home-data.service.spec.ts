import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { HomeDataService } from './home-data.service';
import { HttpClientModule, HttpClient, HttpHandler } from '@angular/common/http';

describe('HomeDataService', () => {
  let service: HomeDataService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers: [
        HomeDataService,
        //HttpClient,
        //HttpHandler
      ]
    });

    service = TestBed.get(HomeDataService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should retrieve data from API', () => {
    const dummyData: Array<any>=[
      {
        id: "5001",
        title: "Accounting",
        titleDescription: "We provide the full range of accounting and taxtion services so you can get on with running your business. We help you identify and manage tax risk, maximise opportunities, minimise your tax exposure, take realistic tax positions and comply with all ATO requirements.",        
        navPath: "/taxation",
        image: "/assets/images/1.jpg",
        pageDescription1: "We are proud to have highly qualified accountants who are attending regular trainings to keep up and maintain the accounting standards of the firm. Aerry Tax & Accounitng offers a wide range of accounting services and if you would like to know more please talk to one of our accountants.",
        pageDescription2: "Bookkeeping is done by using MYOB, XERO or Quickbooks. Let us know how often you need your books done and we will arrange it for you. If you would like to do bookkeeping on site, one of our assistant accountants will come to your office and do the work.",
        servicesListH1: "For people with employment income and deductions",
        servicesList: [
          {
            id: "101",
            title: "Salary & Wage Income",
            cost: 40,
            selected:  true
          },
          {
            id: "102",
            title: " Centrelink and Government Payments (if applicable)",
            cost: 80,
            selected:  false
          }
        ]         
      },
      {
        id: "5002",
        title: "Taxation",
        titleDescription: "We have been providing range of accounting services to our customers and advising best financial solutions. When you choose Aerry Tax & Accounting as your financial partner, you gain the advantages of a complete financial services solution that is dynamic, flexible and created to satisfy your individual requirements.",
        navPath: "/taxation",
        image: "/assets/images/2a.jpg",
        pageDescription1: "We understand there are many things you would rather be doing than your tax return.",
        pageDescription2: "Our highly qualified staff in Aerry Tax & Accounting are capable of handling any kind of a return from a simple tax return to very complex returns. They have in depth knowledge in different types of returns so that you will not miss out a single dollar that you are entitled to.",
        servicesListH1: "For people with employment income and deductions",
        servicesList: [
          {
            id: "101",
            title: "Salary & Wage Income",
            cost: 40,
            selected:  true
          },
          {
            id: "102",
            title: "Centrelink and Government Payments (if applicable)",
            cost:  80,
            selected:  false
          }
        ]        
      }      
    ];

    service.getTaxation('/assets/config.json').subscribe(taxes=>{
      expect(taxes.length).toBe(2);
      expect(taxes).toEqual(dummyData);
    });

    const request = httpMock.expectOne('/assets/config.json');

    expect(request.request.method).toBe('GET');
    request.flush(dummyData);
  });

  it('should be created', inject([HomeDataService], (service: HomeDataService) => {
    expect(service).toBeTruthy();
  }));
});
