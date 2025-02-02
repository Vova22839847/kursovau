
let sign = prompt("What's your sign?");

if (sign.toLowerCase() === "scorpio") {
  alert("Wow! I'm a Scorpio too!");
}

// there are many ways to use the prompt feature
sign = window.prompt(); // open the blank prompt window
sign = prompt(); //  open the blank prompt window
sign = window.prompt("Are you feeling lucky"); // open the window with Text "Are you feeling lucky"
sign = window.prompt("Are you feeling lucky", "sure"); // open the window with Text "Are you feeling lucky" and default value "sure"


window.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById("demo").innerHTML = "Привет, " + sign;
});
signz = window.prompt("Enter your age", "17"); // open the window with Text "Good age" and default value "17"


window.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById("demo1").innerHTML = "хороший возраст, " + signz;
});

signd = window.prompt("What's your zadiac sign", "казерог"); // open the window with Text "What's your zadiac sign" and default value "казерог"


window.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById("demo2").innerHTML = "у меня такой же, " + signd;
});



signl = window.prompt("What year were you born", "2010"); // open the window with Text "So you're already big" and default value "2010"


window.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById("demo3").innerHTML = "так ты уже большой, " + signl;
});