class Juego {
  constructor() {
    this.data = new Archivos();
    this.isa = new Player(width/2, height-80, 120);
    this.obstacle = new Obstacle(width-50, height-80, 90);
    this.tigre = new Enemy();
  }

  mostrar() {
    push();
    background(200);
    fill(0, 255, 0);
    rect(0, height-80, width, 80);
    this.isa.mostrar();
    this.obstacle.mostrar();
    pop();
  }

  colisiones() {
  }

  eventos() {
    if (keyIsPressed) {
      if (keyCode === UP_ARROW) {
        this.obstacle.movimiento();
      }
    }
  }

  estados() {
  }
}
