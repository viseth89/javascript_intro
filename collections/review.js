// Say you have a list of numbers and you want 2 arrays
// one with evens

let demoArr = []
for(let i =1; i<=100;i++){
    demoArr.push(i)
}

let checkEven = (num) => {
    return num % 2 === 0
}


console.log(demoArr.filter(elem => elem % 2 == 0)) // filter takes a call back
// this is a function that will be used by the filter method

let conciseSqr = x => x*x // {} - concise body, implicit return



console.log(demoArr)

let splitArr =[]
for(let i =1; i<=100;i++){
    if ( i % 2 == 0) {
        splitArr.push(i)
    } else {
        splitArr.unshift(i)
    }
}
console.log(splitArr)


// for(let curNum of splitArr){
//     console.log(curNum)
// }

// for(let curNum in splitArr){
//     console.log(splitArr[curNum])
// }

splitArr.forEach((x) => console.log(x))




// Function Review

let checkEven = (num) => {
    return num % 2 === 0
}

let sqr = (x) => {
    return x*x
} // {} - block body, you have to explicitly 'return' what you want to give back'



