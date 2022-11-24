var seconds = 00;
var tens = 00;
var outputSeconds = document.getElementById('second');
var outputTens = document.getElementById('tens');
var buttonStart = document.getElementById("btn-start");
var buttonStop = document.getElementById("btn-stop");
var buttonReset = document.getElementById("btn-reset");
var Interval;

buttonStart.addEventListener('click', () => {

   clearInterval(Interval);

   Interval = setInterval(startTime, 10); /*starta vrijeme na 1*10 milisekundi (od 0,1) */
});

buttonStop.addEventListener('click', () => {

   clearInterval(Interval);

   Interval = setInterval();
});


buttonReset.addEventListener('click', () => {

   clearInterval(Interval);
   tens = "00";
   seconds = "00"; /*Ponovno postavljanje na pocetnu vrijednost (nula) nakon resetiranja*/
   outputSeconds.innerHTML = seconds;
   outputTens.innerHTML = tens;  /*vracanje vrijednosti??    */
});


function startTime() {
   tens++;

   if (tens <= 9) {
      outputTens.innerHTML = "0" + tens;
   }

   if (tens > 9) {
      outputTens.innerHTML = tens;
   }

   if (tens > 99) { /*stotinke idu do 100, tek se onda varijabla seconds povecava za jedan, a tens se vraća na pocetnu vrijednost (00)*/
      seconds++;
      outputSeconds.innerHTML = "0" + seconds;
      tens = 0; /* vracanje varijable stotinke na nula*/
      outputTens.innerHTML = "0" + tens;
   }

   if (seconds > 9) {
      outputSeconds.innerHTML = seconds;
   }

}
