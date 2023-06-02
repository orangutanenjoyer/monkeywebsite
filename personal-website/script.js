console.log("js is working");
const drivingMonkeyTemplate = document.querySelector("[monkey-driver-template]");
const drivingMonkeyContainer = document.querySelector("[driving-monkey-container]");
var currentMonkeyID = 0;

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

const animations = [ //the random list of animations given to things
    "scale-horiz .5s",
    "scale-vert .5s",
    "wiggle-vert .5s",
    "wiggle-horiz .5s",
    "spin .5s",
    "spin-reverse .5s"
]
const responses = [
    "It is certain",
    "Without a doubt",
    "You may rely on it",
    "Yes definitely",
    "Abandon evolution, return to monkey.",
    "As I see it, yes",
    "Most likely",
    "Yes",
    "Outlook good",
    "Signs point to yes",
    "Thanks, chump",
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

var animating = false; //this is so the random animations dont overlap and look bad
function doSomeAnimations(){ //put this wherever you want some crazy shit happening (use just like leavePage())
    if(!animating){
        var allElements = document.getElementsByTagName("*"); //get every single element
        animating = true;
        for(i=0; i < allElements.length; i++){ //loop through
            if(allElements[i].children.length == 0){ //making sure it is the base element
                doAFlip(allElements[i]); //this has to be put in a seperate function (I can explain later because its kind of complicated)
            }
        }
    }
    setTimeout(() => {animating = false;}, 750);
}

//forever loops-------------
var time = 0;
async function sinOpacity(){ //async so it doesnt hold up the other things
    document.getElementById("header-card").style.opacity = (Math.sin(time) + 1)/2; //set the opacity using the time variable
    time += .1; //incriment the varible
    setTimeout(() => {sinOpacity();}, 10); //calling iteself again in 10ms
}
const errors = [
    "monke",
    "Have you heard the tale of Darth Monkius the wise?",
    "Your computer has been infected with a virus!",
    "Uncle Maurice wants YOU for banana farming",
    "Ooh ooh ah ah",
    "Your mom!"
]

async function randomErrorMessages(){ //almost the same thing as the opacity but without the opacity (:
    let error = errors[Math.floor(Math.random() * errors.length)]
    alert(error);
    setTimeout(() => {randomErrorMessages();}, Math.floor(Math.random() * 30000 + 5000)); //calling iteself again
}
async function startSpawningMonkeys(){
    spawnMonkey(Math.floor(Math.random()*100));
    setTimeout(() => {startSpawningMonkeys();}, 2000);//continuing forever function
}

//start forever loops-------------
sinOpacity();
//setTimeout(() => {randomErrorMessages();}, Math.floor(Math.random() * 30000 + 5000)); //to delay the dissapoitment
startSpawningMonkeys();

//other----------------------------------
////stop spin animation at start
setTimeout(() => {document.getElementById("body").style.animation = "none";}, 500);

//a helper function for doSomeAnimations()
function spawnMonkey(height){
    monkeyID = currentMonkeyID;
    currentMonkeyID += 1;
    var newMonkey = drivingMonkeyTemplate.content.cloneNode(true).children[0];
    drivingMonkeyContainer.append(newMonkey);
    newMonkey.id = ("driver" + monkeyID);
    //newMonkey.style.top = height + "vh";
    destroyElementByID("driver" + monkeyID, 10000);
}

function destroyElementByID(elementID, delay=0){
    setTimeout(() => {
        element = document.getElementById(elementID);
        element.parentNode.removeChild(element);
    }, delay);
}
function doAFlip(element){
    //console.log(element.name);
    setTimeout(() => {
        element.style.animation = animations[Math.floor(Math.random() * animations.length)] + "";
        setTimeout(() => {element.style.animation = "none";}, 750);
    }, Math.floor(Math.random() * 250));
}

