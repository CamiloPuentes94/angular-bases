import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{ counter }}</h3>

    <button (click)="increment(1)">+1</button>
    <button (click)="reset()">Reset</button>
    <button (click)="decrement(1)">-1</button>
  `,
})
export class CounterComponent {
  constructor() {}

  public counter: number = 13;

  increment(value: number): void {
    this.counter += value;
  }

  decrement(value: number): void {
    this.counter -= value;
  }

  reset(): void {
    this.counter = 10;
  }
}
