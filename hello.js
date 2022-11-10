// console.log("hello world");

// const x = "Hello";
// const y = "Siliguri";
// const z = "chai peelo"

// console.log(x+' '+ y + ' '+ z);

// const x = 3;
// const y = 5;
// const z = 8
// if(x > y) or (x > z) {
//     console.log("X is badhe bhaiya");

// elief(y > x) or (y > z) {
//     console.log("y is badhae bhaya");

// } else {
//     console.log("X is chote bhai");
// }

const cowsay = require("cowsay");
console.log(
  cowsay.say({
    text: "Siiguri is hot",
    e: "aa",
    T: "b",

  })
);
const oneLinerJoke = require("one-liner-joke");
const getRandomJoke = oneLinerJoke.getRandomJoke({
    'exclude_tags': ['dirty', 'racist', 'sex']
  });
console.log(getRandomJoke);