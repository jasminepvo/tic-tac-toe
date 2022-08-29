//Store all grid indexes into array
let gridIndex = document.querySelectorAll(".grid-index");

console.log(gridIndex);

//Make players
let player1 = document.querySelector(".player-1");
let player2 = document.querySelector(".player-2");

//Player 1
player1.addEventListener("click", (event) => {
	//Loop through indexes and allow player to click any box
	for (let i = 0; i < gridIndex.length; i++) {
		gridIndex[i].addEventListener("click", (event) => {
			gridIndex[i].innerText = "X";
		});
	}
});

//player 2

player2.addEventListener("click", (event) => {
	console.log("I am player 2");

	/*when player 2 clicks button, I want whenever they click a
  box, for it to show O*/

	for (let i = 0; i < gridIndex.length; i++) {
		gridIndex[i].addEventListener("click", (event) => {
			gridIndex[i].innerText = "O";
		});
	}

	// gridIndex[0].addEventListener("click", (event) => {
	//   gridIndex[0].innerText = "O";
	// });
});
