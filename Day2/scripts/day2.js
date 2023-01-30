let submitBtn = document.querySelector("#submit-btn");

submitBtn.addEventListener("click", () => {
  let user = document.querySelector("#user").value;
  let userEmail = document.querySelector("#userEmail").value;
  localStorage.setItem("username", user);
  localStorage.setItem("userEmail", userEmail);
});

let worker = new Worker("./scripts/worker.js");
let sum = document.querySelector("#summingUp");
let bg = document.querySelector("#changeBackground");
sum.onclick = function () {
  worker.postMessage("");
};
worker.onmessage = (message) => {
  console.log(message);
  alert(message.data);
};
bg.onclick = function () {
  if (document.body.style.background !== "green") {
    document.body.style.background = "green";
  } else {
    document.body.style.background = "red";
  }
};
// !clone geolocation task
const loc = document.querySelector("#location");

const getLoc = () => {
  navigator.geolocation.getCurrentPosition(showLoc, showErr);
};
const showLoc = (e) => {
  var long = e.coords.longitude;
  var lat = e.coords.latitude;
  //   console.log(e, long, lat);
  location.assign("http://maps.google.com/maps?q" + lat + ",+" + long);
};
const showErr = (x) => {
  switch (x.code) {
    case 0:
      console.log(x.message);
      break;
    case 1:
      console.log(x.message);
      break;
    case 2:
      console.log(x.message);
      break;
    case 3:
      console.log("no time");
      break;
  }
};
loc.addEventListener("click", getLoc);
