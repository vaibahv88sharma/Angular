import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'arytx-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  isValidCheck: boolean;
  get isValid(): boolean {
    return this.isValidCheck;
  }

  isValidContactSubmitEvent(isValidContactSubmit): void{
    this.isValidCheck = isValidContactSubmit;
  }

  constructor() { }

  ngOnInit() {
  }

}
