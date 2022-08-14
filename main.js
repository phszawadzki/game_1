var currentDate = new Date();
let cursorSize = 1;
let foe_color = "000000";
// player's and foe's default coordinates
let xp = 0;
let yp = 0;
xf = 0;
yf = 0;

//updates foe's position
function foes_movement(){

//changing foe's position
document.getElementById('foe');
xf += (xp - xf)/40;
yf += (yp - yf)/40;
foe.style.left = xf + 'px';
foe.style.top =  yf + 'px';

//testing area
document.getElementById("test-info").textContent = xp + ' === ' + xf ;
}

function getCursorPosition(event) {
  xp = event.clientX;
  yp = event.clientY;
document.getElementById("cursor-position-x").textContent = xp;
document.getElementById("cursor-position-y").textContent = yp;
} 

setInterval(function() {

    foes_movement();
    
    updateCounter();
    

  }, 300);
 
  function updateCounter(){
    // Get today's date and time
    var now = new Date().getTime();
    // Find the distance between now and the count down date
    var distance = now - currentDate;
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    // Display the result in the element with id="demo"
    document.getElementById("info").innerHTML = "time: " + days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
  }

  function generateRandomColor(){
    let maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);   
    return `#${randColor.toUpperCase()}`
}
