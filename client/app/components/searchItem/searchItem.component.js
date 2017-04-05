import template from './searchItem.html';
import controller from './searchItem.controller';
import './searchItem.scss';

let searchItemComponent = {
  restrict: 'E',
  bindings: {
    name:'=itemName',
    type:'=itemType',
    id:'=itemId',
    image:'=itemImage'
    
  },
  template,
  controller
};

export default searchItemComponent;
