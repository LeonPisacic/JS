setInterval(setClock, 1000) /*svakih 1000 milisekundi pozivamo ovu funckiju */


const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')


function setClock() {

   const currentDate = new Date()
   const secondsRatio = currentDate.getSeconds() / 60;
   const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;

   const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;  // jer je 12 sati na satu

   setRotation(secondHand, secondsRatio);
   setRotation(minuteHand, minutesRatio);
   setRotation(hourHand, hoursRatio);

}

function setRotation(element, rotationRatio) {  // funckija za rotiranje svih kazaljka na satu

   element.style.setProperty('--rotation', rotationRatio * 360) // 360 stupnjeva u nasoj rotaciji sata
}

setClock();