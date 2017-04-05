function anchorScroll() {
  // Usage:
  //
  // Creates:
  //
  var directive = {
    link: link,
    restrict: 'A',

  };
  return directive;

  function link(scope, element, attrs) {
    element.on('click', function () {
      $('html,body').animate({
        scrollTop: $(attrs.anchorScroll).offset().top 
      }, 1000);
    });
  }
}
export default anchorScroll;
