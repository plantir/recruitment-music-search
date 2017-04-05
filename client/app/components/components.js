import angular from 'angular';
import Home from './home/home';
import Header from './header/header';
import Search from './search/search';
import Footer from './footer/footer';
import Album from './album/album';
import Artist from './artist/artist';
import SearchResult from './searchResult/searchResult';
import SearchItem from './searchItem/searchItem';

let componentModule = angular.module('app.components', [
  Home,
  Header,
  Footer,
  Search,
  SearchResult,
  SearchItem,
  Album,
  Artist
])

.name;

export default componentModule;
