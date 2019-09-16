/**
 * SECTION 3: How JavaScript Works Behind the Scenes
 */

 console.log(window.length);


///////////////////////////////////////
// Lecture: Hoisting


calculateAge(1965);

// let calculateAge = function(year) {
//     console.log(2019-year);
// } //this doesn't working with hoisting b/c function is var

function calculateAge(year) {
    console.log(2019-year);
}

//variables

console.log(age);
var age = 23; 

function foo() {
    console.log(age); //undefined b/c of the local scope 
    var age = 65;
    console.log(age);
}
foo(); //prints 65 b/c of the local scope
console.log(age); //prints 23





///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword









