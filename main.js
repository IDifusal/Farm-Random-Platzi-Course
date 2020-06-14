xo = document.getElementById("granja_platzi");
papel = xo.getContext("2d");
// intentando mover al chancho con el teclado
document.addEventListener("keydown",moverChancho);
var pasito = 10;
console.log(teclas);
var chanchox =0;
var chanchoy =0;

function moverChancho(evento)
{
  
    switch(evento.keyCode)
    {
        case teclas.UP:
            chanchoy = chanchoy-pasito;
            dibujar(chanchox,chanchoy);
        break;
        case teclas.DOWN:
            chanchoy = chanchoy + pasito;
            dibujar(chanchox,chanchoy);
        break;
        case teclas.RIGHT:
            chanchox = chanchox +pasito;
            dibujar(chanchox,chanchoy);
        break;
        case teclas.LEFT:
            chanchox = chanchox - pasito;
            dibujar(chanchox,chanchoy);
        

    }
}
// Creando Objetos
var fondo={
    url:"tile.png",
    cargaOK: false
};
var vaca={
    url:"vaca.png",
    cargaOK: false
};
var pollo={
    url:"pollo.png",
    cargaOK: false
};
var cerdo={
    url :"cerdo.png",
    cargaOK: false
}
var cantidad= obtenerAleatorio(1,10)
var teclas =
{
    UP:38,
    DOWN:40,
    LEFT:37,
    RIGHT:39
};

fondo.imagen = new Image();
fondo.imagen.src=fondo.url;
fondo.imagen.addEventListener("load",cargarFondo); //Va a indicar que ya esta cargo y ejecurata

vaca.imagen= new Image();
vaca.imagen.src= vaca.url;
vaca.imagen.addEventListener("load",cargarVacas);

pollo.imagen= new Image();
pollo.imagen.src= pollo.url;
pollo.imagen.addEventListener("load",cargarPollo);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load",cargarCerdo);

function cargarFondo()
{
    fondo.cargaOK = true;
    dibujar();
}

function cargarVacas()
{
    vaca.cargaOK = true;
    dibujar();
}

function cargarPollo()
{
    pollo.cargaOK = true;
    dibujar();
}

function cargarCerdo()
{
    cerdo.cargaOK = true;
    dibujar();
}

var animalitos = obtenerAleatorio(0,10)
function dibujar()
{
    if(fondo.cargaOK)
    {
             papel.drawImage(fondo,0,0);
    }
    if(vaca.cargaOK)
    {
            for(var v=0;v<animalitos;v++)
            {
                var x = obtenerAleatorio(0,420);
                var y = obtenerAleatorio(0,420)
                papel.drawImage(vaca.imagen,x,y);
            }
           
    }
    if(pollo.cargaOK)
    {
        for(var po=0;po<animalitos;po++)
        {
            var x = obtenerAleatorio(0,420);
            var y = obtenerAleatorio(0,420)
            papel.drawImage(pollo.imagen,x,y);
        }
           
    }
    if(cerdo.cargaOK)
    {
        papel.drawImage(cerdo.imagen,chanchox,chanchoy);
    }
}






var mapa = "tile.png";

var zxc;
var fondo= new Image;
fondo.src=mapa;
fondo.addEventListener("load",dibujar)
/* function dibujar()
{
    papel.drawImage(fondo,0,0);
}
*/
function obtenerAleatorio(num_min,num_max)
{
    var resultado;
    resultado = Math.floor(Math.random()*(num_max-num_min+1))+num_min;
    return resultado
}
