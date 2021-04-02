// What is a boolean
// They are either true or false
// How can we make booleans

// x = 5 Don't do this
// var x = 5 Don't do this either
// let x = 5 When you might change
// const x = 5 When you won't change

/* 

Declaration
Initialization 

*/

let x = Boolean(5)

x = Boolean(0)
console.log(x)

let z = false
console.log(typeof z)
// How are they useful?

let result = 5>4
console.log(result)


/* 
== checks for equality

>=
>
<=
<

&& returns true if both (a && b) are true
|| return true if either (a || b) are true



*/

/* 
shift
option
a
 */

let flippedBool = !true
console.log(flippedBool)

let testResult=Boolean([1,2])
testResult = Boolean("test")
console.log(testResult)

let falseyTest = Boolean(0)

console.log('falsey')
console.log(falseyTest)


// Bonus
let boolConv = !!("teststring")

console.log(boolConv)

bang?
