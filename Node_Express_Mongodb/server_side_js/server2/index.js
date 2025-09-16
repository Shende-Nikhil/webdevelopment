import express from "express"
import kuchBhi from "./script.js"
import xyz from "./script2.js"

import { sum,mul } from "./script3.js"
import {g, PI } from "./script3.js"
import { doSomthing2 } from "./script3.js"
import {generate} from "random-words";
// import as

let port = 5001

let app = express()

console.log("got some data", kuchBhi);
console.log(xyz);
console.log(sum(1,2));
console.log(mul(1,2));
console.log(g,PI);
doSomthing2()
console.log(generate());


app.get("/", (req, res) => {
    res.send("got this message from backend !")
})

app.listen(port, () => {
    console.log(`server is runing on port ${port}`)
})