let input=document.getElementById("input");
let btn1=document.getElementById("tofahrenheit");
let btn2=document.getElementById("tocelcise");
let h=document.getElementById("myh1");
let temp;
// function convert(){
//     if(btn1.checked){
//         temp=Number(input.value);
//         temp=temp*9/5+32;
//         h.textContent=temp+"°";
//         console.log(h);
//     }
// }
// convert()
let btn=document.getElementById("btn");
btn.addEventListener("click", () => {
    let value = Number(input.value);

    if (btn1.checked) {
        let result = value * 9 / 5 + 32;
        h.textContent = result.toFixed(2) + " °F";
         console.log(h);
    } 
    else if (btn2.checked) {
        let result = (value - 32) * 5 / 9;
        h.textContent = result.toFixed(2) + " °C";
        console.log(h);
    } 
    else {
        h.textContent = "Please select a conversion type";
         console.log(h);
    }
});
if(btn1.checked || btn2.checked){
    

}
