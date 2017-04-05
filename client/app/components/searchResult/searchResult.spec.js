import SearchResultModule from './searchResult'
import SearchResultController from './searchResult.controller';
import SearchResultComponent from './searchResult.component';
import SearchResultTemplate from './searchResult.html';

describe('SearchResult', () => {
  let $rootScope, makeController;

  beforeEach(window.module(SearchResultModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new SearchResultController();
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
      expect(SearchResultTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = SearchResultComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(SearchResultTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(SearchResultController);
      });
  });
});
