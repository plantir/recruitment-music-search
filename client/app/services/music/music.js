import angular from 'angular';
import resource from 'angular-resource';
import musicFactory from './music.factory';

let musicModule = angular.module('music', [
  resource
])

.factory('$music', musicFactory)

.name;

export default musicModule;