class Player {
  constructor(px, py) {
    this.x = px;
    this.y = py;
    this.vel = 3;
    this.chocar = false;
    this.vida = true;
    this.pSalta = false;
  }

  actualizar() {
    this.dibujo();
    this.saltando();
    
  }
  
  dibujo() {
    image(isaIdle, this.x, this.y);
  }
  
 posOriginal (py) {
   this.y = py;
 }
 

  saltando() {
    if (this.pSalta) {
      this.y-=100;
      this.pSalta = !this.pSalta;
    }
    if (this.y <= 300) {
      this.y+= 10/this.vel;
    }
  }

  saltar() {
    this.pSalta = true;
  }
  
  /* colisionV(x, y, an, al) {
    let enZona = mouseX > x && mouseX < x + an && mouseY > y && mouseY < y + al;
    return enZona;
  }
  */
  
  
  agacharse() {
  }
  
  agachar(){
  }

}
