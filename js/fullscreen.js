function Fullscreen() {
  var elem = document.getElementById("map_canvas");

/*// go full-screen
if (i.requestFullscreen) {
  i.requestFullscreen();
  i.style.height = '100%';
  i.style.width = '100%';
} else if (i.webkitRequestFullscreen) {
  i.webkitRequestFullscreen();
  i.style.height = '100%';
  i.style.width = '100%';
  console.log(i.style.height);
} else if (i.mozRequestFullScreen) {
  i.mozRequestFullScreen();
  i.style.height = '100%';
  i.style.width = '100%';
} else if (i.msRequestFullscreen) {
  i.msRequestFullscreen();
  i.style.height = '100%';
  i.style.width = '100%';
}

  if (i.fullscreenElement || i.webkitFullscreenElement || i.mozFullScreenElement || i.msFullscreenElement) {
    i.exitFullscreen;
  }
  if (i.exitFullscreen){
    i.style.height = '600px';
    i.style.width = '800px';
    console.log(i.style.height);
  }
};*/
if (elem.requestFullscreen) {
  elem.requestFullscreen();
} else if (elem.mozRequestFullScreen) {
  elem.mozRequestFullScreen();
} else if (elem.webkitRequestFullscreen) {
  elem.webkitRequestFullscreen();

}
}