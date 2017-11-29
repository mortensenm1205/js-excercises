var fname = document.getElementById("field1");
var email = document.getElementById("field2");
var phoneNumber = document.getElementById("field3");
var btn = document.getElementById("btn");
var result = document.getElementById("result");

var arrInput = [fname, email, phoneNumber]

function formValid(event) {
  if (event.value !== '') {
    result.innerHTML += event.value + ' ';
  }
  event.value = '';
}

btn.addEventListener('click', function() {
  // for(var i = 0; i < arrInput.length; i++) {
  //   formValid(arrInput[i]);
  // }
  formValid(fname);
  formValid(email);
  formValid(phoneNumber);
});

/*
Form Validation.
I need to write a function that checks if a form / text area is empty
IF it is then I can display an alert that says hey enter all fields
IF not then i can proceed with adding it to the p element "result".
I then need to bind this to my button.
*/
