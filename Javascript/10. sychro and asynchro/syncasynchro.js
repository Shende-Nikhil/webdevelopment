// Synchronous Example
function calculateAverageSync(numbers) {
    let sum = 0;
    for (let num of numbers) {
        sum += num;
    }
    return sum / numbers.length;
}

console.log("Start Synchronous");
let result = calculateAverageSync([10, 20, 30, 40, 50]);
console.log("Average:", result);
console.log("End Synchronous");

// Asynchronous Example
function calculateAverageAsync(numbers) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let sum = 0;
            for (let num of numbers) {
                sum += num;
            }
            resolve(sum / numbers.length);
        }, 2000); 
    });
}

console.log("Start Asynchronous");
calculateAverageAsync([10, 20, 30, 40, 50])
    .then((avg) => console.log("Average:", avg));
console.log("End Asynchronous");
