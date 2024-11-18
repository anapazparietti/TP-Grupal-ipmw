class Player {
  constructor(px, py, an, al) {
    this.x = px;
    this.y = py-al;
    this.ancho = an;
    this.alto = al;
    this.vel = 10;
    this.pSalta = false;
    this.sprite = 0;
  }

  reiniciar() {
    this.x =width/2;
    this.y=height-80-150;
    this.ancho=100;
    this.alto=150;
  }

  mostrar() {
    if(keyIsPressed){
    if (this.sprite<19) {
      this.sprite++;
    } else {
      this.sprite = 0;
    }
   }
    image(imagAvanzar[this.sprite], this.x, this.y);
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
