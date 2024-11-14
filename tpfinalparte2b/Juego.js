class Juego {
  constructor() {
    this.data = new Archivos();
    this.isa = new Player(width/2, height-80, 120);
    this.obstacle = new Obstacle(width-50, height-80, 90);
    this.tigre = new Enemy();
    this.estado = "inicio";
  }

  mostrar() {
    if (this.estado === "inicio") {
      background(0, 255, 0);
      fill(255);
      rect(width/2, height-180, 100, 80);
    } else if (this.estado === "juego") {
      push();
      background(200);
      fill(255);
      rect(0, 0, 100, 50);//ganar
      rect(width-100, 0, 100, 50);//perder
      fill(0, 255, 0);
      rect(0, height-80, width, 80);//piso
      this.isa.mostrar();
      this.obstacle.mostrar();
      pop();
    } else if (this.estado === "perder") {
      background(255, 255, 0);
      fill(255);
      rect(width/2, height-180, 100, 80);
    } else if (this.estado === "ganar") {
      background(255, 0, 0);
      fill(255);
      rect(width/2, height-180, 100, 80);
    } else {
      background(0);
    }
  }

  colisiones() {
  }

  eventos(keyCode) {
    if (keyCode === RIGHT_ARROW && keyIsPressed === true) {
      this.obstacle.movimiento();
    }
  }

  estados() {
    if (this.estado==="inicio") {
      if (this.botonZona(width/2, height-180, 100, 80)) {
        console.log('click');
        this.estado = "juego";
      }
    }
    if (this.estado==="juego") {
      if (this.botonZona(width-100, 0, 100, 50)) {
        console.log('click');
        this.estado = "perder";
      } else if (this.botonZona(0, 0, 100, 50)) {
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
