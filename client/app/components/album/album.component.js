import template from './album.html';
import controller from './album.controller';
import './album.scss';

let albumComponent = {
  restrict: 'E',
  bindings: {
    image:'=itemImage',
    name:'=itemName',
    items: '=itemItems',
    id: '=itemId'
  },
  template,
  controller
};

export default albumComponent;
