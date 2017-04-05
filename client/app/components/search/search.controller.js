class SearchController {
  constructor($music, $rootScope, ngDialog) {
    "ngInject";
    this.$music = $music;
    this.ngDialog = ngDialog;
    this.Searching = false;
    this.$rootScope = $rootScope;
    this.searchItem = [];
    this.q = "";
    this.limit = 10;
    this.offset = 0;
    this.showMore();
    this.$watchForDialog();
  }

  search(q, showMore) {
    if (q) {
      if (!showMore) {
        this.searchItem = [];
      }
      this.Searching = true;
      this.$music.search({
        q: q,
        type: 'album,artist',
        limit: this.limit,
        offset: this.offset
      }, (data) => {
        this.Searching = false;
        this.searchItem = this.searchItem.concat(data.albums.items.concat(data.artists.items));
        if (data.albums.next || data.artists.next) {
          this.hasMore = true;
        } else {
          this.hasMore = false;
        }
        this.$rootScope.$emit('searchResult-changed', {
          items: this.searchItem,
          hasMore: this.hasMore
        });
      });
      // this.$music.search({q:q,type:'album,artist'},data => this.Searching = false)
    } else {
      this.offset = 0;
      this.searchItem = [];
      this.$rootScope.$emit('searchResult-changed', {
        items: this.searchItem,
        hasMore: false
      });
    }
  }

  showMore() {
    this.$rootScope.$on('showMore', () => {
      this.offset += this.limit;
      this.search(this.q, true);
    });
  }

  openDialog(id, type, image, name) {
    this.ngDialog.closeAll();
    this.ngDialog.open({
      template: `<${type} item-id="'${id}'" item-name="'${name}'" item-image="'${image}'" item-items="items" ></${type}>`,
      plain: true,
    });
  }
  $watchForDialog(){
    this.$rootScope.$on('openDialog',(evt,arg)=>{
      this.openDialog(arg.id, arg.type, arg.image, arg.name);
    });
  }
}

export default SearchController;
