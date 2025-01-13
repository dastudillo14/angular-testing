import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from '../interfaces/pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(
    private http:HttpClient
  ) { }


  getPokemon(id:number){
    return this.http.get<Pokemon>('https://pokeapi.co/api/v2/pokemon/'+id)
  }

  //https://pokeapi.co/api/v2/pokemon/ditto

}
