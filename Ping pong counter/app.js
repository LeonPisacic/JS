const p1 = { /*Player one */
   score: 0,
   button: document.querySelector("#p1Button"),
   display: document.querySelector("#player1Display")
}
const p2 = {  /*Player two */
   score: 0,
   button: document.querySelector("#p2Button"),
   display: document.querySelector("#player2Display")
}


const resetButton = document.querySelector("#reset");
let winningScore = 6;
let gameIsOver = false;
let brojDoKolkoIgramo = document.querySelector("#playto");


function updateScores(player, opponent) { /* funckija za određivanje pobjednika, odnosno gubitnika */

   if (!gameIsOver) {
      player.score++;
      if (player.score === winningScore) {
         gameIsOver = true;
         player.display.classList.add("winner");
         opponent.display.classList.add("loser");

         player.button.disabled = true; //onemogucavanje gumbova nakon sto neki korisnik pobijedi
         opponent.button.disabled = true;
      }

      player.display.textContent = player.score; //span-u dodajemo vrijednost p1score varijable nakon što se inkrementira

   }

};

p1.button.addEventListener("click", function () {
   updateScores(p1, p2);
});
p2.button.addEventListener("click", function () {
   updateScores(p2, p1);
});

brojDoKolkoIgramo.addEventListener("change", function () {
   winningScore = parseInt(brojDoKolkoIgramo.value); //ili mozemo this.value
   //razlog iz kojeg ne mozemo varijabli winningScore dodati brojDoKolkoIgramo.value - zato što ce biti string, a mi zelimo da bude number (zato koristimo parseInt)
   reset(); //Ovo je callback (A callback function is a function passed into another function as an argument)
});


resetButton.addEventListener("click", reset) //ovdje funckiju proslijedujemo kao callback 

function reset() {
   gameIsOver = false;

   for (p of [p1, p2]) {  //array sa vec definiranim varijablama (1-10 linija koda)
      p.score = 0;
      p.display.textContent = 0;
      p.display.classList.remove("winner", "loser");
      p.button.disabled = false;
   }
}