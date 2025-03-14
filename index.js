function student() {
    const prompt = require("prompt-sync")();//assists in defining prompt
    let user = prompt("Please input your mark: ");
  
    user = Number(user);//convert user into number
  
    if (isNaN(user) || user < 0 || user > 100) {
      console.log("Invalid input! Please enter a number between 0 and 100.");
      return;
    }//ensures the grade is a valid input and ranges from 0 to 100
  
    if (user > 79) {
      console.log("A");
    } else if (user >= 60 && user <= 79) {
      console.log("B");
    } else if (user >= 50 && user <= 59) {
      console.log("C");
    } else if (user >= 40 && user <= 49) {
      console.log("D");
    } else {
      console.log("E");
    }
  }
  
  student();