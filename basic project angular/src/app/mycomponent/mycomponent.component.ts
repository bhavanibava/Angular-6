import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mycomponent',
  templateUrl: './mycomponent.component.html',
  styleUrls: ['./mycomponent.component.css']
})
export class MycomponentComponent implements OnInit {
  person;
  mark : number;
  constructor() { 
    this.person = {firstName : 'Bhava',lastName : 'Sai'}
    this.mark = 80;
  }
  showName(){
    return this.person.firstName + this.person.lastName;
  }
  ngOnInit() {

  }

}
