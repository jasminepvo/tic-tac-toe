# My Awesome Project
This was a team effort to create an online version of the beloved game, Tic Tac Toe. Use this to play with 2 people!

**Link to project:** https://teamtictactoe.netlify.app/

![Screen Shot 2022-08-29 at 7 37 06 PM](https://user-images.githubusercontent.com/99847030/187317001-cbdc6f98-0327-4312-a298-611c092e09c4.jpg)


## How It's Made:

**Tech used:** HTML, CSS, JavaScript

We started off using VSCode Live Share as a way to code together but quickly discovered there wasn't an option for both parties to preview the changes made live. Glitch was the optimal source to effectively work as a team while using Discord to talk. We started off with simple aspects then built on. At first, we used HTML & CSS to create a plain 3x3 box using css grid. Then we began thinking through the logic of the game in the smallest steps possible.<br> 
1. We want to click a box to mark either X or O so we grabbed the first box and added an event listener to see if we could get it to display 'X'.<br>
2. Then we repeated that for 'O'.<br>
3. How do we make it so the player is clicking 'X' or 'O'? Well then we needed to add an option to choose whether you are player 1 or player 2 so we added buttons to the HTML. <br>
4. How do we make player 1 click X and player 2 click O? We assigned an event listener on each button to the appropriate function. <br>
5. Well now we are repeating the same code for each box which is 9 times. How do we avoid this? We used queryselectorall to grab every box and put it into an array. Now we can loop through each box and iterate where we want to mark 'X' or 'O'.<br>
6. The game works but can be cheated so we added instructions on how to play.

## Optimizations

We need to refactor the code to be OOP (object oriented programming) and follow the four pillars of encapsulation, abstraction, inheritance and polymorphism.
We also plan to add a check method to determine whether the player can only select boxes that are empty AND a method to check who won. 

## Lessons Learned:

We learned how to pair program and work together as a team. We walked through our ideas out loud and the thought process behind it, then came up with a solution. We learned how to collaborate with one another if an effective way with clear communication. Most importantly, we had fun! Especially when we got each step to work! 
