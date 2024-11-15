class Obstacle {
  /*atrivutos: tiene una posición(x,y), un tamaño (alto y ancho), un sprite
   métodos: movimiento(se mueve en sentido contrario al jugador)-->avanza y retrocede
   */
  constructor(ox, oy, an, al) {
    this.x = ox;
    this.y = oy-al;
    this.ancho = an;
    this.alto = al;
    //this.sprite = image(visual,px,py,ptam,ptam*1.5);//pensar en utilizar un resize, acordar de achicar las imagenes para que no sea pesado
  }

  mostrar() {
    push();
    fill(0, 0, 255);
    rect(this.x, this.y, this.ancho, this.alto);
    pop();
  }

  movimientoAvanzan() {
    this.x -= 5;
  }
  movimientoRetroceden() {
    this.x += 5;
  }
  
  calcularColision(x,an) {
    if (this.x<x+an) {
      return true;
    }
  }
}
