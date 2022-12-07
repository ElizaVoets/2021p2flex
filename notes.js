// This document is meant to explain how certain codes work. You, the teacher, can either just ignore this or look around at what I have written down.

// Les 1:

    /*
    the must haves:
        - You can choose the number of players before the game starts;
        - the pawns are visible on the board;
        - You can roll the die and the current player moves;
        - The board is created in javascript at the start of the game;
        - There is one winner when 1 player reaches square 50
        - If you land on a snake head, you go down
        - If you land on the beginning of a ladder, you go up

    The Could haves:
        - Good graphics
        - Animated movement of the pawns
    */


// Les 2:

console.log("hi!");
/* This is basically python's print in JavaScript. If we were to write
print();, It would literally print your file onto paper.
You can find this in the console in the preview. (ctrl + shift + i on windows) */

let username1 = "SuFo"
//Here I have declared a variable. You either use "const" or "let". Lets send it to the console

console.log(username1);

// If you want to change the value assigned of the variable, you do this:
username1 = "Siblex"
console.log(username1);

// If you dont assign a value to ur variable, it will be undefined.

// Now a bit with functions

function sayhi() //This declares the function. If needed, you add the needed arguments between the "()"
{
    console.log("hi"); // This is the code the function executes once you run it. (Body of the function.)
}

sayhi(); //runs the function. Once again, you give the needed arguments between the "()".

// Now I will show a code with an argument between the "()":

function greetPerson(naam)
{
    console.log("Hello, "); // Displays "Hello, "
    console.log(naam);      // Displays the argument you give.
}

greetPerson("Eliza"); // Runs the function and gives the argument "naam" a value. This will print it underneath eachother.


function telOp(a, b) // Declares the function with the given arguments being 'a' and 'b'.
{
    let result = a + b; // Declares a variable with the value being the given arguments 'a' and 'b' added to eachother.
    return result;  // Returns the value of the variable 'result' to the output
}

let som = telOp(1, 1) // Makes the value of the variable be the code to run the function.
console.log(som); // displays the result in the console.

// Now we will continue with classes

class Calculator  // Here the class 'Calculator' is defined. A class collects multiple varables, properties and functions in one body. 
{
    constructor(mode) // Only gets called once when class is created
    {
        this.mode = mode; 
    }

    Add(a, b) // Declares a function with arguments
    {
        return a + b; // Sends the values of a and be added together to the console
    }

    Add1to1() 
    {
        if (this.mode == "default"){
            console.log("Mode = Default Mode")
        }
        return this.Add(1, 1);
    }
}

let calc = new Calculator("default");

let som2 = calc.Add1to1();

console.log(som2);

// Arrays:

