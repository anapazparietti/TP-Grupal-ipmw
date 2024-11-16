class Player {
  /*atrivutos: tiene una posición(x,y), un tamaño (alto y ancho), un sprite, una vida
   métodos: movimiento(saltar, avanzar y retroceder), morir, chocarse
   */
  constructor(px, py, an, al) {
    this.x = px;
    this.y = py-al;
    this.ancho = an;
    this.alto = al;
    this.vel = 10;
    this.pSalta = false;
  }

  reiniciar() {
    this.x =width/2;
    this.y=height-80-150;
    this.ancho=100;
    this.alto=150;
  }

  actualizar() {
    this.saltando()
  }
  mostrar() {
    //este rectangulo es para marcar la zona en la que colisiona el jugador
    push();
    noFill();
    rect(this.x, this.y, this.ancho, this.alto);
    image(imagAvanzar[0], this.x, this.y);
    pop();
    this.saltando();
  }

  saltar() {
    this.pSalta = true;
  }

  saltando() {
    if (this.pSalta) {
      this.y -= 200;  // altura del salto
      this.pSalta = !this.pSalta;
    }
    if (this.y <height-231) {
      console.log("bajando");
      this.y += 50/this.vel;
    }
  }

  calcularColision(x, an) {
    if (this.x>x && this.x<x+an && this.y<height) {
      return true;
    }
  }
}
