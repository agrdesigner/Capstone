$(function() {

  $('.site-main').slick({
    centerMode: true,
    variableWidth: true
  });

  var sidebar = $('.navigation').sidebar({ side:'right'});

  $('.fa-bars').on('click', function(){
    sidebar.trigger('sidebar:toggle');
  });


});
