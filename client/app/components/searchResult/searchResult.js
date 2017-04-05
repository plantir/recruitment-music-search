import angular from 'angular';
import uiRouter from 'angular-ui-router';
import searchResultComponent from './searchResult.component';

let searchResultModule = angular.module('searchResult', [
  uiRouter
])

.component('searchResult', searchResultComponent)

.name;

export default searchResultModule;
