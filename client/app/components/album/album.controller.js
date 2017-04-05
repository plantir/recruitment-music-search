class AlbumController {
  constructor($music) {
    "ngInject";
    this.$music = $music;
    this.tracks = [];
    this.limit = 20;
    this.offset = 0;
    this.hasMore = false;
  }

  getTracks() {
    this.$music.album({
      id: this.id,
      limit: this.limit,
      offset: this.offset
    }, (data) => {
      this.tracks = this.tracks.concat(data.items);
      this.hasMore = data.next ? true : false;
    });
  }

  showMore() {
    this.offset += this.limit;
    this.getTracks();
  }

  $onInit() {
    this.getTracks();
  }
}

export default AlbumController;
