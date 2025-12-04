// Q1
function createArray(arg1, arg2, arg3) {
    return [arg1, arg2, arg3];
}
console.log("Q1:", createArray(10, 20, 30));

// Q2
function stringOnly(...args) {
    return args.filter(arg => typeof arg === 'string');
}
console.log("Q2:", stringOnly("hello", 123, "world", true, "test"));

// Q3
function squareNumbers(...args) {
    return args.map(num => num * num);
}
console.log("Q3:", squareNumbers(2, 3, 4));

// Q4
function getEvenNumbers(...args) {
    return args.filter(num => num % 2 === 0);
}
console.log("Q4:", getEvenNumbers(1, 2, 3, 4, 5, 6));

// Q5
function collectNames(...args) {
    return args.map(name => name.toUpperCase());
}
console.log("Q5:", collectNames("sid", "raj"));

// Q6
function makeUser(name, age, city) {
    return [{ name, age, city }];
}
console.log("Q6:", makeUser("Sid", 22, "Delhi"));

// Q7
function addTen(...args) {
    return args.filter(arg => typeof arg === 'number').map(num => num + 10);
}
console.log("Q7:", addTen(5, "hello", 10, true, 15));

// Q8
function createFruitArray(...args) {
    return args.length === 0 ? ["apple", "banana"] : args;
}
console.log("Q8a:", createFruitArray());
console.log("Q8b:", createFruitArray("orange", "mango"));
