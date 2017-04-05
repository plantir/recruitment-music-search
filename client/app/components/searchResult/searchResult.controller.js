class SearchResultController {
  constructor($rootScope) {
    "ngInject";
    this.$rootScope = $rootScope;
    this.getSearchResult();
    this.showMoreLoading = false;
  }

  getSearchResult(){
     this.$rootScope.$on('searchResult-changed',(evt,arg) => {
       this.searchItem = arg.items;
       this.hasMore = arg.hasMore;
       this.showMoreLoading = false;
     })
  }
  showMore(){
    this.showMoreLoading = true;
    this.$rootScope.$emit('showMore')
  }
}

export default SearchResultController;
