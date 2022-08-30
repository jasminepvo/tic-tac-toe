let gridIndex = document.querySelectorAll(".grid-index");

console.log(gridIndex);

//remember, classes are syntactical sugar. They are fundamentally still functions, meaning that you can call them when needed.

// selects player 1 button
class Player {
	constructor(playerID) {
		this.playerID = playerID
	}
	
	choose() {
		for (let i = 0; i < gridIndex.length; i++) {
			gridIndex[i].addEventListener("click", () => {
				if (this.playerID === 'PLAYER 1') {
					gridIndex[i].querySelector('span').innerText = "X";
				} else {
					gridIndex[i].querySelector('span').innerText = "O";
				}
				
			});
		}
	}
}


let buttons = document.querySelectorAll('.btn');

for (let i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener('click', function() {
		let newPlayer = new Player(buttons[i].innerText);
		console.log(newPlayer);
		newPlayer.choose();
	})
}

