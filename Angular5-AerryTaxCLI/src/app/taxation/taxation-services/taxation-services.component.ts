import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'arytx-taxation-services',
  templateUrl: './taxation-services.component.html',
  styleUrls: ['./taxation-services.component.scss']
})
export class TaxationServicesComponent implements OnInit {

  tax: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    //this.tax = this.route.snapshot.data['tax'];
    this.route.data.subscribe(
      (data) => {
        this.tax = data['tax'];
      }
    );
  }

  changedCost(): number {
    /* if(this.tax){ */
      let selected = this.tax.servicesList.filter(
        selected => selected.selected == true
      )
      let finalCost = 0;
      if (selected) {
        Object.keys(selected).forEach((element) => {
          finalCost += selected[element].cost;
        });
      }
      return finalCost;
    /* }else{
      return 0;
    } */

  }

}
