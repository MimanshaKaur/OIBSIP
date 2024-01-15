let cel = document.getElementById("celsius")
let fah = document.getElementById("fahrenheit")
let kel = document.getElementById("kelvin")
let btn = document.getElementById('.button')
function roundNumber(number){
    return Math.round(number*100)/100
}
/*Celsius to Fahrenheit and Kelvin*/
cel.addEventListener('input', function(){
    let c = this.value;
    let f =(c * 9/5) + 32;
    let k = parseFloat(c) + 273.15;
    fah.value = roundNumber(f);
    kel.value = roundNumber(k);
})
/*Fahrenheit to celsius and kelvin*/
fah.addEventListener('input', function(){
    let f = this.value;
    let c = (f - 32) * 5/9;
    let k = (f - 32) * 5/9 + 273.15;
    kel.value = roundNumber(k);
    cel.value = roundNumber(c);
})
/* Kelvin to Celsius and Fahrenheit*/
kel.addEventListener('input', function(){
    let k = this.value;
    let c = parseFloat(k) - 273.15;
    let f = (parseFloat(k) - 273.15) * (9/5) + 32;
    cel.value = roundNumber(c);
    fah.value = roundNumber(f);
})
btn.addEventListener('click', function(){
    cel.value = "";
    fah.value = "";
    kel.value = "";
})
