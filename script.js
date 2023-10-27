function bubbles() {
  var clutter = "";

  for (var i = 0; i < 216; i++) {
    var n = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${n}</div>`;
  }

  document.querySelector("#pbtm").innerHTML = clutter;
}
var num = 0;
function hit_number() {
  num = Math.floor(Math.random() * 10);
  document.querySelector("#hit").textContent = num;
}
var ti = 60;
function setTime() {
  var timer = setInterval(function () {
    if (ti > 0) {
      ti--;
      document.querySelector("#tim").textContent = ti;
    } else {
      clearInterval(ti);
      document.querySelector('#pbtm').innerHTML = `<h1>Game Over</h1>`
    }
  }, 1000);
}
var score = 0;
function increaseScore() {
  score += 10;
  document.querySelector("#incScore").textContent = score;
}
document.querySelector("#pbtm").addEventListener("click", function (dets) {
  var clickedNum = Number(dets.target.textContent);
  if (clickedNum === num) {
    increaseScore();
    hit_number();
    bubbles();
  }
});

setTime();
bubbles();
hit_number();
