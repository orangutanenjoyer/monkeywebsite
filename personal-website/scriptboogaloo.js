console.log("js is working");
setTimeout(() => {alert(";)");}, 500);
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

const ads = [
    "ads\\1.jpg",
    "ads\\2.jpg",
    "ads\\3.jpg",
    //"ads\\4.jpg", for some reason, this single image is blocked (idfk why lmfao)
    "ads\\5.png",
    "ads\\6.png",
    "ads\\7.png",
    "ads\\8.png",
    "ads\\9.png",
    "ads\\10.png",
    "ads\\11.png"
]

const adElements = document.getElementsByClassName("ad");

function fadeInOutImage(){
    let image = images[Math.floor(Math.random() * images.length)];
    document.getElementById(image).style.animation = "fadeInAndOut 1s";
    document.getElementById(image).style.zIndex = "1";
    
    setTimeout(() => {document.getElementById(image).style.animation = "none";}, 1000);
    setTimeout(() => {document.getElementById(image).style.zIndex = "-1";}, 1000);
}

function goToSketch(){
    location.href = 'errorpage.html';
}

async function setAd(adElement){
    var adToSet = ads[Math.floor(Math.random() * ads.length)];
    
    //check if ad is currently in use (loop through ad elements and check src)
    var notCurrentlyUsed = true;
    for (let ad = 0; ad < adElements.length; ad++) {
        var splitList = (adElements[ad].src + "").split("/");
        var otherAd = ("ads\\" + splitList[splitList.length - 1]); 
        if(otherAd == adToSet){
            notCurrentlyUsed = false;
        }
    }

    if(notCurrentlyUsed){
        adElement.src = adToSet
        setTimeout(() => {setAd(adElement)}, Math.floor(Math.random() * 6000 + 2000));
    }
    else{
        setAd(adElement);
    }
}

//start ads changing
for (var i = 0; i < adElements.length; i++) {
    setAd(adElements[i]);
}