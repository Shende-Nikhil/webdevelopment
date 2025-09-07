function divide(a, b) {
    try {
        if (b === 0) {
            throw new Error("Division by zero is not allowed!");
        }
        console.log("Result:", a / b);
    } catch (error) {
        console.log("Error:", error.message);
    }
}

divide(10, 2); 
divide(10, 0); 
