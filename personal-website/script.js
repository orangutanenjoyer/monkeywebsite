console.log("js is working");
alert("Your computer has been infected with a virus!")

let accordions = document.getElementsByClassName("accordion");
for (let i = 0; i < accordions.length; i++) {
   accordions[i].addEventListener('click', function() {
       let panel = this.nextElementSibling


       // if panel is currently displayed, then hide it
       if (panel.style.display === "block") {
            panel.style.display = 'none';

       // else panel is currently hidden, so display it 
       } else {
           panel.style.display = "block";
       }
   });
}
const responses = [
    "It is certain",
    "Without a doubt",
    "You may rely on it",
    "Yes definitely",
    "It is decidedly so",
    "As I see it, yes",
    "Most likely",
    "Yes",
    "Outlook good",
    "Signs point to yes",
    "Reply hazy try again",
    "Ask again later",
    "Great Googly Moogly! Your mother has fallen out of bed causing a magnitude 9.2 earthquake!",
    "Concentrate and ask again",
    "Don’t count on it",
    "Outlook not so good",
    "My sources say no",
    "Very doubtful",
 ];
 
 
 let askButton = document.getElementById("ask-btn")
 let response = document.getElementById("magic-8-ball-response");
 askButton.addEventListener("click", function() {
    console.log("click");
    if (askButton.innerHTML === "Ask") {
        response.innerHTML = responses[Math.floor(Math.random() * responses.length)];
        askButton.innerHTML = "Reset";
    } else {
        response.innerHTML = ""
        askButton.innerHTML = "Ask";
    }
 });
 

