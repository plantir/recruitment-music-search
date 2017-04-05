import template from './artist.html';
import controller from './artist.controller';
import './artist.scss';

let artistComponent = {
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

export default artistComponent;
