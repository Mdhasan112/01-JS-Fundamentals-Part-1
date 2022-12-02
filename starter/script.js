/*
////////////////////////////////////
// Linking a JavaScript File
let js = "Amazing";
// if (js === "Amazing") alert("javascript is FUN!");
30 + 20 + 40 - 20;
console.log(30 + 20 + 40 - 20);

////////////////////////////////////
let friendName = "Rohim Sheikh";
console.log(friendName);
console.log(friendName);
console.log(friendName);

let myFirstJob = "Teacher";
let mySecondJob = "Programmer";
console.log(mySecondJob);

let numbers = 20;
console.log(numbers);

/////////////////////////////////
//Data Types
let javaScript = true;
console.log(typeof javaScript);
console.log(typeof 20);
console.log(typeof "Raju");

//////////////////////////////////
//let, const, and var:
let age = 50;
age = 30;
console.log(age);

const birthday = 1998;
birthday = 2000;
console.log(birthday);

////////////////////////////////
//Basic Operator
//math operators
const now = 2030;
const ageNayem = now - 1998;
const ageMilon = now - 1996;
console.log(ageNayem, ageMilon);

console.log(ageNayem * 2, ageNayem / 20 ** 3);
//2**3 means 2 to the power 3 = 2 * 2 * 2;

const firstName = "md hasan";
const lastName = "khan";
console.log(firstName + " " + lastName);

//assignment operator
let x = 10 + 5; //15
x += 10; //x = x + 10
x *= 4; //x = x * 4
x++; //x = x + 1
x--; // x = x - 1s
console.log(x);

//comparison operators
console.log(ageNayem > ageMilon); //<, >, <=, >=
console.log(ageNayem <= 32);
console.log(now - ageNayem < now - ageMilon);

const now = 2030;
const ageNayem = now - 1998;
const ageMilon = now - 1996;

console.log(now - 1990 > now - 2018);

/////////////////////////////////////////
//Operator precedence
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageNayem + ageMilon) / 2;
console.log(ageNayem, ageMilon, averageAge);
*/

///////////////////////////////////////
/*
Coding Challenge #1

Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
*/

//BMI = mass / height ** 2 = mass / (height * height)

/*const markWeight = 78;
const johnWeight = 95;

const markHeight = 1.69;
const johnHeight = 1.95;

const MarkBMI = markWeight / (markHeight * markHeight);
const johnBMI = johnWeight / (johnHeight * johnHeight);
const markHigherBMI = MarkBMI > johnBMI;

console.log(MarkBMI, johnBMI, markHigherBMI)
*/

////////////////////////////////////////////
// Strings and Template Literals

/*const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1998;
const year = 2022;

const jonas = 'I am ' + firstName + ', I am a ' + job + ' my age is ' + (year - birthYear);
console.log(jonas);

const jonasNew = `I am ${firstName} , I am  ${job} ` */

/*
console.log('hello \n\
     multiple \n\
     lines')
console.log(`hello
multiple
lines`)
*/

//////////////////////////////////////
//Taking Decisions: if / else Statements
/*
const age = 19;

if (age >= 18) {
    console.log('You are perfect')
} else {
    const yourself = 20 - age;
    console.log(`you are not perfect ${yourself}`)
}
*/

/*
const number = 50;

if (number >= 33) {
    console.log('you are passed');
} else {
    console.log('you are fail');
}
*/

/*
const birthYear = 2012;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
*/

///////////////////////////////////
// Coding Challenge #2
/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 

// BMI = mass / height ** 2 = mass / (height * height)

const markWeight = 78;
const johnWeight = 95;

const markHeight = 1.69;
const johnHeight = 1.95;

const MarkBMI = markWeight / (markHeight * markHeight);
const johnBMI = johnWeight / (johnHeight * johnHeight);
const markHigherBMI = MarkBMI > johnBMI;

console.log(MarkBMI, johnBMI, markHigherBMI);

if (MarkBMI > johnBMI) {
    console.log(`Marks BMI (${MarkBMI}) is higher than john (${johnBMI})`)
} else {
    console.log(`john Bmi (${johnBMI}) is higher than Marks (${MarkBMI})`)
}
*/

//////////////////////////////////
//Type Conversion and Coercion

/*
const inputYear = '1995';
console.log(Number(inputYear) + 18)

//type coercion
console.log('I am ' + 25 + ' years old');
console.log('25' - '10' - 3);
console.log('25' + '10' + 3);
console.log('25' * 2);
console.log('25' / 2);

let n = '1' + 1;
n = n - 1;
console.log(n)
*/

////////////////////////////
// Truthy and Falsy Values
/*
// 5 falsy value: 0, '', undefined, null, NuN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;
if (money) {
    console.log("don't spend it all")
} else {
    console.log("you should get a job")
};

let height;
if (height) {
    console.log("YAY! Height is defined")
} else {
    console.log("Height is undefined")
}
*/

///////////////////////////////////////
// Equality Operators: == vs. ===
/*
const age = 25;
if (age === 25) console.log('all are perfect (strict)')
if (age == 25) console.log('all are perfect(loose)')

const favorite = Number(prompt('What is your favorite number?'));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 20) {
    console.log('wow! it is amazing')
} else if (favorite === 5) {
    console.log('5 is a cool number')
} else {
    console.log("It's not 20 or 5")
};

if (favorite !== 20) {
    console.log('why not 25?')
}
*/

/////////////////////////////////
//Logical Operators
/*
const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

if (hasDriversLicense && hasGoodVision) {
    console.log('You should drive the car');
} else {
    console.log('someone drive the car')
}

const isTired = true;
if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('You should drive the car');
} else {
    console.log('someone drive the car')
}
*/

///////////////////////////////////////
// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
/*

const dolphins = (96 + 108 + 89) / 3;
const Koalas = (88 + 91 + 110) / 3;

console.log(dolphins, Koalas);

if (dolphins > Koalas) {
    console.log('dolphins is the winner');
}
else if (Koalas > dolphins) {
    console.log('Koalas is the winner');
}
else if (dolphins === Koalas) {
    console.log('match is draw');
}
*/

/*
//Bonus
const dolphins = (96 + 108 + 89) / 3;
const Koalas = (88 + 91 + 110) / 3;

console.log(dolphins, Koalas);

if (dolphins > Koalas && dolphins >= 100) {
    console.log('dolphins is the winner');
}
else if (Koalas > dolphins && Koalas >= 100) {
    console.log('Koalas is the winner');
}
else if (dolphins === Koalas && dolphins >= 100 && Koalas >= 100) {
    console.log('match is draw');
} else {
    console.log('No one wins the trophy😭')
}
*/

///////////////////////////////////
/*
//switch statement
const day = 'tuesday';

switch (day) {
    case 'saturday': //day === saturday
        console.log('plan course structure');
        console.log('enter the result');
        break;
    case 'sunday':
        console.log('what is your name?');
        break;
    case 'monday':
        console.log('how old is you?');
        console.log('this is bd');
        break;
    case 'tuesday':
    case 'wednesday':
        console.log('i am the king');
        break;
    case 'thursday':
        console.log('half time in the work day')
    default:
        console.log('it is not a valid day')
};

or

if (day === 'saturday') {
    console.log('plan course structure');
    console.log('enter the result');
} else if (day === 'sunday') {
    console.log('what is your name?');
} else if (day === 'monday') {
    console.log('how old is you?');
    console.log('this is bd');
} else if (day === 'tuesday' || day === 'wednesday') {
    console.log('i am the king');
} else if (day === 'thursday') {
    console.log('half time in the work day')
}
else {
    console.log('it is not a invalid day')
};
*/

/*
//ternary operator

const age = 25;
// age >= 18 ? console.log('I like to drink wine') :
//     console.log('I like to drink water');

const drinks = age >= 18 ? 'Wine🍷' : 'water🥛';
console.log(drinks);

let drink2;
if (age >= 18) {
    drink2 = 'Wine'
} else {
    drink2 = 'Water'
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'Wine🍷' : 'water🥛'}`);

*/
/*
//coding challenge- 4

const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 :
    bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`)
*/
