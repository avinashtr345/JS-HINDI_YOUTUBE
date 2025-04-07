//singleton
//object literals
const jsuser={
    name:"avinash",
    age:18,
    location:"gkp",
    email:"avi@gmail.com",
    islooged:false,
    lastloggedin:["mon","sat"]
}
console.log(jsuser.email)
console.log(jsuser["email"])

let s1=100
let s2=200
let s3=300
console.log(jsuser)
jsuser.greeting=function (){
console.log("hello js users")
}
console.log(jsuser.greeting())


const tider=new Object() //singlaton object
console.log(tider);

const a={} //non singlaton object
console.log(a)
a.id="123"
a.name="avi"
a.islog=false
console.log(a)

const target = { a: 1, b: 2 };
const source = { d: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);


//Object.freeze()
//The Object.freeze() static method freezes an object. Freezing an object prevents extensions and makes existing properties non-writable and non-configurable. 
// A frozen object can no longer be changed: new properties cannot be added, existing properties cannot be removed
const obj = {
    prop: 42,
  };  
  Object.freeze(obj); 
  obj.prop = 33;
console.log(obj.prop); //42



const cource={
  courcename:"js in hindi",
  price:"499",
  courcinsturot:"avi"
}
const{ courcinsturot}=cource
console.log(courcinsturot)


//API

// {
//   "name":"avi",
//   "courcename": "js in hidni",
//   "price" : "free"
// }

