const hour=document.getElementById("hour-hand");
const min=document.getElementById("min-hand");
const sec=document.getElementById("sec-hand");
function updateclock(){
    const currentdate= new Date();
   
    const hours= currentdate.getHours();
    const mins= currentdate.getMinutes();
    const secs=currentdate.getSeconds();
    const hourDeg =(hours/12)*360;
    hour.style.transform=`rotate(${hourDeg}deg)`;
    const minDeg =(mins/60)*360;
    min.style.transform=`rotate(${minDeg}deg)`;
    const secDeg =(secs/60)*360;
    sec.style.transform=`rotate(${secDeg}deg)`;
    
}
   setInterval(updateclock, 1000);
