class ArtistController {
  constructor($music,$rootScope) {

    "ngInject";
    this.$rootScope = $rootScope;
    this.$music = $music;
    this.albums = [];
    this.limit = 20;
    this.offset = 0;
    this.hasMore = false;
  }

  getAlbums() {
    this.$music.artist({
      id: this.id,
      type: 'single,album',
      limit: this.limit,
      offset: this.offset
    }, (data) => {
      this.albums = this.albums.concat(data.items);
      this.hasMore = data.next ? true : false;
    });
  }

  showMore() {
    this.offset += this.limit;
    this.getAlbums();
  }

  openDialog(id, type, image, name) {
    this.$rootScope.$emit('openDialog', {
      id: id,
      type: type,
      image: image,
      name: name
    });
  }

  $onInit() {
    this.getAlbums();
  }
}

export default ArtistController;
