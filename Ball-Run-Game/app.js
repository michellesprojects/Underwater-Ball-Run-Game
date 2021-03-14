var player = document.getElementById("player");
var container = document.getElementById("container");
var widthContainer = window.getComputedStyle(container).width;
var widthContainerInteger = widthContainer.substr(0, widthContainer.length - 2);
var ballSpeed = 20;

function moveRight() {
  var left = parseInt(window.getComputedStyle(player).getPropertyValue("left"));

  console.log(widthContainerInteger);

  /* Keep the ball within the boundaries of the container, make sure you cant move past the right bound */
  if (left + ballSpeed < widthContainerInteger) {
    player.style.left = left + ballSpeed + "px";
  }
}

function moveLeft() {
  var left = parseInt(window.getComputedStyle(player).getPropertyValue("left"));

  /* Keep the ball within the boundaries of the container, make sure you cant move past the left bound */
  if (left > 0) {
    player.style.left = left - ballSpeed + "px";
  }
}

document.addEventListener("keydown", (e) => {
  if (e.key == "ArrowLeft") {
    moveLeft();
  }
  if (e.key == "ArrowRight") {
    moveRight();
  }
});



