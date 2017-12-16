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

  function displayImage(btn, container) {
    btn.click(function() {
      if(container.css('left') == '-600px' ) {
        btn.val('X')
        container.animate({
          left: '0px'
        });
      } else {
        btn.val('✓')
        container.animate({
          left: '-600px'
        });
      }
    });
  }

  function showForm() {
    return $form.show(1000);
  }

  function correctPassword(password) {
    var atLeastOneNumber = '.*[0-9].*';
    if(password.val().match(atLeastOneNumber)) {
      password.val('');
      console.log("worked");
      return true;
    } else {
      console.log("Password be wrong, fix it");
      return false;
    }
  }

  function correctUsername(username) {
    var atLeastOneUpperCaseLetter = '.*[A-Z].*';
    if(username.val().match(atLeastOneUpperCaseLetter)) {
      username.val('');
      console.log("this also worked");
      return true;
    } else {
      console.log("Username be wrong, fix it");
      return false;
    }
  }

  function correctGMail(email) {
    var gMailEnding = '.*[gmail].*';
    if(email.val().match(gMailEnding)) {
      email.val('');
      console.log("my guy it works <3");
      return true;
    } else {
      console.log("Email be wrong, fix it");
      return false;
    }
  }

  //Updating the elements values
  //hiding the form
  $form.hide();
  //Here's the title element I wanted to give it content, and then append all with jQ
  $title.text("Hello There! Welcome to the wonderful world of jQuery <3");
  $('body').append($title);
  //Hidding x button
  $x.hide();
  //setting a value for button X but with jQ
  $x.val('✓')

  //The main events.
  //Animating title to appear and then disappear AFTER it'll show form
  $title.hide();
  $title.fadeIn(4000);
  $title.fadeOut(2000, function() {
    showForm();
  });

  //A simple form validation
  $submit.click(function() {
    if(correctPassword($password) && correctUsername($name) && correctGMail($email)) {
      $form.hide();
      $x.show(1000);
      displayImage($x, $imgContainer);
    } else {
      alert("Please fill in all forms correctly to enter");
    }
  });
  
});
