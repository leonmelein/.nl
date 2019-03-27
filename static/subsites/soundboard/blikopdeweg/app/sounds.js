// Initialize Waud. Make sure to call this before loading sounds.
Waud.init();

// To automatically unlock audio on iOS devices by playing a blank sound.
// The parameter is a callback function that can be used to start playing sounds like background music.
Waud.enableTouchUnlock(touchUnlock);

var intro = new WaudSound("app/audio/intro.mp3", { autoplay: false, loop: false, autostop: true});
var outro = new WaudSound("app/audio/outro.mp3", { autoplay: false, loop: false, autostop: true});
var bumper = new WaudSound("app/audio/bumper.mp3", { autoplay: false, loop: false, autostop: true});

// Touch unlock callback for iOS devices to start playing bgSnd if it's not already playing
function touchUnlock() {
    console.log("Unlocked");
}