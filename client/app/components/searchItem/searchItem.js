import angular from 'angular';
import uiRouter from 'angular-ui-router';
import searchItemComponent from './searchItem.component';

let searchItemModule = angular.module('searchItem', [
  uiRouter
])

.component('searchItem', searchItemComponent)

.name;

export default searchItemModule;
