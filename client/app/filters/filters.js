import angular from 'angular';
import toMinute from './toMinute/toMinute.filter';

let serviceModule = angular.module('app.filters', [])
.filter('toMinute',toMinute)

.name;

export default serviceModule;
