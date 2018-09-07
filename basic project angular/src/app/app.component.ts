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
  ans : number;
  hideOperation1 : boolean = false;
  hideOperation2 : boolean = false;
  amdHideValue : boolean = false;
  constructor(){
    this.value1 = 40;
    this.value2 = 20;
  }
  amdShowFunction(){
    this.amdHideValue = true;
  }
  show(){
    this.hideOperation1 = true;
  }
  clear(){
    this.hideOperation1 = false;
  }
  addition(){
    this.ans = this.value1+this.value2;
    this.hideOperation2 = true;
  }
}
