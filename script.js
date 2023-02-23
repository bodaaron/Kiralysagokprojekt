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

var cellak = [];

function CellakFeltoltese(){
    for(var i= 0;i<23;i++){
        cellak[i] = {};
        cellak[i].type = "kártya";
        cellak[i].info = kartyaAdatok[i];
    }
    for(var i = 23;i<30;i++){
        cellak[i] = {};
        cellak[i].type = "vár";
        cellak[i].info = varAdatok[i-23];
    }
    console.log(cellak);
}

function CellakMegjelenitese(){
    for(var i = 0;i<cellak.length;i++){
        var index = cellak[i].info.id;
        var kep = document.createElement("img");
        if(cellak[i].type == "kártya"){
            kep.src = "img/"+index+".jpg"
        }
        else{
            kep.src = "varak/"+index+".png"
        }
        var div = document.getElementById(i);
        div.appendChild(kep);
    }
    
}

function Main(){
    console.log(kartyaAdatok[0].id);
    jatekTerBetolt();
    jatekTerElrendezes();
    TablaGeneralasa();
    KartyakatBelegeneral(23);
    CellakFeltoltese();
    CellaKeveres();
    CellakMegjelenitese();
}
Main();
