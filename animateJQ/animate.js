$(function() {

  //Elements setup, through html elements
  var $imgContainer = $('#img-container');
  var $img = $('img');
  var $x = $('#x');

  //Updating the elements values 
  //Here's the title element I wanted to create, give it content, and then append all with jQ
  var $title = $('<h1></h1>');
  $title.text("Hello There! Welcome to the wonderful world of jQuery <3");
  $('body').append($title);

  //updating the css for $title
  $title.css({
    'max-width': '1000px',
    'position': 'absolute',
    'left': '23%',
    'font-size': '4em',
    'color': 'white'
  });

  //setting a value for button X but with jQ
  $x.val('✓')
  //Same here but with imgContainer and it's position
  $imgContainer.css({
    'position': 'absolute',
    'left': '-600px'
  });

  //The main events.
  //Had to use animate since slideUp/Down changed animation after I changed my picture size
  $x.click(function() {
    if($imgContainer.css('left') == '-600px' ) {
      $x.val('X')
      $imgContainer.animate({
        left: '0px'
      });
    } else {
      $x.val('✓')
      $imgContainer.animate({
        left: '-600px'
      });
    }
  });

  //Animating title to appear and then disappear
  $title.hide();
  $title.fadeIn(4000);
  $title.fadeOut(2000);

});
