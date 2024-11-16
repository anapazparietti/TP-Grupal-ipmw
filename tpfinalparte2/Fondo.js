class Fondo {
  constructor(fx, fy, an, al) {
    this.x = fx;
    this.y = fy;
    this.ancho=an;
    this.alto=al;
  }
  reiniciar() {
    this.x=0;
    this.y=0;
  }

actualizar(){
if (this.x <= -this.ancho) {
      this.x = 0;
}
}

  mostrar() {
    this.actualizar();
    image(imagenes[4], this.x, this.y, this.ancho, this.alto);
    image(imagenes[4], this.x + this.ancho, this.y, this.ancho, this.alto);
  }
  movimientoAvanzan() {
    console.log("personaje avanza");
    this.x -= 5;
  }
  movimientoRetroceden() {
    console.log("personaje retrocede");
    this.x += 5;
  }
}
