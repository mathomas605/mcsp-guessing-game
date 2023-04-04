function randomInt(n) {
  return Math.floor(Math.random() * n) + 1;
}

function parseInput(string) {
  if (string === "") {
    return NaN;
  } else if (string === null) {
    return null;
  } else {
    return Number(string);
  }
}
function promptInt(message) {
  let number = parseInput(prompt(message));

  while (!Number.isInteger(number) && number !== null) {
    number = parseInput(prompt("Please enter an integer."));
  }

  return number;
}

let playerScores = {};

function play() {
  const secretNumber = randomInt(10);
  let playerName = prompt("Enter your name here");
  let guess = promptInt(`Guess a number ${playerName}.`);
  let guesses = [guess];

  while (guess !== secretNumber) {
    if (guess === null) {
      alert("Goodbye!");
      return;
    }

    if (guess < secretNumber) {
      guess = promptInt(`Sorry ${playerName}, Guess higher!`);
    } else {
      guess = promptInt(`Sorry ${playerName}, Guess lower!`);
    }

    guesses.push(guess);
  }
  //“That’s Correct Bob! And you beat your previous attempt by 3 fewer guesses!” ,
  //if Guess is equal to the secret number and “Bob” played before with more guesses.
  if (playerScores[playerName] === undefined) {
    alert(`Correct! ${playerName} previous attempts were: ${guesses}.`);
  } else if (playerScores[playerName].length > guesses.length) {
    alert(
      `That’s ${playerName}! And you beat your previous attempt by ${
        playerScores[playerName].length - guesses.length
      } fewer guesses!`
    );
  } else if (playerScores[playerName].length < guesses.length) {
    alert(
      `That’s Correct ${playerName}! You did better in your last game by ${
        guesses.length - playerScores[playerName].length
      } fewer guesses.`
    );
  }

  let playAgain = prompt(
    `would you like to play again ${playerName}! Enter yes or no.`
  );
  if (playAgain.toLowerCase() == "yes") {
    play();
  } else {
    alert(`goodbye ${playerName}`);
  }
  playerScores[playerName] = guesses;
}

play();
