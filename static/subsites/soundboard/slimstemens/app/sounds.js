// Initialize Waud. Make sure to call this before loading sounds.
Waud.init();

// To automatically unlock audio on iOS devices by playing a blank sound.
// The parameter is a callback function that can be used to start playing sounds like background music.
Waud.enableTouchUnlock(touchUnlock);

var generiek = new WaudSound("app/audio/generiek.mp3", { autoplay: false, loop: false, autostop: true, volume: 0.4});
var bumper = new WaudSound("app/audio/bumper.mp3", { autoplay: false, loop: false, autostop: true});
var finale = new WaudSound("app/audio/finale.mp3", { autoplay: false, loop: false, autostop: true});
var klok = new WaudSound("app/audio/klok.mp3", { autoplay: false, loop: false, autostop: true, volume: 0.2});
var stop = new WaudSound("app/audio/klokeind.mp3", { autoplay: false, loop: false, autostop: true});
var goed = new WaudSound("app/audio/goed.mp3", { autoplay: false, loop: false});
var fout = new WaudSound("app/audio/fout.mp3", { autoplay: false, loop: false});

// Touch unlock callback for iOS devices to start playing bgSnd if it's not already playing
function touchUnlock() {
    console.log("Unlocked");
}