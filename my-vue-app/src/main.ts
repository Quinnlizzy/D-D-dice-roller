import './style.css';

// Greet the user
alert("Welcome to D&D! Let the game begin.")

// Create functions for rolling different types of dice
//D4
function rollD4(): number {
  let roll: number = Math.floor(Math.random() * 4) + 1;
  return roll;
}

// D6
function rollD6(): number {
  let roll: number = Math.floor(Math.random() * 6) + 1;
  return roll;
}

//D8
function rollD8(): number {
  let roll: number = Math.floor(Math.random() * 8) + 1;
  return roll;
}

//D10
function rollD10(): number {
  let roll: number = Math.floor(Math.random() * 10) + 1;
  return roll;
}

//D12
function rollD12(): number {
  let roll: number = Math.floor(Math.random() * 12) + 1;
  return roll;
}

//D20
function rollD20(): number {
  let roll: number = Math.floor(Math.random() * 20) + 1;
  return roll;
}

// Create a function to handle the dice rolling game.
function diceGame() {
  // Prompt the user to choose a type of dice
  // This variable can just hold either a 'string' type or a 'null' type
  let promptValue: string | null = prompt(
  "Please choose which type of dice you want to throw. Please choose from the following options: \n\n D4, D6, D8, D10, D12 or D20"
);

// If the user provides a valid input, based on that, roll the corresponding dice and display the result
if (promptValue !== null) {
switch (promptValue) {
  case "D4":
  case "d4":
  case "4":
  // Assign a specific function to handle different dice cases
    const throwD4: number = rollD4();
    // Add alert to display the result
    alert(`you rolled a ${throwD4}`);
    break;

  case "D6":
  case "d6":
  case "6":
    const throwD6: number = rollD6();
    alert(`you rolled a ${throwD6}`);
    break;

  case "D8":
  case "d8":
  case "8":
    const throwD8: number = rollD8();
    alert(`you rolled a ${throwD8}`);
    break;

  case "D10":
  case "d10":
  case "10":
    const throwD10: number = rollD10();
    alert(`you rolled a ${throwD10}`);
    break;

  case "D12":
  case "d12":
  case "12":
    const throwD12: number = rollD12();
    alert(`you rolled a ${throwD12}`);
    break;

  case "D20":
  case "d20":
  case "20":
    const throwD20: number = rollD20();
    alert(`you rolled a ${throwD20}`);
    break;

  default:
    alert("Pick a real dice you doofus");
    break;
}
} else {
    // If promptValue is null, display an error message
    alert("Pick a real dice you doofus");
    }
  }

// Create a function to manage a loop:
  // Ask the user if they want to play again and store the result in userConfirmed
function playGame() {
  let userConfirmed: boolean;
  while (true) {
    diceGame();
    userConfirmed = confirm("Do you want to play again?");
    
    if (!userConfirmed) {
      break; 
    }
  }
  alert("Bye");
}

playGame();