class Player {
constructor(){
 this.x = 100;
 this.y = 100;
 this.chocar = false;
 this.vida = true;
 this.pAvanza = false;
 this.pSalta = false;
}

actualizar(){
 this.dibujo(); 
 this.avanzando();
}
  dibujo(){
   image(isaIdle[0], this.x, this.y); 
  }
  
  avanzando(){
  if(this.pAvanza===true){
    this.x+=10;
  }
  }
  
  avanzar(){
    this.pAvanza = true;
  }
  
  
  saltando(){
  if(this.pSalta===true){
    this.y+=10;
  }
  }
  
  saltar(){
    this.pSalta = true;
  }
  
}
