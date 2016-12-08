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

  // Form Response

  var form = $('div.form');
  var $submit = $('.submit');

  $submit.on('click', function(event){
    event.preventDefault();
    form.innerHTML("<h4>Hello World!</h4>");
  });


});
