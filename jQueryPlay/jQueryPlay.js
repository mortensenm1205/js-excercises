$(function() {

  // $('body').click(function() {
  //   $(this).fadeOut(3000, function() {
  //     if($(this).css('display') == 'none') {
  //       console.log($(this));
  //     };
  //   });
  // });

  // $('#greeting').fadeOut(4000, function() {
  //   $('body').append($(this));
  //   $(this).fadeIn(4000);
  // });

  // $('body').click(function() {;
  //   $(this).prepend(function() {
  // 	   return $("<h1>Some</h1>").slideDown();
  //   });
  // });

  $('#img').click(function() {
    $(this).slideUp(4000);
    // $('body').prepend(function() {
    //   return $(this).slideDown(500, function() {
    //     return $(this).css('width', '3000px;');
    //   });
    // });
    $(this).slideDown(4000);
  });

  $('#nestedContainer').click(function() {
    $(this).slideUp(5000);
    $(this).slideDown(5000, function() {
      var $newElement = $('<h1>Body</h1>');
      $(this).append($newElement);
    });

  });

})
