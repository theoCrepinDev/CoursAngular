import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  pokemonList : Pokemon[] = POKEMONS;
  title = 'ng-pokemon-app';
  selectedPokemon : Pokemon | undefined;

  ngOnInit(): void {
      console.table(this.pokemonList)
  }

  selectPokemon(index : String){
    const pokemon : Pokemon | undefined = this.pokemonList.find(a => a.id === (+index))
    if(pokemon){
      console.log(`Vous avez sélectionné le pokemon ${pokemon?.name}`);
      this.selectedPokemon = pokemon;
      //console.log("Vous avez sélectionné le pokemon : " + pokemonName);
    }else{
      console.log('Pokemon inéxistant');
      this.selectedPokemon = undefined;
    }

  }
}
