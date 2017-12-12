import angular from 'angular';
import uirouter from 'angular-ui-router';

import routes from './pokemons.routes.js';
import pokemonList from './pokemon-list/pokemon-list.component';

export default angular.module('pokemonPoc.pokemons', [uirouter])
  .config(routes)
  .component('pokemonList', pokemonList)
  .name