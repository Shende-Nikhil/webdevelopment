const sum = (a, b) => a+b;
const mul =(a, b)=> a*b;
const g = 9.8;
const PI = 3.14;
function doSomthing() {
    console.log("doing something !")
}

// named export
export { sum,mul}
export { g, PI }
export function doSomthing2() {
    console.log("doing someting 2 !")
}




