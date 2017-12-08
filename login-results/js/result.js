//setting up my html elements
var result = document.querySelector("#result");
var input = document.querySelector("#input");
var btn1 = document.querySelector("#btn1");
var btn2 = document.querySelector("#btn2");
var circle = document.querySelector("#circle");


/*creating an event listener that listens for keypresses. For each press in the text field, it updates the inner html of reult. */
input.addEventListener("keypress", function() {
      return result.innerHTML = input.value;
})

//Here we are adding value to btn2 based on btn1 click. We also change the value back to restart the event
btn1.addEventListener("click", function() {
  if (btn1.value === "Click Me") {
    btn2.value = "Hey you were suppossed to click me!"
  } else {
    btn1.value = "Click Me";
    btn2.value = "Hey you were suppossed to click me!"
  }


})

//We do the same here with btn2 to btn1 but now if you click on btn2 Click me after btn1 value has changed, then it resets the program.
btn2.addEventListener("click", function() {
  if (btn2.value === "Hey you were suppossed to click me!") {
    btn1.value = "Now you need to click me!";
    btn2.value = "Click Me";
  } else {
    btn1.value = "Click Me";
    btn2.value = "Click Me"
  }
})

//simple alert pops up when user hovers with mouse
circle.addEventListener("mouseover", function() {
  alert("Hey I said don't HOVER!");
})
