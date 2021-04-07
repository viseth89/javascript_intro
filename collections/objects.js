// Objects

/* 
syntax:
let obj = {
        k1: v1,
        k2: v2
    }
    keys can be in "" but don't have to be if they are valid var names,
    i.e they don't start wtih a "number" or have invalid chars
*/

let obj1 = {
    name: 'Justin'
}

let obj2 = {
    'name': 'Amit'
}

// There are two ways the things out of objects, dot notation and square brackets

console.log(obj1.name)
console.log(obj1['name'])

let car = {
    make: 'Jeep',
    model: 'Wrangler',
    year: 2020,
    miles: 10_000,
    owners: ['Amy', 'Josh']

}

console.log(car)
console.log(car.owners[0])
console.log(car.miles)
console.log(car['miles'])

let person = {
    fName: "Viseth",
    lName: 'Sen',
    fullName: function(){
        return`${this.fName} ${this.lName}`
    },
    greet: function(greetWord){
        return `${greetWord}, ${this.fName}`
    }
}
console.log(person.fullName()) // parenthesis to call the function
console.log(person.greet("hello"))

// A Look ahead STACKS and QUEUES <= we can build 
// Stacks are LIFO
// Queues are FIFO

// This demo shows we can add new keys through assignment
let builderObj = {} // An empty obj
console.log(builderObj)
builderObj.name = "Justin"
builderObj["age"] = 28
builderObj.greet = function(greetWord){
    return `${greetWord}, ${this.name}`
}

console.log(builderObj)
console.log(builderObj.greet('Hello'))