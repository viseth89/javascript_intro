// Hoisting

const add2 = (x, y) => { // Arrow functions don't get hoisted
    return x+y
}


console.log(
    add2(2,5),
    adder(2,5)
)



function adder(x,y){ // function can be defined after the call
    return x+y
}

/* 
runs through the first time and defines

without it 
*/