import { Component } from '@angular/core';
import { registerLocaleData } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-crash-todolist';
  name: string = 'Ralph';
  age: number = 8;
  numberArray: number[] = [3, 4, 5];

  constructor() {
    console.log("hello");
    this.name = 'Ted';
    console.log(this.name);
    this.changeName('Lisa');
    console.log(this.name);
  }

  changeName(name:string):void {
    this.name = name;
  }
}
