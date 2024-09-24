let strings = "bla bla bla"
let numbers = 2341
let boolean = true
let arrays = [1, 43, 2, 3, 2, 12, 17,74]
let objecter = {
    name: "per harald borgen",
    age: 23,
    isAlive: true
}


let isAlive = true
let navn = "per harald borgen"

navn

if (objecter.isAlive === true) {
    console.log("yippee!") 
} else if (objecter.isAlive === false) {
    console.log("ded")
} else {
    console.log("U dont exist")
}
let i = 0

// while (i < arrays.length) {
//    console.log(arrays[i])
//    i++
//}

function greeting() {
    console.log("hei og velkommen. " + objecter.name + "!")
}


let counter = 0
console.log(counter)
function count() {
    counter++
    console.log(counter)
}
function countDown() {
    if (counter > 0) {
        counter--   
    }
    console.log(counter)
}

let num1 = 5
let num2 = 5
let sum = num1 + num2
//console.log(sum)

