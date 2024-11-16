class Enemy {
  constructor(px, py, an, al) {
    this.x = px;
    this.y = py-al;
    this.ancho = an;
    this.alto = al;
  }
  reiniciar() {
    this.x = -100;
    this.y = height-80-200;
    this.ancho = 100;
    this.alto = 200;
  }
  mostrar() {
    image(imagenes[3], this.x-this.alto/2, this.y+20, this.alto,this.alto);
  }
  movimientoAvanza() {
    this.x += 1;
  }
}
