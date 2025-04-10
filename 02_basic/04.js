const fruits = ["apple", "orange", "cherry"];

fruits. forEach((item)=>{
    console.log(item)
})


var sum = 0;
const numbers = [65, 44, 12, 4];
numbers.forEach(myFunction);

function myFunction(item) {
  sum += item;
}
console.log(sum)

//FILTER

const mynum=[1,2,3,4,5,6,7,8,9,10]
const newnum=mynum.filter((num)=>{
    return num>4
})
console.log(newnum)

//map

const arr1=[1,2,3,4,5,7,8]
const a=arr1.map((num)=>num+10)
console.log(a)

//REDUCE

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);
// Expected output: 10
