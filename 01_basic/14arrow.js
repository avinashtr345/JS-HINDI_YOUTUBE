const user={
    username: "avi",
    price:999,
    welcome:function(){
        console.log(`${this.username}, welcome to website`)
     console.log(this)
    }
}
user.welcome()
user.username="Avinash"
user.welcome()
console.log(this) //{}


// function chai(){
//     let user1="hiteh"
//     console.log(this.user1)
//     //undefind
// }
// chai()

// const chai=function(){
//     let user1="hiteh"
//     console.log(this.user1)
//     //undefind
// }
// chai()

const chai=()=>{  //arrow function
    let user1="hiteh"
    console.log(this.user1)
    //undefind
}
chai()

//expliciate jb return lgta hain
const addtwo=(num1,num2)=>{
    return num1+num2;
}
console.log(addtwo(2,3))



//implited return used in react
const adtwo=(num1,num2)=>num1+num2;
console.log(addtwo(2,3))








