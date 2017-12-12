import angular from 'angular';
import uirouter from 'angular-ui-router';

import routes from './app.routes';

angular.module('pokemonPoc', [uirouter])
  .config(routes)