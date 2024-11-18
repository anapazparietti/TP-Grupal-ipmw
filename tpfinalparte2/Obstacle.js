class Obstacle {
  constructor(ox, oy, an, al) {
    this.x = ox;
    this.y = oy-al;
    this.ancho = an;
    this.alto = al;
  }

  reiniciar() {
    this.x = width-50;
    this.y = height-80-90;
    this.ancho = 90;
    this.alto = 90;
  }

  mostrar() {
    image(imagenes[5], this.x, this.y, this.ancho, this.alto);
  }


  movimientoAvanzan() {
    console.log("personaje avanza");
    this.x -= 5;
  }
  movimientoRetroceden() {
    console.log("personaje retrocede");
    this.x += 5;
  }

  calcularColision(x, y, an, al) {
    if (this.x>x && this.x<x+an && this.y>y && this.y<y+al ) {
      return true;
    }
  }
}
