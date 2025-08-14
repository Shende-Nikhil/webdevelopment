//leaf years
let start = 1500
let org_start = start
let end = 2025

let count = 0

while (start <= end) {
    let year = start
    if (year % 100 == 0) {
        if (year % 400 == 0) {
            count++
            console.log(year)
        }
    } else if (year % 4 == 0) {
        count++
        console.log(year)
    }
    start++
}

console.log("their are total " + count + " leap year in range of " + org_start + " to " + end + " !")

//do while loop - palindrome 

let year = 2000;
let endYear = 2020;

do {
    
    let yearStr = year.toString();
    let reversed = yearStr.split('').reverse().join('');

    if (yearStr === reversed) {
        console.log(year + " is a palindrome year.");
    } else {
        console.log(year + " is not a palindrome year.");
    }

    year++;
} while (year <= endYear);



// bug fix: the program must not take 0 or NaN as input
let choice = false

do {
    let year = Number(window.prompt("enter year to check !"))

    if (year == 0 || isNaN(year)) {
        console.log("not a valid data for year. year has to greater than 0 and also should not be NaN !")
    } else {

        if (year % 100 == 0) {
            if (year % 400 == 0) {
                console.log(year + " is a leap year !")
            } else {
                console.log(year + " is not a leap year !")
            }
        } else if (year % 4 == 0) {
            console.log(year + " is a leap year !")
        } else {
            console.log(year + " is not a leap year !")
        }
    }
    choice = window.confirm("do you wish to continue yes/no")

} while (choice)