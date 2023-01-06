import { Injectable, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { Pokemons, Pokemon_ } from 'src/models/pokemons-response';
@Injectable({
  providedIn: 'root'
})
export class PokemonService{
  private url: string = "https://pokeapi.co/api/v2/pokemon/";
  private url2: string = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
  constructor(private http : HttpClient) { }
  GetPokemon(name: string){
    return this.http.get<Pokemon_>(this.url + name);
  }
  GetAllPokemon(){
    return this.http.get<Pokemons>(this.url2);
  }
}
