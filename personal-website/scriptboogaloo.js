console.log("js is working");
alert(";)")
//document.getElementById("body").style.animation = "half-spin-end .5s ease-out";
setTimeout(() => {document.getElementById("body").style.animation = "none";}, 500);

function leavePage(newHref){
    document.getElementById("body").style.animation = "half-spin-start .5s ease-in";
    setTimeout(() => {location.href = newHref;}, 400);
}

const images = [
    "leww",
    "letroll",
    "lesbeve",
    "leboner"
];


function fadeInOutImage(){
    let image = images[Math.floor(Math.random() * images.length)];
    document.getElementById(image).style.animation = "fadeInAndOut 1s";
    document.getElementById(image).style.zIndex = "1";
    
    setTimeout(() => {document.getElementById(image).style.animation = "none";}, 1000);
    setTimeout(() => {document.getElementById(image).style.zIndex = "-1";}, 1000);
}