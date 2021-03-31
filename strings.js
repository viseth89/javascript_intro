// Single line comment
console.log('This is text, and a string')
/* 

*/

console.log('this is new')
// uise this to add data into a string
let str_c = `This is a backtick quote string`
// ^ this is a template string


// Just mentiong this, we will tlak more later
let str_d = String(5)

let f_name = 'Justin'
let l_name = 'Ahmann'

// New op: unary operator that gives back type info
console.log(typeof f_name)
console.log(typeof 'What is this?')

let full_name = f_name + l_name
let template_full = `${f_name}${l_name}`
console.log(full_name)
console.log(template_full)