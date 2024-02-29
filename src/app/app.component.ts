import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title: string = 'Mi primer proyecto en Angular';
  public counter : number = 13;

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
