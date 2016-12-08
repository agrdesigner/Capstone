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
    // prevents from refreshing the page
    event.preventDefault();
    

    if ($('.response').length === 0) {
      form.append("<h4 class='response'>We'll get back to you shortly!</h4>");
    }

  });





});
