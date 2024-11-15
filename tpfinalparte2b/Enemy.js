class Enemy {
  /*atrivutos: tiene una posición(x,y), un tamaño (alto y ancho), un sprite
   métodos: movimiento(avanzar--->si isa retrocede, si se queda quieta y si se acaba el tiempo]), chocarse(con isa y destruye los objetos a su paso)
   */
  constructor(px, py, an, al) {
    this.x = px;
    this.y = py-al;
    this.ancho = an;
    this.alto = al;
    //this.sprite = image(visual,px,py,ptam,ptam*1.5);//pensar en utilizar un resize, acordar de achicar las imagenes para que no sea pesado
  }
  mostrar() {
    push();
    fill(232, 93, 0);
    rect(this.x, this.y, this.ancho, this.alto);
    pop();
  }

  movimientoAvanza() {
    this.x += 5;
  }

  calcularColision(x,an) {
    if (this.x+this.ancho>x-an/2) {
      return true;
    }
  }
}
