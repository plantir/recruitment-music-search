import 'normalize.css';
import 'ng-dialog/css/ngDialog.css'
import 'ng-dialog/css/ngDialog-theme-default.css'
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngDialog from 'ng-dialog';
import Components from './components/components';
import Services from './services/services';
import Filters from './filters/filters';
import Directives from './directives/directives';
import AppComponent from './app.component';
angular.module('app', [
    uiRouter,
    Components,
    Services,
    Filters,
    Directives,
    ngDialog
  ])
  .config(($locationProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
  })

  .component('app', AppComponent);
