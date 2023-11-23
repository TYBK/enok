window.addEventListener("scroll", function() {
  var navbar = document.querySelector(".navbar");
  if (window.pageYOffset > 0) {
    navbar.classList.add("navbar-fixed");
  } else {
    navbar.classList.remove("navbar-fixed");
  }
});

const res = [
  "Group Trip Planning",
  "Team Project Collaboration",
  "Family Event Coordination",
  "Sharing Recipes with Friends",
  "Personal Goal Tracking",
  "Study Group Organization",
  "Book Recommendations with Friends",
  "Fitness Accountability Buddies",
  "DIY Home Improvement Projects",
  "Virtual Art or Writing Club",
];

const images = [
  "banner1.png",
  "banner2.png",
  "banner3.png",
  "banner4.png",
  "banner5.png",
  "banner6.png",
  "banner7.png",
  "banner8.png",
];

let textPosition = 0;
let resIndex = 0;
let speed = 20;
let loopCount = 0;
const maxLoops = 5;

const typewriterText = document.getElementById("txt-holder");
const appRevealBanner = document.querySelector(".app-reveal-banner");

const typeWriter = () => {
  typewriterText.innerHTML =
    res[resIndex].substring(0, textPosition) +
    "<span id='blinker'>\u25ae</span>";

  if (textPosition++ < res[resIndex].length) {
    setTimeout(typeWriter, speed);
  } else {
    setTimeout(() => {
      backspace();
    }, 1000);
  }
};

const backspace = () => {
  typewriterText.innerHTML =
    res[resIndex].substring(0, textPosition) +
    "<span id='blinker'>\u25ae</span>";

  if (textPosition > 0) {
    textPosition--;
    setTimeout(backspace, speed);
  } else {
    setTimeout(() => {
      textPosition = 0;
      resIndex = (resIndex + 1) % res.length;
      if (resIndex === 0) {
        loopCount++;
        if (loopCount >= maxLoops) {
          return; // Stop the loop
        }
      }

      appRevealBanner.style.backgroundImage = `url('${images[resIndex]}')`;

      setTimeout(typeWriter, 1000);
    }, 1000);
  }
};

// Start the typewriter effect
setTimeout(typeWriter, 1000); // Delay before starting the first sentence
