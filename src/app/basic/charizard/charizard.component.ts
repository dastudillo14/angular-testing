import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { Pokemon } from '../interfaces/pokemon.interface';

@Component({
  selector: 'app-charizard',
  templateUrl: './charizard.component.html',
  styleUrls: ['./charizard.component.css']
})
export class CharizardComponent implements OnInit{

  pokemon!:Pokemon;


  constructor(private pokemonService:PokemonService){

  }
  ngOnInit(): void {
    this.pokemonService.getPokemon(6).subscribe((r)=>{
      this.pokemon = r;
    })
  }


}
