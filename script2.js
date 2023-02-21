var objektum = {
    szam1: 34,
    szam2: 23,
    id: 0,
    ertek: "zöldvár4",
    Torol: Torol(),
    Szomszedok: [234,535,5235,45]
}

function Torol(){
    console.log("töröl");
}

console.log(objektum.szam1);
console.log(objektum.Szomszedok[0]);

var tabla = document.createElement("div");
var kartyaBox = document.createElement("div");
var leftSide = document.createElement("div");
var pontBox = document.createElement("div");
var korokBox = document.createElement("div");
var jatekTer = document.getElementById("jatekTer");

function jatekTerBetolt(){
    leftSide.appendChild(kartyaBox);
    leftSide.appendChild(pontBox);
    jatekTer.appendChild(leftSide);
    jatekTer.appendChild(tabla);
    jatekTer.appendChild(korokBox);
    
    kartyaBox.innerHTML = "kartya box";
    pontBox.innerHTML = "pontok";
    korokBox.innerHTML = "korok";
}

function jatekTerElrendezes(){
    leftSide.id = "leftside";
    kartyaBox.id = "kartyaBox";
    pontBox.id = "Pontbox";
    korokBox.id = "korokBox";
    tabla.id = "tabla";
}

function TablaGeneralasa(){
    var k = 0;
    for(var i = 0; i<5; i++){
        var sorDiv = document.createElement("div");
        sorDiv.classList += "sordiv";
        for(var j = 0;j<6;j++){
            var oszlopDiv = document.createElement("div");
            oszlopDiv.classList += "oszlopdiv";
            oszlopDiv.id = k;
            k++;
            sorDiv.appendChild(oszlopDiv);
        }
        tabla.appendChild(sorDiv);
    }
}

function KartyakatBelegeneral(db){
    var tomb = new Array();
    var tomb2 = new Array();
    var tomb3 = new Array();

    while(tomb.length!=db){
        var kep1 = document.createElement("img");
        var kep2 = document.createElement("img");
        var velkartyaszam = Math.floor(Math.random()*23+1);
        var velhelyszam = Math.floor(Math.random()*29+1);
        var varszam = Math.floor(Math.random()*15+1);
        if(tomb.indexOf(velkartyaszam)==-1){
            console.log(velkartyaszam);
            kep1.src = "img/"+velkartyaszam+".jpg"
            tomb.push(velkartyaszam);
        while(tomb2.length < 29 && tomb2.indexOf(velhelyszam)>-1){  
                var velhelyszam = Math.floor(Math.random()*29+1);  
                console.log(velhelyszam) 
            }
            var hely = document.getElementById(velhelyszam);
            hely.appendChild(kep1);
            tomb2.push(velhelyszam);
        }
        /*while(tomb3.length < 7){
        if(tomb2.indexOf(velhelyszam)>-1){
            kep2.src = "varak/"+varszam+".png"
            tomb2.push(velhelyszam)
            tomb3.push(varszam)
        }*/
        }
    }

function Main(){
    jatekTerBetolt();
    jatekTerElrendezes();
    TablaGeneralasa();
    KartyakatBelegeneral(23);
}
Main();
