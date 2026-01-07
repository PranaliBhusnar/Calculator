let colorBox=document.querySelector("section")
let min = 0;
let max = 255;

let a = Math.floor(Math.random() * (max - min + 1)) + min;
let b = Math.floor(Math.random() * (max - min + 1)) + min;
let c = Math.floor(Math.random() * (max - min + 1)) + min;

// APPLY STYLE PROPERLY
// colorPlatte.style.backgroundColor = `rgb(${a}, ${b}, ${c})`;
// colorName.innerHTML= `rgb(${a}, ${b}, ${c})`;


function colorMultiple(){
    let cp=document.createElement(("div"));
    cp.innerHTML=` <div class="color"  >
                   <div class="colorname">rgb(${Math.floor(Math.random() *256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})</div>
                   </div>`;
    colorBox.appendChild(cp);
    let color=document.getElementsByClassName("color");
    cp.style.backgroundColor=`rgb(${Math.floor(Math.random() *256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
 
}


 for(let i=1;i<=1000 ;i++){
       colorMultiple();
 }