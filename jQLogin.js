$(function() {

  $('body').hide().css('max-heigth', '1100px');
  $('body').fadeIn(4000, function() {
    $('p:nth-child(3), p:nth-child(2)').fadeOut(4000);
  });

  var $circle = $('#circle');
  $circle.css({'background-color': 'dodgerblue', 'border-radius': '250px', 'height': '250px', 'width': '250px', 'padding': '0'});

  $('body').append($circle);

  $circle.click(function() {
    $(this).slideUp(4000, function() {
      $(this).css('background-color', 'pink');
      $(this).append(function() {
        var $txt = $('<p></p>');
        $txt.text('hard coded text').css({'margin': '0', 'padding': '45% 5%', 'color': 'white', 'font-size': '24px'});
        return $txt;
      });
    });
    $(this).slideDown(4000);
  });

});
