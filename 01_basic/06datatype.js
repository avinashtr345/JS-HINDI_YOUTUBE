// Two type of datatype in js :primitive and Non primitive
//primitive(7type) => number,boolean,string,null,undefined,symbol,Bigint
//Non-Premitive => array,object,Function

const s=100;
const st=100.3

const islogin=false
const ouytside=null
let useremail;

const id=Symbol('123')
const anotherid=Symbol('123')
console.log(id===anotherid) //false

const bignum=123334344n

const heros=["ski","hh","se"]
let myobj={
    name:"avi",
    age:22
}
console.log(myobj)

const myfun=function(){
console.log("hek=loo world");
}
console.log(typeof(bignum))

