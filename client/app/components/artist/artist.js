import angular from 'angular';
import uiRouter from 'angular-ui-router';
import artistComponent from './artist.component';

let artistModule = angular.module('artist', [
  uiRouter
])

.component('artist', artistComponent)

.name;

export default artistModule;
