function typeEffect(element, speed) {
  var text = element.innerHTML;
  element.innerHTML = "";
  
  var i = 0;
  var timer = setInterval(function() {
    if (i < text.length) {
      element.append(text.charAt(i));
      i++;
    } else {
      clearInterval(timer);
    }
  }, speed);
}


// application
var speed = 75;
var heading = document.querySelector('heading');
var live = document.querySelector('live');
var delay = heading.innerHTML.length * speed + speed;

// type affect to header
typeEffect(heading, speed);


// type affect to body
setTimeout(function(){
  live.style.display = "inline-block";
  typeEffect(live, speed);
}, delay);
