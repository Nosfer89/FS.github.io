var txt = document.getElementById("txt");
function fall(){
    var e = document.createElement("span");
    document.body.appendChild(e);
    e.style.left = Math.random()*300+"px";
    e.style.fontSize = Math.random()*80+"px"
    e.innerHTML = "★";
    setTimeout(()=>{
        document.body.removeChild(e);
    },2000);
}
setTimeout(()=>{
    txt.style.animation = "bye 2s";
    setTimeout(()=>{
        txt.innerHTML = "Thank you for everything ur an amazing person ★"
        txt.style.animation = "pop 3s"
        setInterval(()=>{fall()},100)},1000)
    
},4000)
function done() {
    
}


