let user1 = {
    age: 22,
    fname: "netanel",
    lname: "yaso"
}

function isAgeAbove18(userArray){
    userArray.forEach((user)=>{
        if(user.age<18){
           console.log(user.fname)
        }
        else{
            console.log(user.lname)
        }
    })
}
isAgeAbove18([user1]);

// function changeTextAndColor() {
//     let myElment = document.getElementsByClassName("elment_id");
//     for(let item of myElment){
//         item.style.color = "blue"
//         item.innerHTML = "hello"
//     console.log(item);
//   }
// }

// function someFunc(){
//     let person = {
//         firstName: "Netanel",
//         lastName: "Yaso",
//         city: "Rehovot",
//         age:34
//     }
//     for(some_key in person){
//         console.log(`${some_key} : ${person[some_key]}` );
//         document.body.innerHTML += `<div>${some_key}: ${person[some_key]}</div>`;
//     }
// }
// someFunc();

function printPersonObject(){
    let text = document.getElementById("input_id");
    let number = document.getElementById("input_number").value;
    let person = {
        firstName : text,
        lastName: text,
        age:number
    }
    for(item in person){
        p_1.innerHTML += `${item} : ${text[item]}`
        
    }
}



