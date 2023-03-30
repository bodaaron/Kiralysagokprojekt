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

/*console.log(objektum.szam1);
console.log(objektum.Szomszedok[0]);*/

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

var cellak = []
var kepKivalasztva = false
var kepElhelyezve = true
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
                        }  
                        console.log(tomb)
                    })
                sorDiv.appendChild(oszlopDiv);
            }
            tabla.appendChild(sorDiv);
        }
    }

    function CellaKeveres(){
        for(var i = 0;i<100;i++){
            var a = Math.floor(Math.random()*23+1);
            console.log(a);
            var sv = cellak[0];
            cellak[0] = cellak[a];
            cellak[a] = sv;
        }
    }

/*function PotHelyreGeneralas(){
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
    }*/

function KartyaboxbaGeneralas(){
    var pothely =document.getElementById("potHely")
    var i = 0;
    var j = 0;
    for(let i = 0;i<23;i++){
        var index = cellak[i].info.id;
        var kep = document.createElement("img")
        kep.src = "img/"+index+".jpg"
        kep.style.width = "200px"
        kep.value = index;
        var pothely =document.getElementById("potHely")
        pothely.appendChild(kep)
    }
}

function VarGeneralas(){
    for(let i = 0;i<varAdatok.length;i++){
        var index = varAdatok[i]//.info.id;
        var kep = document.createElement("img")
        kep.src = "img/"+index+".jpg"
        kep.style.width = "200px"
        kep.value = index;
        var pothely =document.getElementById("potHely")
        pothely.appendChild(kep)
        kep.style.visibility = "visible"
    }
}

function Main(){

    console.log(kartyaAdatok[0].id)

    jatekTerBetolt();
    jatekTerElrendezes();
    TablaGeneralasa();
    CellakFeltoltese();
    //PotHelyreGeneralas();
    CellaKeveres();
    KartyaboxbaGeneralas();
    VarGeneralas();
}
Main();
