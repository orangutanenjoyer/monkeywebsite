console.log("js is working");

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