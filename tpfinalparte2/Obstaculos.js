class Obstaculo {
  constructor(ox, oy, oTam) {
    this.x = ox;
    this.y= oy;
    this.tam= oTam;
    this.vel= 2;
    
  }
  
   actualizar() {
    this.dibujo();
    this.movimiento();  
  }
  
  
  dibujo () {
  fill (160);
  rect (this.x, this.y, this.tam, this.tam);
  }
  
  movimiento() {
     this.x-= 10/this.vel;
     if (this.x < 0-this.tam) {
       this.x = width+this.tam;
     }
     
    
  }
  
}
