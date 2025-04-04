const name="heloo"
const rep= 40
console.log(name+rep+"value");

console.log(`heloo my name is ${name} and repo count is ${rep}`);
const gamename=new String('avinash')
console.log(gamename[0]);
console.log(gamename[1]);
console.log(gamename[2]);
console.log(gamename.length)
console.log(gamename.toUpperCase())
console.log(gamename.charAt(2))//i
console.log(gamename.indexOf('i')) //2

const s=gamename.substring(0,3) //lastvala 3 include nhi hoga
console.log(s) //avi


const a=gamename.slice(-5,4)
console.log(a)



const s1= "     hitesh  "
console.log(s1)
console.log(s1.trim())//space remove krta hain

const url="https://hitesh.com"
console.log(url.replace('https','heloo'))

console.log(url.includes('hitesh'));

console.log(gamename.split('i'))
