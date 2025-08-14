//odd numbers

for (let number1 = 0; number1 <= 1000; number1++) {
    if(number1 % 2 == 0) console.log(number1)
}

//for loop ex
for (let number = 0; number <= 10000; number++) {
    if (number % 5 === 0) {
        console.log(number);
    }
}

//factorial
// let start = 1;
// let end = 10;

// for (let i = start; i <= end; i++) {
//     if (i % 2 === 0) {
//         let fact = 1;
//         for (let num = i; num !== 0; num--) {
//             fact *= num;
//         }
//         console.log(fact);
//     }
// }

//leaf years

let start = 1500;
let end = 2025;
let count = 0;

for (let year = start; year <= end; year++) {
    if (year % 100 == 0) {
        if (year % 400 == 0) {
            count++;
            console.log(year);
        }
    } else if (year % 4 == 0) {
        count++;
        console.log(year);
    }
}

console.log("There are total " + count + " leap years in range of " + start + " to " + end + " !");

//current leaf year and next leaf year

let current_year = 2196;
let next_leap_year = current_year;

for (let found = false; !found; ) {
    next_leap_year++;
    let year = next_leap_year;

    if (year % 100 == 0) {
        if (year % 400 == 0) {
            found = true;
        }
    } else if (year % 4 == 0) {
        found = true;
    }
}

console.log(next_leap_year);

//palindrome number

let number = org_number = 123;

let rev = 0;
let d = 0;


for (let n = number; n != 0; n = parseInt(n / 10)) {
    d = n % 10;
    rev = rev * 10 + d;
}

console.log(rev);

if (org_number === rev) {
    console.log(org_number + " is palindrome!");
} else {
    console.log(org_number + " is not a palindrome!");
}




