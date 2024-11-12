class Player {
  constructor(px, py) {
    this.x = px;
    this.y = py;
    this.vel = 10;
    this.chocar = false;
    this.vida = true;
    this.pAvanza = false;
  }

  actualizar() {
    this.dibujo();
    this.avanzando();
  }
  dibujo() {
    image(isaIdle, this.x, this.y);
  }

  avanzando() {
    if (this.pAvanza) {
      this.y-=10;
    }
  }

  avanzar() {
    this.pAvanza = true;
  }

}
