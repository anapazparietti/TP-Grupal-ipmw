class Player {
  /*atrivutos: tiene una posición(x,y), un tamaño (alto y ancho), un sprite, una vida
   métodos: movimiento(saltar, agacharse, avanzar y retroceder), morir, chocarse
   */
  constructor(px, py, an, al) {
    this.x = px;
    this.y = py-al;
    this.ancho = an;
    this.alto = al;
    this.vel = 10;
    this.pSalta = false;
    //this.sprite = image(visual,px,py,ptam,ptam*1.5);//pensar en utilizar un resize, acordar de achicar las imagenes para que no sea pesado
  }
  
  actualizar(){
    this.saltando()
  }
  mostrar() {
    //este rectangulo es para marcar la zona en la que colisiona el jugador
    push();
    //rectMode(CENTER);
    fill(255, 0, 0);
    rect(this.x, this.y, this.ancho, this.alto);
    pop();
    this.saltando();
  }


  
saltar(){
  this.pSalta = true;
}

  saltando() {
    if(this.pSalta){
    this.y -= 200;  // altura del salto
    this.pSalta = !this.pSalta;
    }
    if (this.y <=height-80-151) {
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
