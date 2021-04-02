// While Loop

/* 
    keyword = while
    1 = some eval or expression that is true or false

<keyword> (<some evail or expression that is true or false>){
    // Do something
}
*/

let i = 0
while(i <= 10){
    console.log(i)
    i++
}

 for(let x=0; x<=10; x++){
    console.log(x)
}

for(let x=0; x<=10; x++){
    for(let y=0; y<=10; y++){
        console.log(x,y)
    }
}

let names = ['Justin', 'Adam', 'Kate', 'Jim', 'Amy']

for(let name in names){
    let curName = names[name]
    console.log(curName)
    if(curName == "Kate"){
        console.log('found kate')
        break;
    }
}


// Break / Continue

let counter = 0
while(counter<= 20){
    if (counter %2 === 1) {
        counter++
        continue
    } else {
        console.log(counter)
        counter++
    }
}

// use break to save time
// if there are 100 and yours is the 2nd break out 


for(let tmp=100; tmp>=0; tmp -= 5){
    console.log(tmp)
}

let tmp=100

while(tmp>=0){
    tmp-=5
    console.log(tmp)
}

