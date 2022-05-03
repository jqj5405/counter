import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {
  private counter: number = 42;

  getCounter() {
    return this.counter;
  }

  constructor() {}

  ngOnInit() {}

  onAdd() {
    this.counter++;
  }

  onReduce() {
    this.counter--;
  }
}
