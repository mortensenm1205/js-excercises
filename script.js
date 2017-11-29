var fname = document.getElementById("field1");
var email = document.getElementById("field2");
var phoneNumber = document.getElementById("field3");
var btn = document.getElementById("btn");

function focusInput(event) {
  event.addEventListener('focusin', function() {
    this.style.backgroundColor = "pink";
  })
}

focusInput(fname);
focusInput(email);
focusInput(phoneNumber);
