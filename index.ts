#! /usr/bin/env node1
import inquirer from "inquirer"
// 1) computer will generate a number
// 2) User input guessing number
// 3) compare user input with computer generated number and show result.

const randomNumber = Math.floor(Math.random()*5+1)
console.log(randomNumber);


const answer = await inquirer.prompt([
    {
      name: "userGuessedNumber",
      type: "number",
      message: "please guess a number between 1-5:",
      },

    
   ]);
   if (answer.userGuessedNumber === randomNumber){
    console.log("congratulation! you guess right number");
   
   }
   else{
     console.log("you guess roung number");
}