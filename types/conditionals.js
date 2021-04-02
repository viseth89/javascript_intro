console.log('hi')

// Conditional Statements

/* 
Conditionals are used to execute a piece of code if a condition is true.  They allow our code to make decisions and carry out actions based on those decisions 

*/

// -If statement
// -Switches
// -Ternaries

// If statements

let mathResult = 2+2=== 5;
console.log(mathResult)

if(mathResult){
    console.log('This equates to true')
}

// Block Body + Else

if(mathResult){
    console.log('This equates to true');
} else {
    console.log('This equates to false')
}

// Chaining if/else statements
// else ifs allows use to provide a new condition to test if the conditions above are not met.


if(tempF > 95){
    console.log('Its Hot!');
} else if (tempF > 50) {
    console.log('It is chilly');
} else if (tempF <= 32){
    console.log('Its freezing');
} else {
    console.log('I cannot provide the weather');
}

// Testing multiple conditions

let myName = 'Viseth';
let age = 31;
if(myName === 'Viseth'){
    console.log('Name Logged');
} else if (age ===31){
    console.log('Age Logged');
}

// Switches
// Run a block of code based on different cases.

let tempF = 72;
switch(true){
    case tempF > 95:
        console.log('It is hot!');
    break;
    case tempF > 50:
        console.log("Its Warm");
        break;
    case tempF > 32:
        console.log('It is chilly!');
        break;
    case tempF <= 32:
        console.log('Its Freezing')
        break;
}


let dog = 'lab';

switch(dog){
    case 'husky':
        console.log("The husky jumped in snow");
        break;
    case 'lab':
        console.log('The lab caught the ball!');
        break;
    case 'shepherd':
        console.log('The Shepherd wagged its tail');
        break;
};

let firstName = "fdaskl";

switch(firstName){
    case 'Justin':
    case 'Amit':
        console.log("They are an instructor")
        break;
    default: console.log("They are a student");
}

// Ternaries

// Condition ? True: False

let lightSwitch = false;

lightSwitch ? console.log('Lights are on') : console.log("Lights are off");

let tempF = 55;
tempF > 95 ? console.log("Its hot!") :
tempF > 50 ? console.log("Its Warm") :
tempF > 32 ? console.log('Its Chilly!'):
tempF <= 32 ? console.log('Its freezing'):
console.log('I cannot provide the weather');