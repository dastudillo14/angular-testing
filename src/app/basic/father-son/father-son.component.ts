import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Client } from '../interfaces/client.interface';

@Component({
  selector: 'app-father-son',
  templateUrl: './father-son.component.html',
  styleUrls: ['./father-son.component.css']
})
export class FatherSonComponent {

  @Input() client?:Client;

  @Output() onDeleteClient = new EventEmitter();
  @Output() onClientUpdated = new EventEmitter<Client>();



  onDelete(){
    this.client = undefined;
    this.onDeleteClient.emit();
  }

  onChange(newId:number){
    if(this.client){
      this.client = {
        ...this.client,
        id: newId
      };
      this.onClientUpdated.emit(this.client);
    }
  }

}
