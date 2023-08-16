//your JS code here. If required.
// taking an empty variable to attach play/stop/pause in the global

var sound = new Audio();
  //  <audio src="./test.mp3" controls></audio>
function playSound(){
	// stopSound();
	sound.src = "https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3" ;
	sound.play();
}

function stopSound(fileName){
	sound.pause()
}