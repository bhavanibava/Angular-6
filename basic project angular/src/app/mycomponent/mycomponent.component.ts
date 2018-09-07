import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mycomponent',
  templateUrl: './mycomponent.component.html',
  styleUrls: ['./mycomponent.component.css']
})
export class MycomponentComponent implements OnInit {
  person;
  mark : number;
  hideValue : boolean = false;
  constructor() { 
    this.person = {firstName : 'Bhava',lastName : 'Sai'}
    this.mark = 80;
  }
  show(){
    this.hideValue=!this.hideValue;
    // this.person.firstName + this.person.lastName;
  }
  ngOnInit() {

  }

}
