//even numbers
function countEvenNumbers(num) {
    let count = 0;

    while (num != 0) {
        if (num % 2 == 0) {
            count++;
            console.log(num);
        }
        num--;
    }

    console.log("Total even numbers: " + count);
}
countEvenNumbers(10);

//leaf years
const isLeapYear = (year) => {
    if (year % 100 == 0) {
        if (year % 400 == 0) {
            console.log(year + " is a leap year !");
        } else {
            console.log(year + " is not a leap year !");
        }
    } else if (year % 4 == 0) {
        console.log(year + " is a leap year !");
    } else {
        console.log(year + " is not a leap year !");
    }
}

isLeapYear(1800);
isLeapYear(2000);
isLeapYear(2024);
isLeapYear(2023);

//palindrone

const isPalindrome = (num) => {
    let number = num;
    let rev = 0;
    let d = 0;

    while (number != 0) {
        d = number % 10;
        rev = rev * 10 + d;
        number = parseInt(number / 10);
    }

    if (num == rev) {
        console.log(num + " is palindrome !");
    } else {
        console.log(num + " is not a palindrome !");
    }
}


isPalindrome(121);
isPalindrome(123);

//current and next year leaf

const getNextLeapYear = (current_year) => {
    let next_leap_year = current_year;

    for (let found = false; !found;) {
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
};


getNextLeapYear(2196); 
getNextLeapYear(2023);  

//exponent

function power(base, exponent) {
    return Math.pow(base, exponent);
}

console.log(power(2, 4)); 


function exponent(base, power) {
    let result = 1;

    for (let i = 1; i <= power; i++) {
        result = result * base;
    }

    return result;
}
console.log(exponent(5, 4)); 



