// STEP 1: Declare and initialize a global variable (x = 1)
let x = 1;
//we haven't created myVar yet, so this will throw an error
output(myVar);
// STEP 2: Build a function that accepts no parameters, and also declares and intializes a variable within it (y = 2)
function a() {
  let y = 2;
  console.log(`x + y = ${x + y}`);
  //if we call the output function here, it will work because the function is defined in the global scope
  //but if i changed the parameter to z, it would not work because z is not defined in the global scope
  output(y);
};

// STEP 3: Build another function that also accepts no parameters, and also declares and intializes a variable within it (z = 3)
function b() {
  let z = 3;
  console.log(`x + z = ${x + z}`);
  //the same here, if i changed the parameter to y, it would not work because y is not defined in the global scope
  output(z); //we have access to z here, so output function will work
};

// STEP 4: Analyze the following function that accepts a value, then creates an H2 element, injects it into the DOM, then sets the content to the value of the parameter passed into it when in was called (invoked)
function output(value) {
  const elem = document.createElement("h2");
  document.body.appendChild(elem);
  elem.textContent = `The value of variable is ${value}`;
};

/* STEP 5: Punch the following directly into the console:
output(x)
What was the result?

output(y)
output(z)
What was the result?
*/

// STEP 6a: Add output(y); as a line inside function a(), and output(z) inside function b(), and reload the page in your browser

/* STEP 6b: Type the following directly into the console:
a()
b()
What was the result?
*/

/* STEP 6b: Swap the calls output(y); and output(z); around between the functions a() and b() in the above script, reload the page in your browser, then type the following again into your console:
a()
b()
What was the result?

Note that variables inside functions are only available inside those functions, where variables inside the main part of the script are globally accessible
*/

// Hoisting


/* STEP 7: Calling functions within functions
Bear in mind that you can call a function from within another function at any time, from anywhere in your script */

// STEP 7a: Build a primary function that declares and initializes a variable, then calls up a subfunction
function mainFunction() {
  let myValue = 1;
  subFunction(myValue);
};
// STEP 7b: Create a sub-function that logs the value of myValue to the console
function subFunction(passedinVar) {
  console.log(`myValue is: ${passedinVar}`);
};
// STEP 7c: Call up mainFunction() in your console directly after refreshing the page in the browser

// STEP 7d: The subfunction cannot access myValue - so pass myValue as a parameter into subFunction(), and update the function to accept the parameter, renaming it simply, 'value' - update the console.log() method as well, then reload the page and enter mainFunction() again in the browser
// Next, open up custom.html and we will look at how the accessibility of variables depends on where they are defined/initialized.
// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions

//hoisting used to be a feature of JavaScript that allowed you to use a variable before it was declared
//this is no longer the case, and it is best practice to declare your variables at the top of your script
var myVar = 3;
