import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-counter-route',
  templateUrl: './counter-route.component.html',
  styleUrls: ['./counter-route.component.css']
})
export class CounterRouteComponent {
  counter = 0;

  constructor(
    private activatedRouter:ActivatedRoute
  ){

  }

  ngOnInit(){
    const initial = Number(this.activatedRouter.snapshot.paramMap.get('initial'));
    this.counter = isNaN(initial)?10: initial;

  }


  increasyBy(value: number){
    this.counter+= value;
  }
}
