// Javascript Sorting Array

// Alpabetic Sort

// sorting an array
const fruits = ["Banana", "Orange", "Mango", "Apple"];
fruits.sort();
console.log(fruits);


// reversing an array

const fruitOne = ["Banana", "Orange", "Apple", "Mango"];
fruitOne.reverse();
fruitOne.sort();
console.log(fruitOne)

// ES6 method

const months = ["Jan", "Feb", "March", "April"];
const reversed = months.toReversed();
console.log(reversed)

const monthss = ["Jan","Feb", "March","April"];
const sorted = monthss.toSorted();
console.log(sorted)

// another try

const names = ["Avi", "Shiva", "Sudip"];
const sort = names.toSorted();
console.log(sort)

// Numeric Sort

const points = [40,10,20,22,34,44];
points.sort(function(a,b){return a- b});
console.log(points)


const numbers = [10,22,33,22,334];
numbers.sort(function(a,b){return b -a});
console.log(numbers)


// Sorting with DOM

const point = [1,2,3,4,22,33,44,10];
document.getElementById("demo").innerHTML = point;

function myFunction(){
    point.sort();
    document.getElementById("demo").innerHTML = point;
}
function myFunction1() {
    point.sort(function(a, b){ return a - b});
    document.getElementById("demo").innerHTML = point;
}

console.log(point)
console.log(point)