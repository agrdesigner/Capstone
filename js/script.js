$(function() {

  // Site-main Carousel

  $('.site-main').slick({
    centerMode: true,
    variableWidth: true
  });

  // Sidebar

  var sidebar = $('.navigation').sidebar({ side:'right'});

  $('.fa-bars').on('click', function(){
    sidebar.trigger('sidebar:toggle');
  });

  // Animations

  // Form Validation


});
