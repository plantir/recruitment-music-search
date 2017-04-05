import SearchItemModule from './searchItem'
import SearchItemController from './searchItem.controller';
import SearchItemComponent from './searchItem.component';
import SearchItemTemplate from './searchItem.html';

describe('SearchItem', () => {
  let $rootScope, makeController;

  beforeEach(window.module(SearchItemModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new SearchItemController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(SearchItemTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = SearchItemComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(SearchItemTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(SearchItemController);
      });
  });
});
