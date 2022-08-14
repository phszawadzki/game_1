const cursorRounded = document.querySelector('.rounded');

const moveCursor = (e)=> {
  const mouseY = e.clientY;
  const mouseX = e.clientX;

  //change foe's color    
  var foe = document.getElementById('foe');
  foe.style.backgroundColor = generateRandomColor();
}

window.addEventListener('mousemove', moveCursor)


