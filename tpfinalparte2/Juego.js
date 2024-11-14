class Juego {
  constructor() {
    this.player = new Player(width/2, 300);
    this.obstaculo= new Obstaculo (width/2+130, 350, 50);
  }
  mostrar() {
    background(200);
    this.player.actualizar();
    this.obstaculo.actualizar();

    if (this.player.calcularColision(this.obstaculo.x, this.obstaculo.y, this.obstaculo.tam)) {
      console.log("CHOCO");
      this.player.x--;
      this.obstaculo.x=this.player.x+100;
    }
  }

  //acá se define todo lo de las teclas y que pasa
  avanzarPersonaje(keyCode) {
    if (keyCode===UP_ARROW) {
      this.player.saltar();
    }
  }
}
