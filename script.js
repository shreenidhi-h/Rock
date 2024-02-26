let userScore = 0;
let compScore = 0;

const gameResult = document.querySelector("#gameResult");
const game = document.querySelector(".game");
let choices = document.querySelectorAll(".choice");

const userScoreid = document.querySelector("#user-score");
const compScoreid = document.querySelector("#comp-score");

const computer = document.querySelector("#comp");
const genCompChoice = () => {
	const options = ["rock", "paper", "scissors"];
	const randIdx = Math.floor(Math.random() * 3);
	return options[randIdx];
};

const drawGame = () => {
	gameResult.innerText = "The game is Draw! Play again.";
	game.classList.remove("hide");
	gameResult.style.backgroundColor = "blue";
};

const showWinner = (userWin, userChoice, compChoice) => {
	if (userWin) {
		userScore++;
		userScoreid.innerText = userScore;
		console.log("You won!");
		gameResult.innerText = `You won! Your ${userChoice} beats ${compChoice}`;
		game.classList.remove("hide");
		gameResult.style.backgroundColor = "green";
	} else {
		compScore++;
		compScoreid.innerText = compScore;
		console.log("Computer Won!");
		gameResult.innerText = `Computer won! ${compChoice} beats your ${userChoice}`;
		game.classList.remove("hide");
		gameResult.style.backgroundColor = "red";
	}
};
const playGame = (userChoice) => {
	const compChoice = genCompChoice();
	computer.classList.remove("hide");
	computer.innerText = `Computer choice is ${compChoice}`;
	if (userChoice === compChoice) {
		console.log("draw");
		drawGame();
	} else {
		let userWin = true;
		if (userChoice === "rock") {
			userWin = compChoice === "paper" ? false : true;
		} else if (userChoice == "paper") {
			userWin = compChoice === "scissors" ? false : true;
		} else {
			userWin = compChoice === "rock" ? false : true;
		}
		showWinner(userWin, userChoice, compChoice);
	}
};
choices.forEach((choice) => {
	choice.addEventListener("click", () => {
		const userChoice = choice.getAttribute("id");
		playGame(userChoice);
	});
});
