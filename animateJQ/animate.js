$(function() {

  var $imgContainer = $('#img-container');
  var $img = $('img');
  var $x = $('#x');

  $x.val('✓')

  $imgContainer.css({'position': 'absolute', 'left': '-500px'});

  $x.click(function() {
    if($imgContainer.css('left') == '-500px' ) {
      $x.val('X')
      $imgContainer.animate({
        left: '0px'
      });
    } else {
      $x.val('✓')
      $imgContainer.animate({
        left: '-500px'
      });
    }
  });

});
