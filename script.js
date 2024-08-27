// let u1 = document.getElementById("userOne");
// let u2 = document.getElementById("userTwo");
// let u3 = document.getElementById("userThree");

// let Guessshow = document.getElementById("GuessNum");
// let u1ans = document.getElementById("Uone");
// let u2ans = document.getElementById("Utwo");
// let u3ans = document.getElementById("Uthree");

// let randomNum = Math.ceil(Math.random() * 100);

// let balance1 = 500;
// let balance2 = 500;
// let balance3 = 500;

// function onCheck(){
//     let user1 = parseInt(u1.value);
//     let user2 = parseInt(u2.value);
//     let user3 = parseInt(u3.value);
    
//     Guessshow.textContent = "The number is: " + randomNum;
//     if(user1 === randomNum && user2 === randomNum && user3 === randomNum){
//         balance1 += 100;
//         balance2 += 100;
//         balance3 += 100;
//         u1ans.textContent = balance1;
//         u2ans.textContent = balance2;
//         u3ans.textContent = balance3;
//     }

//     else if(user1 !== randomNum && user2 === randomNum && user3 === randomNum){
//         balance1 -= 100;
//         balance2 += 100;
//         balance3 += 100;
//         u1ans.textContent = balance1;
//         u2ans.textContent = balance2;
//         u3ans.textContent = balance3;
//     }

//     else if(user1 === randomNum && user2 !== randomNum && user3 === randomNum){
//         balance1 += 100;
//         balance2 -= 100;
//         balance3 += 100;
//         u1ans.textContent = balance1;
//         u2ans.textContent = balance2;
//         u3ans.textContent = balance3;
//     }
    
//     else if(user1 === randomNum && user2 === randomNum && user3 !== randomNum){
//         balance1 += 100;
//         balance2 += 100;
//         balance3 -= 100;
//         u1ans.textContent = balance1;
//         u2ans.textContent = balance2;
//         u3ans.textContent = balance3;
//     }

//     else if(user1 !== randomNum && user2 !== randomNum && user3 === randomNum){
//         balance1 -= 100;
//         balance2 -= 100;
//         balance3 += 100;
//         u1ans.textContent = balance1;
//         u2ans.textContent = balance2;
//         u3ans.textContent = balance3;
//     }

//     else if(user1 === randomNum && user2 !== randomNum && user3 !== randomNum){
//         balance1 += 100;
//         balance2 -= 100;
//         balance3 -= 100;
//         u1ans.textContent = balance1;
//         u2ans.textContent = balance2;
//         u3ans.textContent = balance3;
//     }

//     else{
//         balance1 -= 100;
//         balance2 -= 100;
//         balance3 -= 100;
//         u1ans.textContent = balance1;
//         u2ans.textContent = balance2;
//         u3ans.textContent = balance3;
//     }
    
// }

// console.log(randomNum);

// function onRest(){
//     randomNum = Math.ceil(Math.random() * 100);
//     u1.value = "";
//     u2.value = "";
//     u3.value = "";
// }

let users = [
    { input: document.getElementById("userOne"), balance: 500, answer: document.getElementById("Uone") },
    { input: document.getElementById("userTwo"), balance: 500, answer: document.getElementById("Utwo") },
    { input: document.getElementById("userThree"), balance: 500, answer: document.getElementById("Uthree") }
  ];
  
  let Guessshow = document.getElementById("GuessNum");
  let randomNum = Math.ceil(Math.random() * 100);
  
  console.log("Random Number:", randomNum); 
  
  function onCheck() {
    Guessshow.textContent = "The number is: " + randomNum;
    users.forEach((user) => {
      let guess = parseInt(user.input.value);
      if (guess === randomNum) {
        user.balance += 100;
      } else {
        user.balance -= 100;
      }
      user.answer.textContent = user.balance;
    });
  }
  
  function onRest() {
    randomNum = Math.ceil(Math.random() * 100);
    console.log("New Random Number:", randomNum); 
    users.forEach((user) => {
      user.input.value = "";
    });
  }