$(function() {

  //Elements setup, through html elements
  var $imgContainer = $('#img-container');
  var $img = $('img');
  var $x = $('#x');
  var $form = $('form');
  var $name = $('#name');
  var $email = $('#email');
  var $password = $('#password');
  var $submit = $('#submit');
  var $title = $('<h1></h1>');

  //Function Setup
  function showForm() {
    return $form.show(1000);
  }

  function correctPassword(password) {
    var atLeastOneNumber = '.*[0-9].*';
    if(password.val().match(atLeastOneNumber)) {
      password.val('');
      console.log("worked");
    } else {
      console.log("Password be wrong, fix it");
    }
  }

  function correctUsername(username) {
    var atLeastOneUpperCaseLetter = '.*[A-Z].*';
    if(username.val().match(atLeastOneUpperCaseLetter)) {
      username.val('');
      console.log("this also worked");
    } else {
      console.log("Username be wrong, fix it");
    }
  }

  function correctGMail(email) {
    var gMailEnding = '.*[gmail].*';
    if(email.val().match(gMailEnding)) {
      email.val('');
      console.log("my guy it works <3");
    } else {
      console.log("Email be wrong, fix it");
    }
  }

  //Updating the elements values
  //hiding the form
  $form.hide();
  //Here's the title element I wanted to give it content, and then append all with jQ
  $title.text("Hello There! Welcome to the wonderful world of jQuery <3");
  $('body').append($title);
  //setting a value for button X but with jQ
  $x.val('✓')

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

  //Animating title to appear and then disappear AFTER it'll show form
  $title.hide();
  $title.fadeIn(4000);
  $title.fadeOut(2000, function() {
    showForm();
  });

  //A simple form validation
  $submit.click(function() {
    correctPassword($password);
    correctUsername($name);
    correctGMail($email);
  });

});
