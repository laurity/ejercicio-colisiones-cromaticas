const canvas = document.querySelector('canvas'); //Selecciono la etiqueta con el nombre de la etiqueta
//Sirve para ver en 2d o 3d 
const ctx = canvas.getContext('2d'); //Hace referencia el canvas. a la variable que declaramos arriba

//El ancho y alto de la pagina
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

//Floor reduce decimales
const random = (min, max) =>{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomRGB = () => {
    return `rgb(${random(0,255)}, ${random(255,255,255)}, ${random(255,255,255)})`;
}

//Creamos la clase
class Ball {
    constructor(x, y, velX, velY, color, sizeX, sizeY) {
        this.x = x;
        this.y = y;
        this.velX = velX;
        this.velY = velY;
        this.color = color;
        this.sizeX = sizeX;
        this.sizeY = sizeY;
    }
    constructor(){  //Constructor vacío

    }
}