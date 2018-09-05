import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'myApp';
  value1 : number;
  value2 : number;
  Name :string;
  constructor(){
    this.value1 = 40;
    this.value2 = 20;
  }
  show(){
    return this.Name;
  }
  addition(){
    return this.value1+this.value2;
  }
}
