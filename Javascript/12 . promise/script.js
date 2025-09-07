//js promise
function checkAge(age) {
    return new Promise((resolve, reject) => {
        if (age >= 18) {
            setTimeout(() => {
                resolve({
                    message: "You are eligible (Promise Resolved )",
                    data: { age }
                });
            }, 2000);
        } else {
            setTimeout(() => {
                reject({
                    message: "You are not eligible (Promise Rejected )"
                });
            }, 2000);
        }
    });
}

//then and catch 

checkAge(20)
    .then((response) => {
        console.log(" Success:", response.message);
        console.log("Data:", response.data);
    })
    .catch((error) => {
        console.log(" Error:", error.message);
    })
    .finally(() => {
        console.log(" Promise Completed!");
    });

//async and await

    async function verifyAge(age) {
    try {
        const response = await checkAge(age); 
        console.log("Success:", response.message);
        console.log("Data:", response.data);
    } catch (error) {
        console.log("Error:", error.message);
    } finally {
        console.log("Promise Completed!");
    }
}

verifyAge(20);  
verifyAge(15);  