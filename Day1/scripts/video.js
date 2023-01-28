let vid = document.getElementById("vid");
let play = document.querySelector("#play");
let stopVid = document.querySelector("#stop");
let sound = document.querySelector("#sound");
let volume = document.querySelector("#volume");
let next = document.querySelector("#next");
let rangeDuration = document.querySelector("#range-duration");
let prev = document.querySelector("#prev");
let speed = document.querySelector("#speed");
let fullscreen = document.querySelector("#fullscreen");
rangeDuration.setAttribute("max", vid.duration);

rangeDuration.addEventListener("input", (event) => {
  vid.currentTime = event.target.value;
});

vid.addEventListener("timeupdate", () => {
  rangeDuration.value = vid.currentTime;
});

play.addEventListener("click", () => {
  vid.play();
});
stopVid.addEventListener("click", () => {
  //   stopVid.style.border = "1px solid #000";
  vid.pause();
});

sound.addEventListener("click", () => {
  if (vid.muted) {
    vid.muted = false;
    sound.src = "../assets/sound.svg";
  } else {
    vid.muted = true;
    sound.src = "../assets/mute.svg";
  }
});

next.addEventListener("click", () => {
  vid.currentTime += 10;
});

volume.addEventListener("click", (e) => {
  let volumeRang = document.querySelector("#volume-range");
  volumeRang.style.display = "inline";
  volumeRang.addEventListener("input", (e) => {
    vid.volume = e.target.value;
    if (e.target.value == 0) {
      sound.src = "../assets/mute.svg";
    } else {
      sound.src = "../assets/sound.svg";
    }
  });
  //   return volume.removeEventListener("click");
});

prev.addEventListener("click", () => {
  vid.currentTime -= 10;
});

speed.addEventListener("click", (e) => {
  let speedRang = document.querySelector("#speed-range");
  speedRang.style.display = "inline";
  speedRang.addEventListener("input", (e) => {
    vid.playbackRate = e.target.value;
  });
});
fullscreen.addEventListener("click", () => {
  vid.webkitRequestFullscreen();
});
