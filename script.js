var tabla = document.createElement("div")
var kartyaBox = document.createElement("div")
var leftSide = document.createElement("div")
var pontBox = document.createElement("div")
var korokBox = document.createElement("div")
var jatekTer = document.getElementById("jatekTer")

function jatekTerBetolt(){
    leftSide.appendChild(kartyaBox)
    leftSide.appendChild(pontBox)
    jatekTer.appendChild(leftSide)
    jatekTer.appendChild(tabla)
    jatekTer.appendChild(korokBox)
    
    tabla.innerHTML="tabla"
    kartyaBox.innerHTML = "kartya box"
    pontBox.innerHTML = "pontok"
    korokBox.innerHTML = "korok"
}

function jatekTerElrendezes(){
    leftSide.id = "leftside"
    kartyaBox.id = "kartyaBox"
    pontBox.id = "Pontbox"
    korokBox.id = "korokBox"
    tabla.id = "tabla"
}
jatekTerBetolt()
jatekTerElrendezes()
