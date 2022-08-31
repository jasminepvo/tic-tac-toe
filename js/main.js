/* Logic Needed

1. define the grid

2. define buttons

3. player class should target button innerText and have a choose() method for placing X's and O's


I still think this code is spaghetti to the max but it's OOP!
*/
class Game {
    constructor() {
        this.gridIndex = document.querySelectorAll('.grid-index')
        this.buttons = document.querySelectorAll('.btn')
    }
    
    initButtons() {
        for (let i = 0; i < this.buttons.length; i++) {

            this.buttons[i].addEventListener("click", e => {
                console.log(this.buttons[i].innerText);

                //adds button-clicked class into css to simulate pressing a button
                if (this.buttons[i] === this.buttons[0]) {
                    this.buttons[0].classList.add('button-clicked');
                    this.buttons[1].classList.remove('button-clicked');
                } else {
                    this.buttons[0].classList.remove('button-clicked');
                    this.buttons[1].classList.add('button-clicked');
                }

                // uses the Player class to name the buttons after button names and initializes choose() so X's and O's appear on the dom
                let newPlayer = new Player(this.buttons[i].innerText);
                console.log(newPlayer);
                newPlayer.choose();
            })
        }
    }
}

class Player extends Game {
    constructor(playerID) {
        super()
        super.gridIndex
        this._playerID = playerID
    }

    //used to name the buttons
    get playerID() {
        return this._playerID
    }
    
    //actual code for the X's and O's. The above just initializes the method.
    choose() {
		for (let i = 0; i < this.gridIndex.length; i++) {
			this.gridIndex[i].addEventListener("click", () => {
				if (this._playerID === 'PLAYER 1') {
					this.gridIndex[i].querySelector('span').innerText = "X";
				} else {
					this.gridIndex[i].querySelector('span').innerText = "O";
				}
				
			});
		}
	}
}

let init = new Game;

init.initButtons();

