class Juego {
  constructor() {
    this.player = new Player(width/2, 300);
    this.obstaculo= new Obstaculo (width/2+130, 350, 50);
  }
  mostrar() {
    background(200);
    this.player.actualizar();
    this.obstaculo.actualizar();
  }
  
  
  chocar (){
    let distan = dist (this.player.x, this.player.y, this.obstaculo.x, this.obstaculo.y);
    if (distan < this.obstaculo.this.tam/2) {
      this.player.x = -10;
    }
 
  }
  
//acá se define todo lo de las teclas y que pasa
  avanzarPersonaje(keyCode) {
    if (keyCode===UP_ARROW) {
      this.player.saltar();
    }
  }
}
