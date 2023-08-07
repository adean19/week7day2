//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

console.log(typeof person3.shakes)

for(let i = 0; i < Object.keys(person3).length; i++){
    
    if(Array.isArray(Object.values(person3)[i])){
        console.log(Object.keys(person3)[i] + ': ' + Object.values(person3)[i])
    } else {
        console.log(Object.keys(person3)[i])
    }
}


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
function Person(name, age) {
    this.name = name;
    this.age = age;

    // Use an arrow to create the printInfo method
    this.printInfo = function() {
        return (`My name is ${this.name} and I'm ${this.age} years old.`)
    }
    // Create another arrow function for the addAge method that takes a single parameter
    this.addAge = function(incrementBy = 1) {
    // Adding to the age 
        this.age += incrementBy
        return (`${this.name} is now ${this.age}`)
    }
}

let charlie = new Person('Charlie', 30);
let maddie = new Person('Maddie', 23);
console.log(charlie.printInfo())
console.log(maddie.printInfo())
console.log(charlie.addAge())
console.log(charlie.addAge())
console.log(charlie.addAge()) // Lines 64-66 show that the addAge method will increment by 1 by default
console.log(maddie.addAge(3)) // When a value is passed for Maddie to increment by 3, she is now 26






// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const isWordBig = (string) => {
    return new Promise( (resolve, reject) => {
        if(string.length > 10) {
            resolve(true)
        } else {
            reject(false)
        }
    })
}

isWordBig("Hello World")
.then( (result) => {
    console.log(`Big Word`)
})
.catch( (error) => {
    console.log(`Small word`)
})

isWordBig("Hi")
.then( (result) => {
    console.log(`Big Word`)
})
.catch( (error) => {
    console.log(`Small word`)
})

// =============Codewars Exercise #1 ============//
/*
In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

def find_multiples(integer, limit):
    # Your code here!
    i = integer
    multiples = []
    while i <= limit:
        if i % integer == 0:
            multiples.append(i)
        else:
            pass
        i += 1
    return multiples
*/

function find_multiples(integer, limit) {
    let i = integer
    const multiples = []
    for (let i = integer; i <= limit; i += integer) {
        multiples.push(i)
    }
    return multiples;
}

console.log(find_multiples(5, 25))

// =============Codewars Exercise #2 ============//
/*
You must implement a function that returns the difference between the largest and the smallest value in a given list / array (lst) received as the parameter.

lst contains integers, that means it may contain some negative numbers
if lst is empty or contains a single element, return 0
lst is not sorted
[1, 2, 3, 4]   //  returns 3 because 4 -   1  == 3
[1, 2, 3, -4]  //  returns 7 because 3 - (-4) == 7
Have fun!

def max_diff(lst):
   if len(lst) > 1:
    min_val = min(lst)
    max_val = max(lst)
    difference = max_val - min_val
    return difference
   else:
     return 0
*/

function difference(list) {
    let min_val = Math.min(...list)
    let max_val = Math.max(...list)
    if (list.length > 1) {
        return max_val - min_val
    } else {
        return 0
    }
}

console.log(difference([1, 2, 3, 4]))
console.log(difference([1, 2, 3, -4]))