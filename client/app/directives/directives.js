import angular from 'angular';
import anchorScroll from './anchorScroll/anchorScroll.directive';

let directiveModule = angular.module('app.directive', [])
.directive('anchorScroll',anchorScroll)
.name;

export default directiveModule;
