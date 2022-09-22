# Basic to advance
#### variable case sensitive.
```javascript
console.log(value);
var Value = 15;
console.log(value);
```

#### camel case:
```javascript
var myValue = 20;
var myValueName = 20;
```


#### data type: 2 
- primitive:
Number, string, boolean, undefined, null 
console.log(typeof(value));
primitive e data/value direct variable e store hoy 
call by value vs call by reference

```javascript
let myNumb = 5; // call by value vs call by reference

var value1; // undefined
console.log(typeof value1);

var value2 = null;
console.log(typeof value2);

console.log(value1 == value2); // true
console.log(value1 === value2); // 
```
#### non primitive:
```javascript
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
```
#### call by reference or pass by reference:
```javascript 
let person = {
    name: 'John',
    age: 25,
  };
  
  function increaseAge(obj) {
    obj.age += 1;
  }
  
  increaseAge(person);
  
  console.log(person);
```
#### concatenration:
```javascript 
console.log(10+40);
console.log(10+ "hello");
console.log(10 + 20 + "hi tasmi" + 40);
```
```javascript
// typeof ekta operator 
// era always strign return kore   
console.log(typeof "hello");
console.log(typeof new Date());
```
#### type conversion:
```javascript
console.log(Number()); 
console.log(Number('')); 
console.log(Number(' ')); 
console.log(Number("34 56"));
```
```javascript
let myText = "JavaScript";
console.log(myText.substr(4));
console.log(myText.substring(4));
console.log(myText.slice(4));
```
```javascript
console.log(myText.substr(4,6));
console.log(myText.substring(4,10));
console.log(myText.slice(4,10));
```
### for minus:
```javascript
// for minus 
console.log(myText.substr(-4));
console.log(myText.substring(-4));
console.log(myText.slice(-4));
```
```javascript
console.log(myText.substring(10,4));
console.log(myText.slice(10,4));
```
#### example:
```javascript
// example:
var tasmi = "farhana.cse.bd@gmail.com";
var index = tasmi.indexOf('@');
// console.log(index);
var mystr = tasmi.substring(index+1);
console.log(mystr);

console.log(tasmi.replace('farhana','farhan'));
```
### Array:
```javascript
// array ki na
var myArray15 = [1,4,7];
var myObj15 = {
    name: "tasmi"
} 
console.log(Array.isArray(myObj15));
console.log(Array.isArray(myArray15));
```
```javascript
var myArray14 = [2,45,21];
console.log(myArray14.push(50));
console.log(myArray14);
```
```javascript
var myArray13 = [2,45,21];
var popLength = myArray13.pop();
console.log(popLength);
```
```javascript
var myArray12 = [2,45,21,56,45,67,2,5,58];
console.log(myArray12.indexOf(45));
console.log(myArray12.lastIndexOf(45));
```
```javascript

```
```javascript

```
```javascript

```
```javascript

```