let h=document.getElementById("h");
let m=document.getElementById("m");
let s=document.getElementById("s");
let stop=document.querySelector("#btn1");
let reset=document.querySelector("#btn2");
let start=document.querySelector("#btn3");
let button=document.getElementsByClassName("button")
let sec=0;
let min=0;
let hour=0;
function print(){
    sec++;
    if (sec === 60) {
        sec = 0;
        min++;
    }
    if (min === 60) {
        min = 0;
        hour++;
    }
    s.textContent = sec;
    m.textContent = min;
    h.textContent = hour;
}

let timer = null;

start.addEventListener("click", () => {
    if (timer === null) {
        timer = setInterval(print, 1000);
    }
});

stop.addEventListener("click", () => {
    clearInterval(timer);
    timer = null;
});

reset.addEventListener("click", () => {
    clearInterval(timer);
    timer = null;

    sec = 0;
    min = 0;
    hour = 0;

    s.textContent = `00`;
    m.textContent = `00`;
    h.textContent = `00`;
});
 
