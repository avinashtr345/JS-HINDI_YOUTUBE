//FOR LOOP

for(let i=0;i<=10;i++){
    const elem=i;
    console.log(elem)
}
//console.log(elem)

let n = 0;
let x = 0;
while (n < 3) {
  n++;
  x += n;
}
console.log(x)

//breaki and continue

for(let i=0;i<=10;i++){
    if(i==5){
        continue;
    }
    console.log(i)
}

for(let i=0;i<=10;i++){
    if(i==5){
        break;
    }
    console.log(i)
}