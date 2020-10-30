// function to select which sound is played
function soundSelector(e) {
  // selects audio element with specific keycode
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  //selects div element for audio by keycode
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  // if a keydown occurs that is not connected to a sound, do nothing
  if (!audio) return ;
  // adds a class to key div called 'playing' to keep track of which sound is playing
  key.classList.add('playing')
  // allows to sound to play again immediately
  audio.currentTime = 0;
  // plays the sound
  audio.play();
}

function removeTransition(e) {
  // if the event propertyName doesn't include 'transition', do nothing
  if (e.propertyName !== 'transform') return;
  //removes the playing class from target
  e.target.classList.remove('playing');
}

// creates an array of all elements with key attribute
const keys = Array.from(document.querySelectorAll('.key'));
// adds event listener for each key in keys array to remove transition
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
// adds event listener for keydown and sound play
window.addEventListener('keydown', soundSelector);