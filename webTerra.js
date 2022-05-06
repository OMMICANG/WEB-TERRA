// DarkMode feature

var lightBulb = document.getElementById("lightBulb");
lightBulb.onclick = ()=>{
  document.body.classList.toggle("dark-mode");
  // lightBulb Icon change functionality
  if(document.body.classList.contains("dark-mode")){
    lightBulb.src = "./svgImages/darkModeSvg/sun.png";
    musicPlay();


  } else {
    lightBulb.src= "./svgImages/darkModeSvg/light-mobile-ui-basic-lamp-dark-mode-svgrepo-com.svg";
    musicStop();


  }

}

// DarkMode Feature ends Here

// MusicPlay Int with LightBulb: Credits @Paul Becker(stack):

function musicPlay() {
    document.getElementById('ID').play();
}

function musicStop() {
var reset = document.getElementById('ID');
  reset.pause();
  if (reset.pause()){
    reset.play(); // Prev issue solved reset code credits @adeneo (Stack)
  }
    else{
      reset.currentTime = 0;
    }
  }

