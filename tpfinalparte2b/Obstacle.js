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

  reiniciar() {
    this.x = width-50;
    this.y = height-80-90;
    this.ancho = 90;
    this.alto = 90;
  }

  mostrar() {
    push();
    noFill();
    rect(this.x, this.y, this.ancho, this.alto);
    pop();
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
