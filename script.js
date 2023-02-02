var tabla = document.createElement("div")
var kartyaBox = document.createElement("div")
var pontBox = document.createElement("div")
var korokBox = document.createElement("div")
var jatekTer = document.getElementById("jatekTer")

function jatekTerBetolt(){
    jatekTer.appendChild(kartyaBox)
    jatekTer.appendChild(PotBox)
    jatekTer.appendChild(tabla)
    jatekTer.appendChild(korokBox)
    
    tabla.innerHTML="tabla"
    kartyaBox.innerHTML = "kartya box"
    pontBox.innerHTML = "pontok"
    korokBox.innerHTML = "korok"
}

function jatekTerElrendezes(){
    kartyaBox.id = "kartyaBox"
}
jatekTerBetolt()
jatekTerElrendezes()
