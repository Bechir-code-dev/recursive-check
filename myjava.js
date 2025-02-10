//leap year
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
const year = parseInt(prompt("Enter a year:"));
if (isLeapYear(year)) {
    console.log(`${year} is a leap year.`);
} 
else {
    console.log(`${year} is not a leap year.`);
}

// ticketprice
function getTicketPrice(age) {
    if (age <= 12) {
        return 10;
    } else if (age >= 13 && age <= 17) {
        return 15;
    } else {
        return 20;
    }
}

const age = parseInt(prompt("Enter your age:"));
console.log(`The ticket price is $${getTicketPrice(age)}.`);

//fibonacci
function fibonacciJS(n) {
    if (n <= 0) return 0;
    if (n === 1) return 1;
    return fibonacciJS(n - 1) + fibonacciJS(n - 2);
}
console.log(fibonacciJS(10));


//power function
function powerN(base, expo) {
    // ay haja 9owet 0 tatla3 1 w ntakeha ala jnab
    if (expo === 0) {
        return 1;
    }
    else if (expo > 0) {
        return base * powerN(base, expo - 1);
    }
    // hedhi negative 9owa yebda wehed rkik 
    else {
        return 1 / powerN(base, -expo);
    }
}
let result = powerN(2, 2); 
console.log(result);  