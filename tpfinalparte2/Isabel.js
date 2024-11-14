class Player {
  constructor(px, py) {
    this.x = px;
    this.y = py;
    this.vel = 10;
    this.vida = true;
    this.pSalta = false;
    //tamaño
  }

  actualizar() {
    this.dibujo();
    this.saltando();
    this.teclaPresionada();
  }
  dibujo() {
    image(isaIdle, this.x, this.y);
    noFill();
    rect(this.x, this.y, 100, 105);
  }
  saltar() {
    this.pSalta = true;
  }

  saltando() {
    if (this.pSalta) {
      this.y-=100;
      this.pSalta =! this.pSalta;
    }
    if (this.y <= 300) {
      this.y += 50/this.vel;
    }
  }

  calcularColision(_x, _y, _tam) {
    if (this.x+100>_x && this.x<_x+_tam/2 && this.y+50>_y && this.y+50<_y+_tam/2) {
      return true;
    }
  }
  //teclas jugador---
  teclaPresionada() {
    if (keyIsPressed && keyCode == LEFT_ARROW) {
      this.moverIzquierda();
      console.log("flecha izq");
    } else if (keyIsPressed && keyCode == RIGHT_ARROW) {
      this.moverDerecha();
    }
  }

  moverDerecha() {
    if (this.posx<width-100) {
      this.posx ++;
    }
  }

  moverIzquierda() {
    if (this.posx>0) {
      this.posx --;
    }
  }
}
