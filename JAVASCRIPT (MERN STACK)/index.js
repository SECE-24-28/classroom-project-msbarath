let b = arr.map((name) => {
    return name.username;
});

console.log(b);

let c = arr.filter((el) => {
    // console.log(el);

    return el.id%2 == 0;
})
.map((el) => el.name)
.join("");
console.log(c);