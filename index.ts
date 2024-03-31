#! /usr/bin/env node

//shahbang

const Numberrandom =Math.floor(Math.random() * 6 + 1)
import inquirer from "inquirer";

 let answer = await inquirer.prompt([

    {
        name : "number",
        message :"please guess a number 1-6",
        type : "number",
       
       }
       ])
       
       if(answer.number === Numberrandom) {
           console.log("congratulation you guessed right num")
       } else{
           console.log("you gussed wrong number")
           console.log("the number was="+Numberrandom)
       }


       