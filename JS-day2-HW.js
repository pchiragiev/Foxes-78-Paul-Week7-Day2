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

// Exercise #1
function display(person){
    for(k in person){
        console.log(`${k}: ${person[k]}`);
    }
}

// Exercise #2
function Person(name, age){
    this.name = name;
    this.age = age;

    this.printInfo = () => {
        console.log(`This is a person named ${this.name} - ${this.age} year(s) old`);
    }
    this.incr = () => {
        this.age += 1;
    }
}

let person0 = new Person("Bill", 25);
let person1 = new Person("Bob", 60);

// Exercise #3
const greaterTen = (words) => {
    return new Promise( (resolve, reject) => {
        if (words.length > 10){
            resolve(words)
        } else {
            reject(words)
        }
    })
}

let ok = greaterTen('one two three')
.then(
    (result) => {console.log("Big word")}
)
.catch(
    (result) => {console.log("Small Number")}
);

// Output
console.log(display(person3));
person0.printInfo();
person1.printInfo();
person1.incr();
person1.incr();
person1.incr();
person1.printInfo();
console.log(ok);