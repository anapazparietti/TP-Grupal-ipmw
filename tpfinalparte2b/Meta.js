class Meta {
  constructor(px, py, an, al) {
    this.x = px;
    this.y = py-al;
    this.ancho = an;
    this.alto = al;
    //this.sprite = image(visual,px,py,ptam,ptam*1.5);//pensar en utilizar un resize, acordar de achicar las imagenes para que no sea pesado
  }
  
  reiniciar(){
    this.x = width*4;
    this.y = height-80-200;
    this.ancho = 100;
    this.alto = 200;
  }
  mostrar() {
    push();
    noFill();
    rect(this.x, this.y, this.ancho, this.alto);
    image(imagenes[6], this.x, this.y, this.ancho, this.alto);
    pop();

  }

  movimientoAvanzan() {
    console.log("se acerca a la meta");
    this.x -= 5;
  }
  movimientoRetroceden() {
    console.log("se aleja de lameta");
    this.x += 5;
  }
}
