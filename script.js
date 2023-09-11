;/*function CtoF()
{
    let cel=document.getElementById("celsius");
    let far=cel*100;
    console.log(far);
    document.getElementById("fahr").innerHTML=far;
}*/

let cel=document.getElementById("celsius");
let far=document.getElementById("fahr");
let kel=document.getElementById("kelvin");

function CtoF()
{
    let output=(parseFloat(cel.value)*(9/5))+32;
    far.value=output.toFixed(3);
}
function CtoK()
{
    let output=parseFloat(cel.value)+273.15;
    kel.value=output.toFixed(3);
}
function FtoC()
{
    let output=(parseFloat(far.value)-32)*(5/9);
    cel.value=output.toFixed(3);
}
function FtoK()
{
    let output=(parseFloat(far.value)-32)*(5/9)+273.15;
    kel.value=output.toFixed(3);
}
function KtoC()
{
    let output=parseFloat(kel.value)-273.15;
    cel.value=output.toFixed(3);
}
function KtoF()
{
    let output=parseFloat(kel.value)-273.15*(9/5)+32;
    far.value=output.toFixed(3);
}

function celsius_Color()
{
    document.getElementById("celsius").style.backgroundColor="black";
    document.getElementById("celsius").style.color="white";
    document.getElementById("fahr").style.backgroundColor="white";
    document.getElementById("fahr").style.color="black";
    document.getElementById("kelvin").style.backgroundColor="white";
    document.getElementById("kelvin").style.color="black";
}
function fahr_Color()
{
    document.getElementById("fahr").style.backgroundColor="black";
    document.getElementById("fahr").style.color="white";
    document.getElementById("celsius").style.backgroundColor="white";
    document.getElementById("celsius").style.color="black";
    document.getElementById("kelvin").style.backgroundColor="white";
    document.getElementById("kelvin").style.color="black";
}
function kelvin_Color()
{
    document.getElementById("kelvin").style.backgroundColor="black";
    document.getElementById("kelvin").style.color="white";
    document.getElementById("celsius").style.backgroundColor="white";
    document.getElementById("celsius").style.color="black";
    document.getElementById("fahr").style.backgroundColor="white";
    document.getElementById("fahr").style.color="black";

}