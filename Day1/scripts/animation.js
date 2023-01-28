let canvas = document.createElement("canvas");
canvas.id = "c";
canvas.width = "550";
canvas.height = "550";
canvas.style.display = "block";
canvas.style.border = "2px solid #000";
document.body.appendChild(canvas);
let myCanvas = document.getElementById("c"),
  ctx = myCanvas.getContext("2d");

window.addEventListener("load", function () {
  var startX = 50;
  var startY = 50;
  var endX = 100;
  var endY = 100;
  var amount = 0;
  let y, z;
  let interval = setInterval(function () {
    amount += 0.05;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "black";
    ctx.moveTo(startX, startY);
    ctx.lineTo(
      (y = startX + (endX - startX) * amount),
      (z = startY + (endY - startY) * amount)
    );
    console.log(y == canvas.width, z);
    if (Math.floor(y) == canvas.width && Math.floor(z) == canvas.height) {
      clearInterval(interval);
      this.alert("animation end");
    }
    ctx.stroke();
  }, 20);
});
