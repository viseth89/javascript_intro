// name(data) => data out
// f(x) = x*x //str function

/* 
Way One:
<keyword> <functionName>(<what I need to work>){
    // What I do
    return <something> // What I want to give back
}

*/
// Two ways to write a function in js

function sqr(x){
    return x*x
}

console.log(sqr(5))

// Fat Arrow Function or Lambda in other languages
let aSqr=(x) => {
    return x*x //explicit return
}

let bSqr =(x) => x*x

let cSqr = x=> x*x //implicit return
// let cSqr = x, y=> x*x // two variables will not work

function greet(){
    console.log('Hello world')
}

function betterGreet(fName){
    console.log('Hello ' + fName)
}

betterGreet('V')


let createFullName = (fName, lName) => `${fName} ${lName}` //Template string

let createFullName = (fName, lName) => {
    return `${fName} ${lName}` //Template string
}

let fullName= createFullName('Viseth', 'Sen')

console.log(fullName)