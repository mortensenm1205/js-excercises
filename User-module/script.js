(function(exports) {

  function User() {
    var privateName;
    var privateAge;

    this.setName = function(name) {
      privateName = name;
    };

    this.getName = function() {
      return privateName;
    };

    this.setAge = function(age) {
      privateAge = age;
    };

    this.getAge = function() {
      return privateAge;
    };

    this.createUser = function() {
      this.setName(inputName.value);
      this.setAge(inputAge.value);
    };

    this.displayUser = function() {
      return result.innerHTML +=
        "<p> Name: " + this.getName() + "</p>" +
        "<p> Age: " + this.getAge() + "</p>";
    };
  }

  User.prototype.userList = function() {
    return this;
  };

  exports.User = User;

})(this);

var user = new User;
var inputName = document.querySelector("#name");
var inputAge = document.querySelector("#age");
var btn = document.querySelector("#btn");
var result = document.querySelector("#result");


// function createUser() {
//   user.setName(inputName.value);
//   user.setAge(inputAge.value);
// }

// function displayUser() {
//   return result.innerHTML +=
//     "<p> Name: " + user.getName() + "</p>" +
//     "<p> Age: " + user.getAge() + "</p>";
// }
//
// function userList() {
//   return user;
// }

btn.addEventListener("click", function () {
  user.createUser();
  user.displayUser();
  console.log(user.userList());
});
