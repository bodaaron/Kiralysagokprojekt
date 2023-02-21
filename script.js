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
    //egy kártyát kiválaszt és elhelyez az első mezőben
    for(var i  = 0; i<db; i++){
        var velkartyaszam = Math.floor(Math.random()*23+1);
        var kep1 = document.createElement("img");
        kep1.src = "img/"+velkartyaszam+".jpg";
        var velhelyszam = Math.floor(Math.random()*30+1);
        var hely = document.getElementById(velhelyszam);
        hely.appendChild(kep1);

    }
    //hf háttérszínek
    // hf csináld meg hogy ne legyen ismétlődés helyek és számok között
}


function Main(){
    jatekTerBetolt();
    jatekTerElrendezes();
    TablaGeneralasa();
    KartyakatBelegeneral(23);

}
Main();
