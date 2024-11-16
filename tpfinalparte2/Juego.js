class Juego {
  constructor() {
    this.isa = new Player(width/2, height-80, 100, 150);
    this.obstacle = new Obstacle(width-50, height-80, 90, 90);
    this.tigre = new Enemy(-10, height-80, 100, 200);
    this.meta = new Meta(width*4, height-80, 100, 200);
    this.estado = "inicio";
    this.menu= new Portada(0, 0);
    this.fondo = new Fondo(0, -50, 1280, 480);
    
  }

  mostrar() {//aca solo se muestra la pantalla actual
    if (this.estado === "inicio") {
      this.menu.mostrar();
    } else if (this.estado === "juego") {
      this.pantJuego();
    } else if (this.estado === "perder") {
      this.pantPerder();
    } else if (this.estado === "ganar") {
      this.pantGanar();
    } else {
      background(0);
    }
  }

  colisiones(x1, x2, y1, y2, an2, al2) {
    if (x1>x2 && x1<x2+an2 && y1>y2 && y1<y2+al2 ) {
      return true;
    }
  }

  pantJuego() {
    background(0);
    this.fondo.mostrar();
    fill(121, 59, 21);
    rect(0, height-80, width, 80);//piso
    this.tigre.mostrar();
    this.isa.mostrar();
    this.meta.mostrar();
    this.obstacle.mostrar();

    //---------------COLISIONES------------------
    //los obstaculos desaparecen y reaparecen---
    if (this.obstacle.calcularColision(this.tigre.x, this.tigre.y, this.tigre.ancho, this.tigre.alto)) {
      console.log("CHOCO");
      this.obstacle.x=this.obstacle.x+width+this.obstacle.ancho;
    }
    //los obstaculos se chocan con isa---
    if (this.obstacle.calcularColision(this.isa.x, this.isa.y, this.isa.ancho, this.isa.alto)) {
      console.log("toque a isa");
      this.obstacle.x=this.isa.x+this.isa.ancho;
    }
    //PERDER----
    if (this.isa.calcularColision(this.tigre.x, this.tigre.ancho)) {
      console.log("Tigre tocó a Isa");
      this.estado = "perder";
    }
    //GANAR----
    if (this.isa.calcularColision(this.meta.x, this.meta.ancho)) {
      console.log("ganaste :)");
      this.estado = "ganar";
    }
  }
  //--------PANTALLAS
  pantPerder() {
    image(imagenes[1], 0, 0);
    fill(165, 13, 16);
    rect(width-200, height-100, 150, 50);
    fill (255);
    textSize (20);
    textAlign(CENTER, CENTER);
    text ("Ir a menu", width-200, height-100, 150, 50);
  }

  pantGanar() {
    image(imagenes[2], 0, 0);
    fill(234, 83, 172);
    rect(0, 0, 150, 50);
    fill (255);
    textSize (20);
    textAlign(CENTER, CENTER);
    text ("Ir a menu", 0, 0, 150, 50);
  }

  //---------TECLAS Y MOVIMIENTO---------
  eventos(keyCode) {
    if (keyCode === RIGHT_ARROW) {
      this.obstacle.movimientoAvanzan();
      this.meta.movimientoAvanzan();
      this.fondo.movimientoAvanzan();
    }
    if (keyCode === LEFT_ARROW) {
      this.obstacle.movimientoRetroceden();
      this.tigre.movimientoAvanza();
      this.meta.movimientoRetroceden();
      this.fondo.movimientoRetroceden();
    }
  }
  tecla(keyCode) {
    if (keyCode === UP_ARROW && this.isa.y>0+this.isa.alto) {
      console.log("UP");
      this.isa.saltar();
      this.obstacle.movimientoAvanzan();
    }
  }
  tigreAtaca() {
    if (this.estado==="juego") {
      this.tigre.movimientoAvanza();
    }
  }

  //--------MAQUINA DE CAMBIO DE ESTADOS------
  estados() {
    if (this.estado==="inicio") {
      if (this.botonZona(width-200, height-100, 150, 50)) {
        console.log('click');
        this.estado = "juego";
        this.tigre.reiniciar();
        this.meta.reiniciar();
        this.isa.reiniciar();
        this.obstacle.reiniciar();
      }
    }
    if (this.estado==="juego") {
      if (this.botonZona(0, 0, 100, 50)) {
        this.estado ="ganar";
      }
    }
    if (this.estado==="perder") {
      if (this.botonZona(width-200, height-100, 150, 50)) {
        console.log('click');
        this.estado = "inicio";
      }
    }
    if (this.estado==="ganar") {
      if (this.botonZona(0, 0, 150, 50)) {
        console.log('click');
        this.estado = "inicio";
      }
    }
  }

  botonZona(x, y, ancho, alto) {
    return mouseX > x && mouseX < x+ancho && mouseY > y && mouseY < y+alto;
  }
}

//CLASE PORTADA----------------------
class Portada {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  mostrar() {
    push();
    image(imagenes[0], this.x, this.y);
    fill(51, 75, 109);
    rect(width-200, height-100, 150, 50);
    fill (255);
    textSize (20);
    textAlign(CENTER, CENTER);
    text ("comenzar", width-200, height-100, 150, 50);
    pop();
  }
}
