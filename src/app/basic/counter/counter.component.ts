import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
})
export class CounterComponent {

  counter = 10;

  increasyBy(value: number){
    this.counter+= value;
  }

}
