let mydate=new Date()
console.log(mydate.toString())
console.log(mydate.toDateString())
console.log(mydate.toLocaleString())//date and time print
console.log(typeof mydate)

let mycreateddate=new Date(2023,0,23)
console.log(mycreateddate.toDateString())//mon jan 23 2023

let a=new Date("01-4-2003")
console.log(a.toDateString())//mon jan 23 2023



let b = Date.now();
console.log(b);             // prints timestamp in milliseconds
// b is a number, not a Date object, so b.getTime() will throw an error

let bDate = new Date();
console.log(bDate.getTime());  // correct way to get current time in ms using Date object
//mon jan 23 2023

console.log(Date.now())
// agar second me convert krna hain to
console.log(Math.floor(Date.now()/1000))

let x=new Date();
console.log(x)
console.log(x.getDay())
console.log(x.getMonth()+1)
