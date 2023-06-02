console.log("js is working");
const errorCardTemplate = document.querySelector("[error-card-template]");
const errorContainer = document.getElementById("error-container"); 
var totalErrors = 0;
const maxErrors = 100;



const animations = [ //the random list of animations given to things
    "scale-horiz 2s",
    "scale-vert 2s",
    "wiggle-vert 2s",
    "wiggle-horiz 2s",
    "spin 2s",
    "spin-reverse 2s"
]

const sketchImages = [
    "ads\\error.jpg",
    "ads\\clickHere.gif",
    "ads\\clickHere2.jpg",
    "ads\\clickHere3.jpg"
]

const alertMessages = [
    "YOU WON A FREE IPHONE!!!",
    "CLICK TO GET MONEY",
    "FREE BANNANAS FOR ALL!!",
    "OOH OOOH AAAAAHH AAAAAH"
]

//-----------------------Landon zone--------------------------- (get ready for some shite code)

//forever loops-------------
async function spawnErrors(){
    if(totalErrors < maxErrors){
        spawnError() //spawn
        totalErrors++;
    }
    console.log(totalErrors);
    setTimeout(() => {spawnErrors();}, Math.floor(Math.random()*100));//continuing forever function
}
async function randomAlerts(){
    alert(alertMessages[Math.floor(Math.random() * alertMessages.length)]);
    setTimeout(() => {randomAlerts();}, Math.floor(Math.random()*5000 + 3000));
}

function spawnError(){
    const newError = errorCardTemplate.content.cloneNode(true).children[0];
    errorContainer.append(newError);
    newError.querySelector("[sketch-image]").src = sketchImages[Math.floor(Math.random()*sketchImages.length)];
    newError.style["top"] = Math.floor(Math.random()*91 + 10) + "%";
    newError.style["left"] = Math.floor(Math.random()*110 - 10) + "%";
    destroyElement(newError, 5000);//continuing forever function
}

//start forever loops-------------
spawnErrors();
setTimeout(() => {randomAlerts();}, Math.floor(Math.random()*5000 + 3000));

function destroyElement(element, delay=0){
    setTimeout(() => {
        element.parentNode.removeChild(element);
        totalErrors--;
    }, delay);
}

