/*

class Main {
  constructor() {
    this.flecha = new Flecha();
    this.dianas = [];
    for (let i=0; i<10; i++) {
      this.dianas[i] = new Diana(random(width/2, width), i*10, 50);//acá le mete los parametros, en donde van a arrancar las cosas
    }

    this.contador = 0;
  }
  
class Diana {
  constructor(_x, _y, _d) {
    this.x = _x;
    this.y = _y;
    this.d = _d;

    this.vel = random(1, 3);
  }
---para los obstaculos que vuelvan a aparecer
 mover() {
    if (this.y > height+this.d) {
      this.reset();
    }
    this.y += this.vel;
  }

SIEMPRE QUE SE LLAMA ALGO HAY QUE PONERLE () AL FINAL

Los obstáculos están fuera de la pantalla, se dibujan en un rango aleatorio. Se van y vuelven a ingresar colocándose en el mismo lugar. 
Que vengan con una misma distancia de separación. Esos parámetros que se les crea va a ir con un valor random entre ciertos parámetros. 
El orden de los objetos también se debería de poder cambiar (cosas arriba y abajo)
Chequear herencias...
Suffle...(aleatoriamente muestra una cosa u otra) investigar como hacerlo
Tiene tres imágenes.


class Principal {
  constructor() {
    this.car = [];
    for (let i=0; i<5; i++) {
      this.car[i] = new Auto(random(50,400), 30+i*100, random(50, 80), random(30, 60));
    }
  }
  display() {
    for (let i=0; i<5; i++) {
      this.car[i].dibujarAuto();
    }
  }
  detener() {
    for (let i=0; i<5; i++) {
      this.car[i].detenerAuto();
    }
  }
}

 detenerAuto() {
    if (this.deteniendo(this.ax, this.ay, this.ancho, this.alto)) {
      this.activo = !this.activo;
      this.girarRueda = !this.girarRueda;
    }
  }
  deteniendo(x, y, an, al) {
    let enZona = mouseX > x && mouseX < x + an && mouseY > y && mouseY < y + al;
    return enZona;
  }
  
  chocar() {
    for (let i=0; i<this.dianas.length; i++) {
      let distan = dist(this.flecha.x, this.flecha.y, this.dianas[i].x, this.dianas[i].y);
      if (distan < this.dianas[i].d/2) {
        this.dianas[i].reset();
        this.contador++;
}

*/
