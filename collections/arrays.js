// Arrays
    // -Arrays are used to store multipled values in a single variable.
    // -There are array methods that allow us to traverse, as well as mutate the data being stored within the array.
    // -Array are 0 indexed, first value will have and index of 0, and the last item will have an index of the array length - 1

let arr = ['first', 'second', 'third'];

console.log(arr[arr.length -1]);

let arr2 = Array(3);
console.log(arr2.length);

// Foreach

let boardgames = ['Monopoly', 'Sorry','Risk', 'Clue'];

boardgames.forEach(function(game) {
    console.log(game.toUpperCase)
})

// Methods

// Array.push()
// Add an element to the end of an array
let shoppingList = ['celery', 'limes', 'lemons', 'salt,', 'oranges'];

console.log(shoppingList.push('salt');
console.log(shoppingList);

let shoppingList = ['celery', 'limes', 'lemons', 'salt,', 'oranges'];

shoppingList.pop();
console.log(shoppingList)

// Array unshift()
// Adds new element to the beginning of the array
let shoppingList = ['celery', 'limes', 'lemons', 'salt,', 'oranges'];
shoppingList.unshift('salt')
console.log(shoppingList)

// array.shift
// Remove the first from element
let shoppingList = ['celery', 'limes', 'lemons', 'salt,', 'oranges'];
shoppingList.shift();
console.log(shoppingList);

/* 
Array.map()
Transforms the elements in tthe original array by calling the given function once for each element in the array


*/

let shoppingList = ['celery', 'limes', 'lemons', 'salt,', 'oranges'];
console.log(shoppingList.map((item)=> item.toUppercase()))


// Array.filter()
// Creates a new array with only the elements that pass the tes tin a given function
let shoppingList = ['celery', 'limes', 'lemons', 'salt,', 'oranges'];
console.log(shoppingList.filter(item => item.startsWith('l')))


// Array.find()
let shoppingList = ['celery', 'limes', 'lemons', 'salt,', 'oranges'];
console.log(shoppingList.find(item -> item.startsWith('l')));

let costs = [2.00, 3.00, 4.00, 5.00]
console.log(costs.reduce((acc, currentValue) => {
    return acc + currentValue
}))


costs.reduce((acc, currentValue) => {
    console.log(acc, currentValue)
    return acc + currentValue;
})

let costs2 = [1,1,1,1];
console.log(costs2);

let costs2 = [1,1,1,1,1];
console.log(costs.reduce((acc, currentValue) => {
    return acc + currentValue
}))

// Array.includes()
// Determines whether an array has a specific element
let shoppingList = ['celery', 'limes', 'lemons', 'salt,', 'oranges'];

console.log(shoppingList.includes('celery'))
// Search the array for a specific element and returns its first index, and it will return -1 if the element is not found
console.log(shoppingList.indexOf('limes'));

// Array.findIndex()
// Returns the index of the first element in an array that passes the test in a given function.  Returns -1 when the element is not found.
// Function as compared to indexof  
console.log(shoppingList.findIndex(item => item.startsWith('o')))



// Array.every()
// Checks if all elements in an array pass a test given as a function.  If there is 1 element that returns a false value, the function returns false and does not check the rest of the elements.

let shoppingList = ['celery', 'limes', 'lemons', 'salt,', 'oranges'];
console.log(shoppingList.every(item => item.startsWith('c')))


let shoppingList = ['celery', 'limes', 'lemons', 'salt,', 'oranges'];
let shoppingList2 = ['eggs', 'sugar'];

console.log(shoppingList.concat(shoppingList2))

// Array.splice()
// add/removes elements in an array and returns the removed element
// first arguement takes in an integer that specifies at what index to add/remove the elements.  Second arguement takes in the number of items to be removed.  Optional third arguement takes in the new elements to be added to the array.
let shoppingList = ['celery', 'limes', 'lemons', 'salt,', 'oranges'];
shoppingList.splice(2,1);
console.log(shoppingList);


let shoppingList = ['celery', 'limes', 'lemons', 'salt,', 'oranges'];
let arr2 = [1,2,3,4]
let values = [... shoppingList, ... arr2]
console.log(values)