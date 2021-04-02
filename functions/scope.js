// Let Const Var .... others
let x = 5
const favNum = 42 // const can't be reassigned
favNum2 = 50

var z = 10 // For now these are =
y = 5 // and should I say =ly bad
x = 9 //x is being reassigned <- this is fine

// Scope

if(true){ // this is a code block
    let x =8 // x in here is not the x on line 2
    console.log(x)
}

if(true){ // this is a code block
    var xy =100 // x in here is not the x on line 2
    console.log(xy)
}
console.log(x)
console.log(xy)

for(var i = 0; i < 10; i++){
    console.log(i)
}

console.log('this is ' + i)