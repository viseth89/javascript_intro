// For .. of loop

/* 
legend:
    keyword = 'for'
    var = some temp word you use to refer to the current item
    collection = some collection you want to go through ex... Array or Obj or String

*/

let person = {
    name: 'Justin',
    age: 28
}

for(let entry of Object.entries(person)){
    console.log(entry)
}