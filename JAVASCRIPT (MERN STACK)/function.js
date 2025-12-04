console.log(a);
//hoisting example
var a = 10;
//global scope / function scope
console.log(a);

//let and const
//console.log(b);
//reference error
//temporal dead zone
let b = 20;
b = 130;
//Block scope
console.log(b);

//{
// let b= 30;
// console.log(b);
//}

const c = 40;

console.log(c);




//function
// 1.Named function
//function declaration
function namedFunc() {
    console.log("Named function called");
}

//function call
namedFunc();
//function
// 2. Function Expression

let funcExp = function(){ 
    console.log("function expression called");
};

funcExp();

//3. Arrow Function()
let arrow = () => {
    console.log("Arrow Function Called");
};

arrow();

//4. IIFE (Immediately Invoked Function Expression)
(() => {
    console.log("IIFE function called");
})();

const addTwoNumbers = (parameter1 = 10, parameter2 = 20) => {
    let sum = parameter1 + parameter2;
    console.log("The sum of two numbers:", sum);
};

addTwoNumbers(20, 50);
addTwoNumbers(40, 50);
addTwoNumbers();

//5. Function with parameters
function calculateSum(parameter1 = 10, parameter2 = 20) {
    let sum = parameter1 + parameter2;
    console.log("Sum:", sum);
}

calculateSum(20, 50);
calculateSum(40, 50);
calculateSum();

let a1 = 10;
let b1 = 2;
console.log(a1+b1);

let a2 = "10";
let b2 = 2;
console.log(a2+b2);

let a3 = "10";
let b3 = 2;
console.log(a3-b3);

let a4 = 10;
let b4 = "2";
console.log(a4/b4);

console.log(2 == "2");

let c = [1, 2, 3, "ace"];
let d = [1, 2, 3, "ace"];
console.log(JSON.stringify(c) === JSON.stringify(d));

// for loop
let arr = [1, 2, 3, 4, 5];
for(let i=0; i<arr.length;i++){
    arr[i] = arr[i]+1;
}
console.log(arr);

let arr1 = [1,2,3,4,5];
//forEach
arr1.forEach((Element, index) => {
    console.log(Element, index);
});

let arr2 = [1,2,3,4,5];
//let as = arr.map((el, ind) => {
 //   return el + ind;
//});

let as = arr2.map((el, ind) => el+ind);
console.log(arr2);
console.log(as);

//filter it will work on Truthy values
let b = arr2.filter((el, index) => {
    return index > 4;
});
console.log(b);

//reduce return as a single value
let c = arr2.reduce((acc, el, index) => {
    console.log(acc, el);

    return acc + el;
}, 200);
console.log(c);



