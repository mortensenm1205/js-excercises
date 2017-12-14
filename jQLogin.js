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
      //The background willl change and it will append this new text AFTER the 4000 secs are done.
      $(this).css('background-color', 'pink');
      $(this).append(function() {
        //We're creating a new el and then maniuplating it's text/style with jQ methods
        var $txt = $('<p></p>');
        $txt.text('hard coded text').css({'margin': '0', 'padding': '45% 5%', 'color': 'white', 'font-size': '24px'});
        //Anytime we have to deal with a method that only takes a callback or another value and not both then we have to return a value to the callback.
        return $txt;
      });
    });
    $(this).slideDown(4000);
  });

});
