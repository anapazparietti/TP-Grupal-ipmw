class Juego {
  constructor() {
    this.player = new Player(100, 300);
  }
  mostrar() {
    background(200);
    this.player.actualizar();
  }
//acá se define todo lo de las teclas y que pasa
  avanzarPersonaje(keyCode) {
    if (keyCode===UP_ARROW) {
      this.player.avanzar();
    }
  }
}
