//FOR OF
const arr=[1,2,3,4,5]
for(const num of arr){
    console.log(num)
}
const greet="Hello World"
for(const g of greet){
    console.log(`this is ${g}`)
}

//Map

const map1 = new Map();

map1.set("a", 1);
map1.set("b", 2);
map1.set("c", 3);

console.log(map1.get("a"));
// Expected output: 1

map1.set("a", 97);

console.log(map1.get("a"));
// Expected output: 97

console.log(map1.size);
// Expected output: 3

map1.delete("b");

console.log(map1.size);
// Expected output: 2

console.log(map1)

for(const [key,value] of map1){
    console.log(key,'-',value)
}

const myobj={
    'game1':'NFS',
    'game2':'spiderman'
}
for(const key in myobj){
    console.log(key)
}
