		/* STEP 1: Declare variables
		Use a-z, 0-9, A-Z and underscores, avoiding reserved names
		All program variables are generally declared at the beginning */
    let myName; // you can declare but not initialize it off the bat
    let myAge;

		/* STEP 2: Initialize variables
		Don't confuse a variable with no value with one that doesn't exist at all */
    myName = "Isaac";
    myAge = 49;

    const myJob = "professor"; //there no reason why you can't initialize and declare it
    //if we have something fixed then use const
    //if you suspect it may change later, use let.
    //in const you must set a value (initialize it)

		/* STEP 3: Updating variable    let modelOfCar = 'carss';s
		Once a variable has been declared, this can be done any time */
    //myJob = "pilot";
    myAge = 53;
    myName = "Craig";

		// STEP 4: Variable types (use typeof in the console)
		// Numbers
    let numberOfCars = 5;
    let manufacturer = "Honda"; //there is also string interpolation
    let typeCar = `2005 ${manufacturer}`; // this is string interpolation
    console.log(typeCar);
		// Strings (use '' or "")
    // you can backtick, single quote or double quote
		
    // Booleans
    let iAmTired = true;
		// Arrays
    //arrays are objects
	  let myNameArray = ["Scott", "Jarret", "Steve"];	
    let myNumArray = [2, 4, 6, 8];
    let myMixedArray = ["Scott", 52, false, myNumArray]; //you can put an array inside an array
		// Objects
    let myDog = {
      //name value pairs
      name: "rufus",
      breed: "retriever", 
      size: "large", 
      age: 7
    }
		// STEP 5: Typing (JavaScript is a loosely-typed language)
    console.log(typeof(myDog));
