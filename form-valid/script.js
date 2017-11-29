var fname = document.getElementById("field1");
var email = document.getElementById("field2");
var phoneNumber = document.getElementById("field3");
var btn = document.getElementById("btn");
var result = document.getElementById("result");

var arrInput = [fname, email, phoneNumber]

function formValid(event) {
  if (event.value !== '') {
    var p = document.createElement('p');
    p.innerHTML += event.value + ' ';
    result.appendChild(p);
  }
  event.value = '';
}

btn.addEventListener('click', function() {
  if (arrInput[0].value === '' && arrInput[1].value === '' && arrInput[2].value === '') {
    alert('Please fill in all fields');
  }

  for(var i = 0; i < arrInput.length; i++) {
      formValid(arrInput[i]);
  }
  // formValid(fname);
  // formValid(email);
  // formValid(phoneNumber);
});
