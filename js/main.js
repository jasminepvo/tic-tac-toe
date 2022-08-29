//Store all grid indexes into array
let gridIndex = document.querySelectorAll(".grid-index");

console.log(gridIndex);

//Make players
let player1 = document.querySelector(".player-1");
let player2 = document.querySelector(".player-2");

//Player 1
player1.addEventListener("click", (event) => {
	player1.classList.add('button-clicked');
	player2.classList.remove('button-clicked');


	//Loop through indexes and allow player to click each box
	for (let i = 0; i < gridIndex.length; i++) {
		gridIndex[i].addEventListener("click", (event) => {
			gridIndex[i].querySelector('span').innerText = "X";
		});
	}
});

//Player 2

player2.addEventListener("click", (event) => {
	player1.classList.remove('button-clicked');
	player2.classList.add('button-clicked');

	for (let i = 0; i < gridIndex.length; i++) {
		gridIndex[i].addEventListener("click", (event) => {
			gridIndex[i].querySelector('span').innerText = "O";
		});
	}
});
