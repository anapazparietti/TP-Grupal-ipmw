class Juego{
 constructor(){
  this.player = new Player();
  
}
  mostrar(){
  this.player.actualizar();
  }
  
  avanzarPersonaje(){
    this.player.avanzar();
  }
}
