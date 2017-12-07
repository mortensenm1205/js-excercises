//setting up my html elements
var result = document.querySelector("#result");
var input = document.querySelector("#input");


/*creating an event listener that listens for keypresses. For each press in the text field, it updates the inner html of reult. */
input.addEventListener("keypress", function() {
      return result.innerHTML = input.value;
})
