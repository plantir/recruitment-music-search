class SearchItemController {

  constructor(ngDialog, $rootScope) {
    "ngInject";
    this.$rootScope = $rootScope;
    this.ngDialog = ngDialog;



  }

  openDialog(id, type, image, name) {

    this.$rootScope.$emit('openDialog', {
      id: id,
      type: type,
      image: image,
      name: name
    });
    // this.ngDialog.open({
    //   template: `<${type} item-id="'${id}'" item-name="'${name}'" item-image="'${image}'" item-items="items" ></${type}>`,
    //   plain: true,
    // });
  }



}

export default SearchItemController;
