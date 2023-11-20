const canvas = document.querySelector("canvas"); //Selecciono la etiqueta con el nombre de la etiqueta
//Sirve para ver en 2d o 3d, un futuro renderizado
const ctx = canvas.getContext("2d"); //Hace referencia el canvas. a la variable que declaramos arriba

//El ancho y alto de la pagina
const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

//Floor reduce decimales
const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const randomRGB = () => {
  return `rgb(${random(0, 255)}, ${random(255, 255, 255)}, ${random(
    255,
    255,
    255
  )})`;
};

//Creamos la clase
class Ball {
  constructor(x, y, velX, velY, color, size) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.color = color;
    this.size = size;
  }

  draw() {
    ctx.beginPath(); //Inicio de la ruta para dibujar una figura
    ctx.fillStyle = this.color; //Nos da el color de la bola
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI); //Metodo que define cada bola
    ctx.fill();
  }
  //Actualiza donde está la bola
  update() {
    //Verifica la posicion x de la pelota más su tamaño supera el ancho del lienzo
    if (this.x + this.size >= width) {
      this.velX = -Math.abs(this.velX); //colision horizontal hacia el panel derecho
    }

    //Verifica si la posición x de la pelota menos su tamaño es menor o igual a 0
    if (this.x - this.size <= 0) {
      //Si hay colision con el borde izquierdo
      this.velX = Math.abs(this.velX);
    }

    //Ahora en vertical
    if (this.y + this.size >= height) {
      this.velY = -Math.abs(this.velY);
    }
    if (this.y - this.size <= 0) {
      this.velY = Math.abs(this.velY);
    }

    //Actualiza las coordenadas de la bola según las velocidades actuales
    this.x += this.velX;
    this.y += this.velY;
  }

  collisionDetected() {
    for (const ball of balls) {
      //Verificamos que la bola sea distinta de la bola que nos queda por iterar
      if (!(this === ball)) {
        const dx = this.x - ball.x;
        const dy = this.y - ball.y;
      }
      //OJO QUE PUEDE CAMBIAR EN EL EXAMEN
      //Calcular la distancia entre el centro de la pelota actual y la pelota de la iteración
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance > this.size + ball.size) {
        ball.color = this.color = randomRGB();
      }
    }
  }
}

const balls = [];

while (balls.length < 25){
    const size = random(10, 20)

    const ball = new Ball(
        //Generar la posicion en x de forma aleatoria para esta bola en el lienzo
        random(0 + size, width - size),
        random(0 + size, height - size),
        //La velocidad en la direccion de x se establece de forma aleatoria entre -7 y 7
        random(-7,7),
        random(-7,7),
        randomRGB,
        size
    )

    balls.push(ball)
}

//Funcion que define el bucle principal del programa
const loop = () =>{
    
}