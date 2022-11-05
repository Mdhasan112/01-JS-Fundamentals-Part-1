// let js = "Amazing";
// // if (js === "Amazing") alert("javascript is FUN!");
// 30 + 20 + 40 - 20;
// console.log(30 + 20 + 40 - 20);

// let friendName = "Rohim Sheikh";
// console.log(friendName);
// console.log(friendName);
// console.log(friendName);

// let myFirstJob = "Teacher";
// let mySecondJob = "Programmer";
// console.log(mySecondJob);

// let numbers = 20;
// console.log(numbers);

// let javaScript = true;
// console.log(typeof javaScript);
// console.log(typeof 20);
// console.log(typeof "Raju");

// //var/let/const:
// let age = 50;
// age = 30;
// console.log(age);

// const birthday = 1998;
// birthday = 2000;
// console.log(birthday);


//math operators
// const now = 2030;
// const ageNayem = now - 1998;
// const ageMilon = now - 1996;
// console.log(ageNayem, ageMilon);

// console.log(ageNayem * 2, ageNayem / 20 ** 3)
// //2**3 means 2 to the power 3 = 2 * 2 * 2;

// const firstName = "md hasan";
// const lastName = "khan";
// console.log(firstName + ' ' + lastName);

// //assignment operator
// let x = 10 + 5; //15
// x += 10; //x = x + 10
// x *= 4; //x = x * 4
// x++;//x = x + 1
// x--; // x = x - 1s
// console.log(x);

// //comparison operators
// console.log(ageNayem > ageMilon) //<, >, <=, >=
// console.log(ageNayem <= 32);
// console.log(now - ageNayem < now - ageMilon);


// const now = 2030;
// const ageNayem = now - 1998;
// const ageMilon = now - 1996;

// console.log(now - 1990 > now - 2018);

// const averageAge = (ageNayem + ageMilon) / 2;
// console.log(ageNayem, ageMilon, averageAge);

//assignment:

// BMI = mass / height ** 2 = mass / (height * height)

/*const markWeight = 78;
const johnWeight = 95;

const markHeight = 1.69;
const johnHeight = 1.95;

const MarkBMI = markWeight / (markHeight * markHeight);
const johnBMI = johnWeight / (johnHeight * johnHeight);
const markHigherBMI = MarkBMI > johnBMI;

console.log(MarkBMI, johnBMI, markHigherBMI)
*/

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

/*
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

/*
//type conversion
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

/*
//Logical Operators

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

/*
//test-3
const dolphins = (96 + 108 + 89) / 3;
const kaolas = (88 + 91 + 110) / 3;

console.log(dolphins, kaolas);

if (dolphins > kaolas) {
    console.log('dolphins is the winner');
}
else if (kaolas > dolphins) {
    console.log('kaolas is the winner');
}
else if (dolphins === kaolas) {
    console.log('match is draw');
}
*/

/*
//Bonus
const dolphins = (96 + 108 + 89) / 3;
const kaolas = (88 + 91 + 110) / 3;

console.log(dolphins, kaolas);

if (dolphins > kaolas && dolphins >= 100) {
    console.log('dolphins is the winner');
}
else if (kaolas > dolphins && kaolas >= 100) {
    console.log('kaolas is the winner');
}
else if (dolphins === kaolas && dolphins >= 100 && kaolas >= 100) {
    console.log('match is draw');
} else {
    console.log('No one wins the thophy😭')
}
*/

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