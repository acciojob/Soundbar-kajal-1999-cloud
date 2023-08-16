//your JS code here. If required.
// taking an empty variable to attach play/stop/pause in the global

var sound = new Sound();
  //  <audio src="./test.mp3" controls></audio>
function playSound(fileName){
	// stopSound();
	sound.src = 'sounds/' + fileName ;
	sound.play();
}

function stopSound(fileName){
	sound.pause()
}