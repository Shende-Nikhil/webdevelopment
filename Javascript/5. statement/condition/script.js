//positive and negative
let num = 5;

if (num > 0) {
    console.log(num + " is positive.");
} else if (num < 0) {
    console.log(num + " is negative.");
} else {
    console.log("The number is zero.");
}

//odd and even

let number = 14;

if (number % 2 === 0) {
    console.log(number + " is Even.");
} else {
    console.log(number + " is Odd.");
}

//nested if
let a = 50;
let b = 50;
let c = 50;
let d = 50;

if ((a >= b) && (a >= c) && (a >= d)) {
    console.log('a is greatest or equal to b, c & d:', a);
} else if ((b >= a) && (b >= c) && (b >= d)) {
    console.log('b is greatest or equal to a, c & d:', b);
} else if ((c >= a) && (c >= b) && (c >= d)) {
    console.log('c is greatest or equal to a, b & d:', c);
} else {
    console.log('d is greatest or equal to a, b & c:', d);
}



