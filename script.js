var fname = document.getElementById("field1");
var email = document.getElementById("field2");
var phoneNumber = document.getElementById("field3");
var btn = document.getElementById("btn");

function focusInput(event) {
  event.addEventListener('focusin', function() {
    this.style.backgroundColor = "pink";
  });

  event.addEventListener('focusout', function() {
    this.style.backgroundColor = "white";
  })
}

focusInput(fname);
focusInput(email);
focusInput(phoneNumber);

/*
Form Validation.
I need to write a function that checks if a form / text area is empty
IF it is then I can display an alert that says hey enter all fields
IF not then i can proceed with adding it to the p element "result".
I then need to bind this to my button.
*/
