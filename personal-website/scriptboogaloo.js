console.log("js is working");

//document.getElementById("body").style.animation = "half-spin-end .5s ease-out";
setTimeout(() => {document.getElementById("body").style.animation = "none";}, 500);

let leTroll = document.getElementById("lebutton")
let lemonkey = document.getElementById("lemonkey");
leTroll.addEventListener("click", function() {
    console.log("click");
    if(leTroll.innerHTML === "Submit")
    {
        lemonkey.style.zIndex = 1;
        
        lemonkey.style.zIndex = -1;
    }
    else
    {
       leTroll.innerHTML = "Submit";
    }
    
});

function leavePage(newHref){
    document.getElementById("body").style.animation = "half-spin-start .5s ease-in";
    setTimeout(() => {location.href = newHref;}, 400);
}