//Creating my html elements
var username = document.querySelector("#username");
var email = document.querySelector("#email");
var password = document.querySelector("#password");
var btn = document.querySelector("#btn");


/* only need one fucntion, it tests if meets both conditions. A regex filter and num value if return true then it changes the window obj's url to our new html page, result.html*/
function checksAndReturnsNewPage() {
  var atLeastOneNum = /.*[0-9].*/;
  var actualPassword = 12345678;

  if(username.value, email.value, password.value == "") {
    alert("Please fill in all 3 fields");
  } else if ((parseInt(password.value) === actualPassword) && (username.value.match(atLeastOneNum)) && (email.value !== "")) {
    return window.location.href = "result.html";
  }
}


btn.addEventListener('click', function () {
  checksAndReturnsNewPage();
});
