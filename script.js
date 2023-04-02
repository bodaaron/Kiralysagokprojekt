var kartyaAdatok=[
    {id:1,value:-3,sign:''},
    {id:2,value:2,sign:''},
    {id:3,value:5,sign:''},
    {id:4,value:4,sign:''},
    {id:5,value:3,sign:''},
    {id:6,value:0,sign:'pap'},
    {id:7,value:-6,sign:''},
    {id:8,value:6,sign:''},
    {id:9,value:0,sign:'taliga'},
    {id:10,value:2,sign:''},
    {id:11,value:0,sign:'hegy'},
    {id:12,value:-5,sign:''},
    {id:13,value:4,sign:''},
    {id:14,value:0,sign:'sarkany'},
    {id:15,value:5,sign:''},
    {id:16,value:6,sign:''},
    {id:17,value:-4,sign:''},
    {id:18,value:1,sign:''},
    {id:19,value:-1,sign:''},
    {id:20,value:-2,sign:''},
    {id:21,value:1,sign:''},
    {id:22,value:3,sign:''},
    {id:23,value:0,sign:'hegy'},
]
var varAdatok = [
    {id:1,color:1,value:1},
    {id:2,color:1,value:2},
    {id:3,color:1,value:3},
    {id:4,color:1,value:4},
    {id:5,color:2,value:1},
    {id:6,color:2,value:2},
    {id:7,color:2,value:3},
    {id:8,color:2,value:4},
    {id:9,color:3,value:1},
    {id:10,color:3,value:2},
    {id:11,color:3,value:3},
    {id:12,color:3,value:4},
    {id:13,color:4,value:1},
    {id:14,color:4,value:2},
    {id:15,color:4,value:3},
    {id:16,color:4,value:4},
]

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

var cellak = []
var tomb = []
var kep1 = document.createElement("img")

function CellakFeltoltese(){
    for(var i = 0; i < 23; i++){
        cellak[i] = []
        cellak[i].tpye = "kártya"
        cellak[i].info =  kartyaAdatok[i]
    }
    for(var i = 23; i < 30;i++){
        cellak[i] = []
        cellak[i].tpye = "vár"
        cellak[i].info = varAdatok[i-23]
    }

}

var tabla = document.createElement("div");
var kartyaBox = document.createElement("div");
var leftSide = document.createElement("div");
var pontBox = document.createElement("div");
var korokBox = document.createElement("div");
var jatekTer = document.getElementById("jatekTer");
var kepKivalasztva = false;
var kepElhelyezve = true;
var kepIndex;

var cellak = [];
var kepKivalasztva = false;
var kepElhelyezve = true;
var kepIndex;
var ertek;

var cellak = []
var varKivalasztva = false
var varElhelyezve = true
var kepIndex;

function jatekTerBetolt(){
    leftSide.appendChild(kartyaBox);
    leftSide.appendChild(pontBox);
    jatekTer.appendChild(leftSide);
    jatekTer.appendChild(tabla);
    jatekTer.appendChild(korokBox);
    
    
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

            oszlopDiv.addEventListener("click",function(){
                        var pothely =document.getElementById("potHely")
                        if(kepKivalasztva && !kepElhelyezve && !(tomb.indexOf(this.id)>-1)){
                            kepElhelyezve = true;
                            kepKivalasztva = false;
                            var kep = document.createElement("img");
                            kep.src = "img/"+kepIndex+".jpg";
                            this.appendChild(kep);
                            tomb.push(this.id)
                            pothely.removeChild(kep1)
                            OszlopErtekeles(this.id,ertek)
                            SorErtekeles(this.id,ertek,jel)
                        }  
                    })
            oszlopDiv.addEventListener("click",function(){
                        if(varKivalasztva && !varElhelyezve && !(tomb.indexOf(this.id)>-1)){
                            varElhelyezve = true;
                            varKivalasztva = false;
                            var kep = document.createElement("img");
                            kep.src = "varak/"+kepIndex+".png";
                            this.appendChild(kep);
                            tomb.push(this.id)
                        }  
                    })
                sorDiv.appendChild(oszlopDiv);
            }
            tabla.appendChild(sorDiv);
        }
    }

    function CellaKeveres(){
        for(var i = 0;i<100;i++){
            var a = Math.floor(Math.random()*22);
            var b = Math.floor(Math.random()*22)
            console.log(a);
            /*var sv = kartyaAdatok[0];
            kartyaAdatok[0] = kartyaAdatok[a];
            kartyaAdatok[a] = sv;*/
            var sv = cellak[a];
            cellak[a] = cellak[b];
            cellak[b] = sv;
        }
}


var o0 = [];
var o1 = [];
var o2 = [];
var o3 = [];
var o4 = [];
var o5 = [];

function OszlopErtekeles(id,ertek0){
    if(id == 0 || id == 6 || id == 12 || id == 18 || id == 24){
        if(ertek0 > 0 || ertek0 < 0){
            o0.push(ertek0);
        }
        else if(ertek0 == 0){
            o0.push(jel);
        }
    }
    else if(id == 1 || id == 7 || id == 13 || id == 19 || id == 25){
        if(ertek0 > 0 || ertek0 < 0){
            o1.push(ertek0);
        }
        else if(ertek0 == 0){
            o1.push(jel);
        }
    }
    else if(id == 2 || id == 8 || id == 14 || id == 20 || id == 26){
        if(ertek0 > 0 || ertek0 < 0){
            o2.push(ertek0);
        }
        else if(ertek0 == 0){
            o2.push(jel);
        }
    }
    else if(id == 3 || id == 9|| id == 15 || id == 21 || id == 27){
        if(ertek0 > 0 || ertek0 < 0){
            o3.push(ertek0);
        }
        else if(ertek0 == 0){
            o3.push(jel);
        }
    }
    else if(id == 4 || id == 10 || id == 16 || id == 22 || id == 28){
        if(ertek0 > 0 || ertek0 < 0){
            o4.push(ertek0);
        }
        else if(ertek0 == 0){
            o5.push(jel);
        }
    }
    else if(id == 5 || id == 11 || id == 17 || id == 23 || id == 29){
        if(ertek0 > 0 || ertek0 < 0){
            o5.push(ertek0);
        }
        else if(ertek0 == 0){
            o5.push(jel);
        }
    }
    console.log(o0,o1,o2,o3,o4,o5)
}

var s0 = [];
var s1 = [];
var s2 = [];
var s3 = [];
var s4 = [];
var s5 = [];
function SorErtekeles(id,ertek0){
    console.log(id)
    if(id == 0 || id == 1 || id == 2 || id == 3 || id == 4 || id == 5){
        if(ertek0 > 0 || ertek0 < 0){
            s0.push(ertek0);
        }
        else if(ertek0 == 0){
            s0.push(jel);
        }
    }
    else if(id == 6 || id == 7 || id == 8 || id == 9 || id == 10 || id == 11){
        if(ertek0 > 0 || ertek0 < 0){
            s1.push(ertek0);
        }
        else if(ertek0 == 0){
            s1.push(jel);
        }
    }
    else if(id == 12 || id == 13 || id == 14 || id == 15 || id == 16 || id == 17){
        if(ertek0 > 0 || ertek0 < 0){
            s2.push(ertek0);
        }
        else if(ertek0 == 0){
            s2.push(jel);
        }
    }
    else if(id == 18 || id == 19|| id == 20 || id == 21 || id == 22 || id == 23){
        if(ertek0 > 0 || ertek0 < 0){
            s3.push(ertek0);
        }
        else if(ertek0 == 0){
            s3.push(jel);
        }
    }
    else if(id == 23 || id == 24 || id == 25 || id == 26 || id == 27 || id == 28){
        if(ertek0 > 0 || ertek0 < 0){
            s4.push(ertek0);
        }
        else if(ertek0 == 0){
            s4.push(jel);
        }
    }
}
/*
function PotHelyreGeneralas(){
        for(var i = 0;i<23;i++){
        var index = cellak[i].info.id;
        var kep = document.createElement("img")
        kep.src = "img/"+index+".jpg"
        kep.style.width = "200px"
        kep.value = index; //kep indexét tárolom
    
        kep.addEventListener("click",function(){
            if(!kepKivalasztva && kepElhelyezve){
                kepIndex = kep.value
                kepKivalasztva = true
                this.style.visibility = "hidden"
                kepElhelyezve = false
            }
        })
    
        var pothely =document.getElementById("potHely")
        pothely.appendChild(kep)
    }
    }
*/

function KartyaboxbaGeneralas(){
    var pothely =document.getElementById("potHely");
    var  i = 0;
    var db = 0;
    var kep = document.createElement("img")
    kartyaBox.addEventListener("click",function(){
        var index = cellak[i].info.id
        ertek = cellak[i].info.value
        jel = cellak[i].info.sign
        kep.src = "img/"+index+".jpg";
            if(!kepKivalasztva && kepElhelyezve && db<23){
                kepIndex = index;
                kep1.src = "img/"+kepIndex+".jpg";
                kepKivalasztva = true;
                kepElhelyezve = false;
                pothely.appendChild(kep1);
                kep1.style.width = "200px";   
                kep1.style.visibility = "visible"
                i++;
                db++;
            }    
        }) 
    }

function VarGeneralas(){
    for(let i = 1;i<8;i++){
        //var index = varAdatok[i].info.id;
        if(i<5){
            var kep = document.createElement("img")
            kep.src = "varak/"+1+".png"
            kep.style.width = "150px"
            kep.value = 1;
            var varhely =document.getElementById("varhely")
            varhely.appendChild(kep)
            kep.style.visibility = "visible";
        }
        if(i==5){
            var kep = document.createElement("img")
            kep.src = "varak/"+2+".png"
            kep.style.width = "150px"
            kep.value = 2;
            var varhely =document.getElementById("varhely")
            varhely.appendChild(kep)
            kep.style.visibility = "visible";
        }
        if(i==6){
            var kep = document.createElement("img")
            kep.src = "varak/"+3+".png"
            kep.style.width = "150px"
            kep.value = 3;
            var varhely =document.getElementById("varhely")
            varhely.appendChild(kep)
            kep.style.visibility = "visible";
        }
        if(i==7){
            var kep = document.createElement("img")
            kep.src = "varak/"+4+".png"
            kep.style.width = "150px"
            kep.value = 4;
            var varhely =document.getElementById("varhely")
            varhely.appendChild(kep)
            kep.style.visibility = "visible";
        }
        kep.addEventListener("click",function(){
            if(!varKivalasztva && varElhelyezve){
                kepIndex = this.value
                varKivalasztva = true
                this.style.visibility = "hidden"
                varElhelyezve = false
            }
        })
        
    }

}


function Main(){

    jatekTerBetolt();
    jatekTerElrendezes();
    TablaGeneralasa();
    CellakFeltoltese();
    CellaKeveres();
    //PotHelyreGeneralas();
    console.log(cellak)
    KartyaboxbaGeneralas();
    VarGeneralas();
}
Main();