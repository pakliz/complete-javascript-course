//console.log('Hello World!!!');

/*
let firstName = 'John';
console.log(firstName);
let lastName = 'Smith';
let age = 28;
let fullAge = true;
console.log(fullAge);
let job;
console.log(job);
job = "Teacher";
console.log(job);


let firstName = 'John';
let age = 28;

console.log(firstName + " " + age); //type coercion

let job, isMarried;
job = 'teacher';
isMarried = false;
console.log(firstName + ' is a ' + age + ' ' + job + '. Is he married? ' + isMarried);

//variable mutation
age = 'twenty eight';
job = 'driver';

//alert(firstName + ' is a ' + age + ' ' + job + '. Is he married? ' + isMarried);

//prompt can prompt the users last name
let lastName = prompt('what is his last name?');
console.log(firstName + ' ' + lastName);

*/

//Basic Operators, typeof
// console.log(typeof "john");
// console.log(typeof false);
// console.log(typeof 28);

//operator precedence
// let now = 2018;
// let yearJohn = 1989;
// let fullAge = 18; 

// let isFullAge = now - yearJohn >= fullAge;
// console.log(isFullAge);

// let marksMass = prompt("Please enter Mark's mass " );
// let marksHeight = prompt ("please enter Mark's height ")
// let johnsMass = prompt("Please enter John's mass " );
// let johsHeight = prompt("Please enter John's height " );

// let marksBMI = marksMass / (marksHeight * marksHeight);
// let johnsBMI = johnsMass / (johsHeight * johsHeight);

// let marksBMIHigher = marksBMI > johnsBMI; 
// //console.log("Is Mark's BMI higher than John's? " + marksBMIHigher);

// if (marksBMI > johnsBMI) {
//     console.log("Mark's BMI is greater than John's");
// }
// else {
//     console.log("John's BMI is greater than Mark's");
// }


let firstName = 'John';
let civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName +  ' will hopefully marry soon :)');
}

let job = 'instructor';
switch(job) {

    case 'teacher': 
    case 'instructor':
        console.log(firstName + ' is a teaches kids');
        break;
    case 'driver':
        console.log(firstName + ' drivers an Uber');
        break;
    case 'designer':
        console.log(firstName + ' designs websites');
        break;
    default:
        console.log(firstName + ' does something else');
}       

let age = 40; 
switch(true){
    case age < 13: 
        console.log(firstName + ' is a boy')
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager');
        break;
    case age >=20 && age < 30:
        console.log(firstName + ' is a young man');
        break;
    default:
        console.log(firstName + ' is a man');
}

//truthy and falsy values

let height = 23;
if (height == '23') {
    console.log("The == operator does type coercion");
}

//coding challenge 2

// let teamJohnAverage = (89 + 120 + 103) / 3;
// let teamMikeAverage = (116 + 94 + 123) / 3;
// let teamMaryAverage = (97 + 134 + 105) / 3;

// if(teamJohnAverage > teamMikeAverage && teamJohnAverage > teamMaryAverage) {
//     console.log("John has the highest average: " + teamJohnAverage);
// }
// else if(teamMikeAverage > teamJohnAverage && teamMikeAverage > teamMaryAverage) {
//     console.log("Mike has the highest average: " + teamMikeAverage);
// }
// else if (teamMaryAverage > teamJohnAverage && teamMaryAverage > teamMikeAverage ) {
//     console.log("Mary has the highest average: " + teamMaryAverage);
// }
// else {
//     console.log("There's a draw");
// }


// function calculateAge (birthYear) {
//     return 2018 - birthYear; 
// }

// let ageJohn = calculateAge(1900); 
// console.log(ageJohn);

// let john = ['John', 'Smith', 1990, 'teacher'];
// john.unshift('Mr');
// john.push('blue');
// john.pop();
// console.log(john);

//coding challenge 3

let billArray = [124, 48, 268];
let tipArray = [];
let paidArray = [];
let emtpyArray = [];

let tipCalculator = function(bill) {

    if(bill < 50) {
        return bill * .2; 
    }
    else if (bill >= 50 && bill <= 200) {
        return bill * .15;
    }
    else if (bill > 200) {
        return bill * .1;
    }

}

let tip = 0;

tip = tipCalculator(124);
tipArray.push(tip);
paidArray.push(tip + 124)

tip = tipCalculator(48);
tipArray.push(tip);
paidArray.push(tip + 48)

tip = tipCalculator(268);
tipArray.push(tip);
paidArray.push(tip + 268);
// let tip = tipCalculator(124);
// tipArray[billArray.indexOf(124)] = tip;
// paidArray[billArray.indexOf(124)] = tip + 124;
// emtpyArray.push(tip);
// console.log("tip: " + tip); 

// tip = tipCalculator(48);
// tipArray[billArray.indexOf(48)] = tip;
// paidArray[billArray.indexOf(48)] = tip + 48;
// console.log("tip: " + tip); 

// tip = tipCalculator(268);
// tipArray[billArray.indexOf(268)] = tip;
// paidArray[billArray.indexOf(268)] = tip + 268;
// console.log("tip: " + tip); 

console.log('tipArray: ' + tipArray);
console.log('paidArray: ' + paidArray);
//console.log('emptyArray: ' + emtpyArray)

//Objects and Properties
//object literal
// let john = {
//     //key:value pair 
//     //property of john
//     firstName: 'John',
//     lastName: 'Smith',
//     birthYear: 1990,
//     family: ['Jane', 'Mark', 'Bob', 'Emily'],
//     job: 'teacher',
//     isMariied: false
// };  //end john object
// console.log(john);

// console.log(john.firstName);
// let x = 'birthYear';
// console.log(john[x]);

// john.job = 'designer';
// john['isMarried'] = true;
// //console.log(john);

// let logToConsole = function(john) {
//     console.log("logToConsole => "); // + john doesn't work
//     console.log( john);
// };

// logToConsole(john);

//new object syntax
// let jane = new Object();
// jane.name = 'Jane';
// jane.birthYear = 1969;
// jane['lastName'] = 'Smith';
// console.log(jane);

//26. Objects and Methods

// let john = {
//     //key:value pair 
//     //property of john
//     firstName: 'John',
//     lastName: 'Smith',
//     birthYear: 1992,
//     family: ['Jane', 'Mark', 'Bob', 'Emily'],
//     job: 'teacher',
//     isMariied: false, 
//     calculateAge: function(birthYear) {
//         return 2019 - this.birthYear;
//         //this.age = 2019 - this.birthYear;
//     }
// }; 
// console.log(john.calculateAge());

//27. Coding Challenge 4

let CodingChallenge4 = function(markMass, markHeight, johnMass, johnHeight) {

    console.log("======= CODING CHALLENGE 4 =======");

    //calculateBMI method
    let calculateBMI = function(mass, height) {
        //BMI = mass / (height * height)
        return mass / (height * height);
    };

    let compareBMI = function(object1, object2) {
        if( object1.BMI > object2.BMI) {
            console.log(object1.fullName + " BMI is greater.");
        }
        else if (object2.BMI > object1.BMI) {
            console.log(object2.fullName + " BMI is greater.");
        }
        else { //BMIs are equal
            console.log(object1.fullName 
                + " and " + object2.fullName 
                + " BMIs are equal.");
        }
    };
    // Mark Object
    let Mark = new Object();
    Mark.fullName = "Mark";
    Mark.mass = markMass;
    Mark.height = markHeight
    Mark.BMI = calculateBMI(Mark.mass, Mark.height);

    //John Object literal
    let John = {
        fullName: "John",
        mass: johnMass,
        height: johnHeight,
        BMI: calculateBMI(johnMass, johnHeight)
    }

    console.log(Mark);
    console.log(John);
    compareBMI(Mark, John);
};

//OUTPUT

//CodingChallenge4(180, 2, 80, 2);

// 29. Loops and Iteration

for(let i=0; i < 10; i++) {
    console.log(i);
}

let john = ['John', 'Smith', 1990, 'designer', false];
for(let i = 0; i < john.length; i++){
    
    if(typeof john[i] !== 'string')continue;
    //console.log(john[i]);
    
} 

for(let i =john.length -1; i >=0; i--){
    console.log(john[i]);
}

let i = 0;
while (i < john.length) {
    //console.log(john[i]);
    i++;
}

// define the function
let CodingChallege5 = function(bill_john, bill_mark) {

    let tipCalculator = function(bill, rule) {

        switch(rule) {

            case 'john':
                if(bill < 50) {
                    return bill * .2; 
                }
                else if (bill >= 50 && bill <= 200) {
                    return bill * .15;
                }
                else if (bill > 200) {
                    return bill * .1;
                }
            break;

            case 'mark':
                    if(bill < 100) {
                        return bill * .2; 
                    }
                    else if (bill >= 100 && bill < 300) {
                        return bill * .10;
                    }
                    else if (bill > 300) {
                        return bill * .25;
                    } 
        }
    }

    let calculateAll = function(bill, rule){

        let Paid = new Object();
        Paid.tipsArray = [];
        Paid.totalPaid = [];

        for(let i=0; i < bill.length; i++) {
            Paid.tipsArray[i] = tipCalculator(bill[i], rule);
            Paid.totalPaid[i] = bill[i] + Paid.tipsArray[i];
        }
        console.log("tips: " + Paid.tipsArray);
        console.log("total paid: " + Paid.totalPaid);

        return Paid;
    }

    let calculateTipAverage = function(tips) {
        let sum = 0;
        for(let i = 0; i < tips.length; i++) {
            sum += tips[i];
        }
        return (sum / (tips.length));
    }

    let John = new Object();
    John.Paid = calculateAll(bill_john, "john");
    John.tipsAverage = calculateTipAverage(John.Paid.tipsArray);

    let Mark = new Object();
    Mark.Paid = calculateAll(bill_mark, "mark");
    Mark.tipsAverage = calculateTipAverage(Mark.Paid.tipsArray);

    console.log(John.tipsAverage, Mark.tipsAverage);
    console.log(JSON.stringify(Mark)); ///// *****

    if(Mark.tipsAverage > John.tipsAverage) {
        console.log("Mark's family paid higher tips");
    }
    else if(Mark.tipsAverage < John.tipsAverage) {
        console.log("John's family paid higher tips");
    }
    else {
        console.log("Both Mark and John paid the same amount in tips");
    }


//end of CodingChallenge5
};

//call the function
CodingChallege5([124,48,268,180,42], [77,475,110,45]);


