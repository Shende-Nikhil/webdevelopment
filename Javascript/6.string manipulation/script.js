//1) reverse string
// let str = "hello";
// let revStr = "";

// for (let i = str.length - 1; i >= 0; i--) {
//     revStr += str[i];
// }

// console.log("Original String: " + str);
// console.log("Reversed String: " + revStr);

//2) unique string

// let string = "hello world";
// let uniquestring= " ";

// for ( let i=0; i<string.length; i++){
//     let ch = string [i]
//     let flag= false
//     for( let j=0; j<uniquestring.length; j++){
//         if (ch===uniquestring.charAt(j)){
//             flag = true;
//         }
//     }
//     if(!flag){
//         uniquestring+=ch
//     }
// }
// console.log(uniquestring);

//3)double  character count

// let str = "hello";
// let X = 'l';    
// let count = 0;

// for (let i = 0; i < str.length; i++) {
//   let ch = str.charAt(i);
//   if (ch === X) {
//     count++;
//   }
// }

// console.log(count); 

//4) count all character

let str = "hello world";
let uniquestr = {};

for (let i = 0; i < str.length; i++) {
    let ch = str.charAt(i); 
    uniquestr[ch] = (uniquestr[ch] || 0) + 1;
}

console.log(uniquestr);





