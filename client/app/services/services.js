import angular from 'angular';
import Music from './music/music';

let serviceModule = angular.module('app.services', [
  Music
])

.name;

export default serviceModule;
