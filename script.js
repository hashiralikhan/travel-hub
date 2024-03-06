var flightIndex = 0;
var timer;

function startCarousel() {
  timer = setInterval(carousel, 2000);
}

function carousel() {
  var i;
  var x = document.getElementsByClassName("flight");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  flightIndex++;
  if (flightIndex > x.length) {flightIndex = 1}    
  x[flightIndex-1].style.display = "block";  
}

function pauseCarousel() {
  clearInterval(timer);
}

document.getElementById("flightSlider").addEventListener("mouseenter", pauseCarousel);
document.getElementById("flightSlider").addEventListener("mouseleave", startCarousel);

startCarousel(); // Start automatic slideshow initially


function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  $(document).ready(function(){
    $("#myTab a").click(function(e){
        e.preventDefault();
        $(this).tab("show");
    });
});


