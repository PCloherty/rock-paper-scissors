import React from 'react'; 
import './App.css';
import RPSV2 from "./v2files/v2component.js"

export default class RPSUI extends React.Component {
    render(){
        return(
        <RPSV2></RPSV2>
        )
    }
}



//     constructor() {
//         super()
//         this.state = {
//             bScore: 0,
//             uScore: 0,
//             bChoice: "",
//             uChoice: ""
//         };
//     }

//     userChoice(e) {
//         let bot = botSetup()//external function for the bot choice
//         this.setState({ bChoice : bot })
//         if (e.target === document.getElementById('rock')) {
//             this.setState({
//                 uChoice: "Rock"
//             })
//         } else if (e.target === document.getElementById('paper')) {
//             this.setState({
//                 uChoice:"Paper"
            
//             })
//         } else if (e.target === document.getElementById('scissors')) {
//             this.setState({
//                 uChoice:"Scissors"
//             })
//         };
//         this.setState({
            
//         });
//     }
//     render() {
//         return (
//             <>

//             //-------------------------------------------------------
//             <button type='button' id="startReset" onLoad={RPSCapsule} onClick={RPSCapsule}>Start/Reset</button>
//             <button type='button' id="rock" className="selection" onClick={RPS} >Rock </button>
//             <button type='button' id="paper" className="selection" onClick={RPS}>Paper </button>
//             <button type='button' id="scissors" className="selection" onClick={RPS}>Scissors </button>
//             <div className="scoreBoard">
//                 <p id="yourScore">0</p>
//                 <p>:</p>
//                 <p id="botScore">0</p>
//             </div>
//             <p>You chose: <span id='yourChoice'></span></p> <br />
//             <p>Machine chose: <span id='machine'></span> </p> <br />
//             <br />
//             <p id="result">Result: </p>
// //--------------------------------------------------------------
// </>
//         );}}





// //reset scrores
//  function RPSCapsule() {
//     let clearUScore = document.getElementById('yourScore')
//     let clearBScore = document.getElementById('botScore')

//     // let botScore = document.getElementById('botScore');
//     clearUScore.innerHTML = 0;
//     clearBScore.innerHTML = 0;
// }

// function maxScore() {
//     let clearUScore = document.getElementById('yourScore')
//     let clearBScore = document.getElementById('botScore')
//     if (clearUScore.innerHTML >= 5 ||
//         clearBScore.innerHTML >= 5) {
//         RPSCapsule();
//     }

// }


// //game
//  function RPS(e) {
//     let userChoice = '';
//     let terminator = '';
//     let choices = ['rock', 'paper', 'scissors'];

// function botSetup(){
//     //random number generator for the bot
//     let randomN = Math.random();
//     let range = Math.floor(randomN * 3);
//     //allocating the index number to the array
//     terminator = choices[range];
// }
//     //printing the option of the bot to the screen
//     document.getElementById('machine').innerHTML = terminator;

//     //User Related functions
//     //allocating the index number to the array
   
//     //printing the choice of the user
//     document.getElementById('yourChoice').innerHTML = userChoice;


//     //outcomes of the choice combinations
//     let result = document.getElementById('result');
//     if (userChoice === 'rock' && terminator === 'rock') {
//         result.innerHTML = 'Draw';
//     } else if (userChoice === 'rock' && terminator === 'scissors') {
//         result.innerHTML = 'rock beats scissors';
//         win();
//     } else if (userChoice === 'rock' && terminator === 'paper') {
//         result.innerHTML = 'rock loses to paper';
//         lose();
//     } else if (userChoice === 'paper' && terminator === 'rock') {
//         result.innerHTML = 'paper beats rock';
//         win();
//     } else if (userChoice === 'paper' && terminator === 'paper') {
//         result.innerHTML = 'Draw';
//     } else if (userChoice === 'paper' && terminator === 'scissors') {
//         result.innerHTML = 'Paper loses to scissors';
//         lose();
//     } else if (userChoice === 'scissors' && terminator === 'rock') {
//         result.innerHTML = 'scissors loses to rock';
//         lose();
//     } else if (userChoice === 'scissors' && terminator === 'paper') {
//         result.innerHTML = 'scissors beats paper';
//         win();
//     } else if (userChoice === 'scissors' && terminator === 'scissors') {
//         result.innerHTML = 'Draw';


//     }
// }

// //additional functions
// function win() {
//     let i = Number(document.getElementById('yourScore').innerHTML);
//     i++;
//     document.getElementById('yourScore').innerHTML = i;
//     maxScore();

// }
// function lose() {
//     let i = Number(document.getElementById('botScore').innerHTML);
//     i++;
//     document.getElementById('botScore').innerHTML = i;
//     maxScore();
// }
