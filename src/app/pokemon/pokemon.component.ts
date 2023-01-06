import { Component, OnInit } from '@angular/core';
import { Pokemon_ } from 'src/models/pokemons-response';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit  {
  public name: string=""

  public info: any =[]
  number : String =""
  constructor(private pokemonService : PokemonService){

  }
  search(){
    this.pokemonService.GetPokemon(this.name)
    .subscribe((data) =>{
      this.info=[data]
    })
  }
  recargar(){
    this.info=[]
    for (let i = 0; i < 50; i++) {
      this.pokemonService.GetPokemon(i + "")
        .subscribe((data) =>{
          this.info.push(data)
    })
    }
  }
  ngOnInit(): void {
    this.info=[]
    for (let i = 1; i < 50; i++) {
      this.pokemonService.GetPokemon(i + "")
        .subscribe((data) =>{
        this.info.push(data)
    })
    }
  }
}
