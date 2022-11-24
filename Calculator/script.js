let outputScreen = document.getElementById("output-screen");

function display(num) {

   outputScreen.value += num;
}

function calculate() {
   try {
      outputScreen.value = eval(outputScreen.value); /*ovo nam je zapravo linija koja nam izracunava rezultat*/
   }

   catch (err) {
      alert("invalid"); /*u slucaju da pogrijesimo prilikom računanja, odnosno npr napisemo dvije operacije izbacit ce error*/
   }
}

function Clear() {
   outputScreen.value = ""; /*postavljamo da button clear radi, odnosno da briše brojeve kada to želimo   */
}
function del() {
   outputScreen.value = outputScreen.value.slice(0, -1); /*postavljamo button delete, koji brise jedan po jedan broj*/
}