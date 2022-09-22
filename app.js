// variable case sensitive 
var value = "hello";
console.log(value);
var Value = 15;
console.log(value);


// camel case 
var myValue = 20;
var myValueName = 20;

// data type: 2 
// - primitive
// Number, string, boolean, undefined, null 
// console.log(typeof(value));
// primitive e data/value direct variable e store hoy 

let myNumb = 5;// call by value vs call by reference

var value1; // undefined
console.log(typeof value1);

var value2 = null;
console.log(typeof value2);

console.log(value1 == value2); // true
console.log(value1 === value2); // 


// - non primitive
var myValue3 = [2,5];
console.log(typeof myValue3);
console.dir(myValue3);

// call by value or pass by value 
function square(x) {
    x = x * 2;
    return x;
}

let y = 10;
let result = square(y); 

console.log(result); // 100 
console.log(y);  // 10


// call by reference or pass by reference 
let person = {
  name: 'John',
  age: 25,
};

function increaseAge(obj) {
  obj.age += 1;
}

increaseAge(person);

console.log(person);
 