const output = document.querySelector('#output');

/* STEP 1: Instead of a constructor function, let's try a JavaScript class called 'Coffee' */
class Coffee{
  //Class properties
  size; //these are our properties, starts to look more like c#
  isDecaf;
  //Class constructor
  constructor(size, isDecaf){
    this.size = size;
    this.isDecaf = isDecaf;
  };
  //class Methods
  serveIt(){ //Step 3
    // Create an IMG element (the img tag is now floating out in space)
    const cup = document.createElement("img");
    // set image path
    let cupImage = "images/coffee-cup.svg";
    // Determine if coffee is decaf
    let decaf;
    if(this.isDecaf === true){
      // grab the green coffee cup image
      // if its true override andd change it
      cupImage = "images/coffee-cup-green.svg";
      decaf = "decaffeinated";
    } else{
      decaf = "caffeinated";
    }
    // set src Attribute
    cup.setAttribute("src", cupImage);
    // Set the size of the IMG according to coffee size
    let cupSize;
    switch(this.size){
      case "small":
          cupSize = "100";
          break;
      case "medium":
          cupSize = "125";
          break;
      case "large":
          cupSize = "150";
          break;
      case "extralarge":
          cupSize = "200";
          break;
      default:
        cupSize = "125";
    };
    //because cupsize has a switch statement
    cup.setAttribute("height", cupSize);
    // Set the title of the IMG element to be a description
    let description = `A ${this.size} ${decaf} coffee`;
    cup.setAttribute("title", description);
    // Insert IMG of coffee cup into page
    output.appendChild(cup);
  }
};

/* STEP 2: Instantiate a coffee based on the above constructor function */
//similar process here, created an object, said i wanted small and no decaf
let isaacsCoffee = new Coffee("small", false);
let kareemsCoffee = new Coffee("extralarge", true);
let stervsCoffee = new Coffee("large", false);
/* STEP 3: Add a method to the Coffee class called serveIt() */

/* STEP 4: Call up the serveIt() method */
  // in the console, type isaacsCoffee.serveIt() to call the method 
  // you can do isaacsCoffee["size"] it will show small

/* STEP 5: Define a subclass of the Coffee class */
//we are inheriting class from the coffee class
class Latte extends Coffee {
  //class properties
  milkType;
  //Class constructor
  // we still need size and decaf but we also can add milkType
  constructor(size, isDecaf, milkType){
    super(size, isDecaf) //refers to the constructor from where its derived from (Coffee)
    this.milkType = milkType;
  };
  // Class Methods
  latteDesc(){
    alert(`A ${this.size} ${this.isDecaf ? "decaffeinated" : "caffeinated"} latte with steamed ${this.milkType} milk.`);
  }
}
/* STEP 6: Create a new instance of the Latte object */
let isaacsLatte = new Latte("medium", false, "almond");

/* STEP 7: Call up the latteDesc() method for the above created Latte instance */

/* STEP 8: Create yet another instance of Latte using the console, and try the latteDesc() method from the subclass, as well as the serveIt() method from the parent class */
// in the console I can do => sarahsLatte = new Latte("extralarge", true, "oat")
// and then do sarahsLatte.serveIt()
// sarahsLatte.latteDesc() => alert => extra large decaffeinated oat milk

// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Classes_in_JavaScript

// Special thanks to https://openclipart.org/detail/293550/coffee-to-go for the very cool coffee cup SVG
