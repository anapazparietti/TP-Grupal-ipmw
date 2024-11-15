class Player {
  /*atrivutos: tiene una posición(x,y), un tamaño (alto y ancho), un sprite, una vida
   métodos: movimiento(saltar, agacharse, avanzar y retroceder), morir, chocarse
   */
  constructor(px, py, ptam) {
    this.x = px;
    this.y = py-(ptam/2)*1.5;
    this.ancho = ptam;
    this.alto = ptam*1.5;
    this.vel = 10;
    this.pSalta = false;
    //this.sprite = image(visual,px,py,ptam,ptam*1.5);//pensar en utilizar un resize, acordar de achicar las imagenes para que no sea pesado
  }
  mostrar() {
    //este rectangulo es para marcar la zona en la que colisiona el jugador
    push();
    rectMode(CENTER);
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
    this.y -=10;
    this.pSalta =! this.pSalta;
    }
    if (this.y<=height/2) {
      console.log("bajando");
      this.y += 50/this.vel;
    }
  }
}
