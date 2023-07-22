let score = JSON.parse(localStorage.getItem('score')) ||  {
    wins : 0,
    losses: 0,
    ties : 0
  };

  // function 
 updateScoreElement();


// if(score === null){
//   score = {
//     wins : 0,
//     losses: 0,
//     ties : 0
//   };
// }

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = "";

  if (playerMove === "rock") {
    if (computerMove === "rock") {
      result = "Tie.";
    } else if (computerMove === "paper") {
      result = "Lose.";
    } else if (computer === "scissor") {
      result = "Win.";
    }
  } else if (playerMove === "paper") {
    if (computerMove === "rock") {
      result = "Win.";
    } else if (computerMove === "paper") {
      result = "Tie.";
    } else if (computer === "scissor") {
      result = "Lose.";
    }
  } else if (playerMove === "scissor") {
    if (computerMove === "rock") {
      result = "Lose.";
    } else if (computerMove === "paper") {
      result = "Win.";
    } else if (computer === "scissor") {
      result = "Tie.";
    }
  }

  if (result === "Win.") {
    score.wins += 1;
  } else if (result === "Lose.") {
    score.losses += 1;
  } else if (result === "Tie.") {
    score.ties += 1;
  }

  // using local storage
  // converting javascrript to json by JSON.stringhy() used
  localStorage.setItem("score", JSON.stringify(score));

 document.querySelector('.js-result').innerHTML= result

 document.querySelector('.js-moves').innerHTML=`You 
 <img src="images/${playerMove}-emoji.png"
 class="resize-icon"> 

 <img src="images/${computerMove}-emoji.png"
 class="resize-icon">
 computer `;

 updateScoreElement();

  
}


function updateScoreElement(){
  document.querySelector('.js-score').innerHTML= `Wins: ${score.wins}, Lose: ${score.losses}, tie: ${score.ties}`

}

function pickComputerMove() {
  const randomNumber = Math.random();

  let computerMove = "";

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "scissor";
  }

  return computerMove;
}