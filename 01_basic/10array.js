const arr=[0,1,2,3,4,5]
//ye colletio of multuple object hain
//avaScript arrays are resizable and can contain a mix of different data types
console.log(arr[0])

//Shallow copy =>  jo chnage karogr wh orignal me bi change hoga
const arr2=new Array(1,2,3,4)
console.log(arr2[1])
//Method of array

arr.push(6) //add element in last
arr.pop() // back se element delete hoga
console.log(arr)
arr.unshift(7) //aage se element add hoga
console.log(arr)
arr.shift()
console.log(arr)//age se element delete hoga
console.log(arr.includes(9)) //false
console.log(arr.indexOf(3)) //2



//slice and splice

console.log("A ",arr)
const myn1=arr.slice(1,3)
console.log(myn1) //last vala include nahi krta
console.log("B ",arr);

const myn2=arr.splice(1,3)
console.log(myn2)
//splice me last vala include hota hain
console.log("C ",arr)

//slice and splice me ek merange include hota hain ek me nhi hota
//slice m original array me koe change nhi hota and splice me original array me se wh part remove ho jata hain
//means splice me splice vala portion nikal jata hain

const a=["Avi","akhi"]
const b=["ra","mu"]
// a.push(b)
// console.log(a)
// console.log(a[2][1]) //mu

const c=a.concat(b)
console.log(c) //dono array ko merge kareg durse array me

//spred operator
const all=[...a,...b]
console.log(all)

console.log(Array.isArray("avi"))
console.log(Array.from("avi"))//['a','v','i']


let s1=100
let s2=200
let s3=300
console.log(Array.of(s1,s2,s3))
//[100,200,300]

