// For .. in Loop
/* 
legend:
    keyword = 'for;
    var = sometemp word you use to refer to the current item
    iterable = some collection you want to go through ex... Array or Obj or String

<keyword>(<var> in <iterable>){
    //Do something
}
*/
let person = {
    name: 'Justin',
    age: 28
}

for(let property in person){
    console.log(property)
    console.log(person[property])
}

let randomNums = [1, 4, 65, 235, 23, 235, 54]
for(let rand in randomNums){

}

let fullName = 'Viseth Sen'
for (let letterID in fullName){
    console.log(letterID)
    console.log(fullName[letterID])
}