// Set date of birth
let myDob = new Date("2004-09-25");
console.log("DOB in milliseconds:", myDob.getTime());

// Get today's date
let today = new Date();
console.log("Today in milliseconds:", today.getTime());

// Difference in milliseconds
let difference = today.getTime() - myDob.getTime();
console.log("Difference in milliseconds:", difference);

// Convert milliseconds to days
let days = Math.floor(difference / (1000 * 60 * 60 * 24));
console.log("Total days:", days);

// Convert days to years
let years = Math.floor(days / 365);
console.log("Years:", years);

// Calculate remaining days after years
let remainingDays = days % 365;
console.log("Remaining days:", remainingDays);

// Display age
console.log(`You are ${years} years and ${remainingDays} days old`);
