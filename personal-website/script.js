console.log("js is working");

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

const animations = [
    "scale-horiz .5s",
    "scale-vert .5s",
    "wiggle-vert .5s",
    "wiggle-horiz .5s"
]
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


//-----------------------Landon zone--------------------------- (get ready for some shite code)
//called by html------------
function leavePage(newHref){ //example can be seen in both nav bars
    document.getElementById("body").style.animation = "half-spin-start .5s ease-in"; //start spin animation
    setTimeout(() => {location.href = newHref;}, 400); //literally just a delayed link click
}
function doSomeAnimations(){ //put this wherever you want some crazy shit happening (use just like leavePage())
    var allElements = document.getElementsByTagName("*"); //get every single element
    for(i=0; i < allElements.length; i++){ //loop through
        doAFlip(allElements[i]); //this has to be put in a seperate function (I can explain later because its kind of complicated)
    }
}

//forever loops-------------
var time = 0;
async function sinOpacity(){ //async so it doesnt hold up the other things
    document.getElementById("header-card").style.opacity = (Math.sin(time) + 1)/2; //set the opacity using the time variable
    time += .1; //incriment the varible
    setTimeout(() => {sinOpacity();}, 10); //calling iteself again in 10ms
}
async function randomErrorMessages(){ //almost the same thing as the opacity but without the opacity (:
    alert("monke");
    setTimeout(() => {randomErrorMessages();}, Math.floor(Math.random() * 30000 + 5000)); //calling iteself again
}

//start forever loops-------------
sinOpacity();
setTimeout(() => {randomErrorMessages();}, Math.floor(Math.random() * 30000 + 5000)); //to delay the dissapoitment

//other----------------------------------
////stop spin animation at start
setTimeout(() => {document.getElementById("body").style.animation = "none";}, 500);

//a helper function for doSomeAnimations()
function doAFlip(element){
    //console.log(element.name);
    setTimeout(() => {
        element.style.animation = animations[Math.floor(Math.random() * animations.length)] + "";
        setTimeout(() => {element.style.animation = "none";}, 1000);
    }, Math.floor(Math.random() * 250));
}

