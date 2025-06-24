// console.log("Hello World")


// let age =parseInt(prompt("Enter your age"))
// if(age<18){
//     console.log("you are not eligible for license ")
// }
// else {
//     console.log("you are eligible for license")
// }



// let age=parseInt(prompt("Enter your age "))
// if(age<18){
//     console.log("You are green")
// }
// else if(age<5){
//     console.log("you are red ")
// }
// else{
//     console.log("you are black ")
// }



// for (let index = 0; index < 5; index++) {
//     console.log(index);

// }



// const clj={
//     name :"Bharat",
//     course: "Btech",
//     passing_year:" 2027"
// }
// for (let key in clj) {
//     console.log(`${key},${clj[key]}`) 
// }


// const fruits=['apple','Banana','Mango'];
// for (const element of fruits) {
//     console.log(element)

// }

// let i=0
// while(i<9){
//     console.log(i)
// }

// let i=0;
// do{
//     i++;
//     console.log(i)
// }while(i<8);

// function sum(a,b){
//     console.log(a+b);
// }
// sum(5,6)


// const age = (e)=>{
//  console.log("I am",e," years old");
// }
// age(18)

// console.log("Playing with JavaScript Strings");
// let user = "Bharat";
// console.log("User:", user);
// console.log("Characters:");
// console.log(user[0], user[1], user[2], user[3], user[4], user[5]);
// console.log("Length of user name:", user.length);
// let companion = "Arya";
// console.log(`His name is ${user} and his companion's name is ${companion}`);
// let city = "Meerut";
// console.log("Uppercase:", city.toUpperCase());
// console.log("Lowercase:", city.toLowerCase());
// console.log("Length:", city.length);
// console.log("Slice (1,4):", city.slice(1, 4));
// console.log("Slice (2):", city.slice(2));
// console.log("Replace 'ee' with 'oo':", city.replace("ee", "oo"));
// console.log("Concatenated info:", city.concat(" is home to ", user, " and ", companion));


// console.log("JavaScript Array Magic");
// let scores = [10, 25, 30, 45, 5, 60];
// console.log("Original scores:", scores);
// console.log("Total elements:", scores.length);
// console.log("Fourth score:", scores[3]);
// let squaredScores = scores.map((score) => score ** 2);
// console.log("Squared scores:", squaredScores);
// const aboveThousand = (num) => num > 1000;
// console.log("Scores > 1000:", squaredScores.filter(aboveThousand));
// let smallNumbers = [2, 4, 6, 8];
// const sumReducer = (a, b) => a + b;
// console.log("Sum of smallNumbers:", smallNumbers.reduce(sumReducer));
// let countdown = [5, 4, 3, 2, 1];
// const productReducer = (a, b) => a * b;
// console.log("Product of countdown:", countdown.reduce(productReducer));


// function greet(name, callback) {
//     console.log("Hello, " + name + "!");
//     callback();
// }
// function afterGreeting() {
//     console.log("Greeting completed.");
// }
// function displayDate() {
//     const today = new Date().toLocaleDateString();
//     console.log("Today's date is:", today);
// }
// greet("Bharat", function () {
//     afterGreeting();
//     displayDate();
// });


// const fetchData = new Promise((resolve, reject) => {
//     const isSuccessful = Math.random() > 0.4;
//     console.log(" Processing...");
//     setTimeout(() => {
//         if (isSuccessful) {
//             resolve("Data fetched successfully!");
//         } else {
//             reject(" Failed to fetch data.");
//         }
//     }, 2000);
// });
// fetchData
//     .then((message) => {
//         console.log("Success:", message);
//     })
//     .catch((error) => {
//         console.error("Error:", error);
//     });
