function myfun(){
    console.log("Avinash")
}
myfun()

function sum(num1,num2){ //paramenter
    return num1+num2;
}
console.log(sum(2,3)) //argument

//rest operator=>bundal me output deta
function cacluactecartprice(...num1){
    return num1;
}
console.log(cacluactecartprice(1))
console.log(cacluactecartprice(100,200,300))


function cacluactecartpric(val1,val2,...num1){
    return num1;
}
console.log(cacluactecartpric(100,400,500,2000))
//100 gaya val1 me aur 400 gaya val2 me
//rest array me

