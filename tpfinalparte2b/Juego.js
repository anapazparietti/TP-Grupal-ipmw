//ACORDARSE DE QUE EL JUEGO SE DEBE REINICIAR
class Juego {
  constructor() {
    //this.data = new Archivos();
    this.isa = new Player(width/2, height-80, 100, 150);
    this.obstacle = new Obstacle(width-50, height-80, 90, 90);
    this.tigre = new Enemy(0, height-80, 100, 200);
    this.meta = new Meta(width*4, height-80, 100, 200);
    this.estado = "inicio";
    this.menu= new Portada();
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
    push();
    background(200);
    fill(255);
    rect(0, 0, 100, 50);//ganar
    fill(0, 255, 0);
    rect(0, height-80, width, 80);//piso
    this.obstacle.mostrar();
    this.tigre.mostrar();
    this.isa.mostrar();
    this.meta.mostrar();
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
    
    pop();
  }

  pantPerder() {
    background(255, 255, 0);
    fill(255);
    rect(width/2, height-180, 100, 80);
  }

  pantGanar() {
    background(255, 0, 0);
    fill(255);
    rect(width/2, height-180, 100, 80);
  }

  //TECLAS---------
  eventos(keyCode) {//cambiar eventos(nombre) por teclaIsPressed
    if (keyCode === RIGHT_ARROW) {
      this.obstacle.movimientoAvanzan();
      this.meta.movimientoAvanzan();
    }
    if (keyCode === LEFT_ARROW) {
      this.obstacle.movimientoRetroceden();
      this.tigre.movimientoAvanza();
      this.meta.movimientoRetroceden();
    }
  }
  tecla(keyCode) {
    if (keyCode === UP_ARROW) {
      console.log("UP");
      this.isa.saltar();
    }
  }


  estados() {
    if (this.estado==="inicio") {
      if (this.botonZona(width-200, height-100, 150, 50)) {
        console.log('click');
        this.estado = "juego";
      }
    }
    if (this.estado==="juego") {
      if (this.botonZona(0, 0, 100, 50)) {
        this.estado ="ganar";
      }
    }
    if (this.estado==="perder") {
      if (this.botonZona(width/2, height-180, 100, 80)) {
        console.log('click');
        this.estado = "inicio";
      }
    }
    if (this.estado==="ganar") {
      if (this.botonZona(width/2, height-180, 100, 80)) {
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
    this.alineacion = imageMode(CENTER);
    this.portada = loadImage("data/portada.jpg");
  }

  mostrar() {
    push();
    this.portada.resize(640, 480);
    image(this.portada, width/2, height/2);
    fill(51, 75, 109);

    rect(width-200, height-100, 150, 50);
    fill (255);
    textSize (20);
    textAlign(CENTER, CENTER);
    text ("comenzar", width-200, height-100, 150, 50);
    pop();
  }

}
