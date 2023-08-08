import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter {{Counter}}</h3>
    <button (click)="increaseBy(1)">+1</button>
    <button (click)="reset()">Reset</button>
    <button (click)="dicreaseBy(1)">-1</button>
    <hr>
  `
})

export class CounterComponent{

  public Counter: number = 10;

  increaseBy(value:number):void {
    this.Counter += value;
  }

  dicreaseBy(value:number):void {
    this.Counter -= value;
  }

  reset():void {
    this.Counter = 10;
  }
}
