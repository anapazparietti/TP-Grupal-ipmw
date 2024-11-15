//ACORDARSE DE QUE EL JUEGO SE DEBE REINICIAR
class Juego {
  constructor() {
    this.data = new Archivos();
    this.isa = new Player(width/2, height-80, 100);
    this.obstacle = new Obstacle(width-50, height-80, 90, 90);
    this.tigre = new Enemy(0, height-80, 100, 200);
    this.estado = "inicio";
  }

  mostrar() {//que aca se llame solo la pantalla actual, y haya un método (o una clase) en el que se expecifica que se ve en cada pantalla
    
    if (this.estado === "inicio") {
      this.pantInicio();
      
    } else if (this.estado === "juego") {
      this.pantJuego();
      
    } else if (this.estado === "perder") {
      this.pantPerder();
      
    } else if (this.estado === "ganar") {
      this.pantGanar();
      
    } else {
      background(0);
    }
  }

  colisiones() {
  }
  
  pantInicio(){
    background(0, 255, 0);
    fill(255);
    rect(width/2, height-180, 100, 80);
  }
  
  pantJuego(){
    push();
      background(200);
      fill(255);
      rect(0, 0, 100, 50);//ganar
      //rect(width-100, 0, 100, 50);//perder
      fill(0, 255, 0);
      this.tigre.mostrar();
      rect(0, height-80, width, 80);//piso
      this.isa.mostrar();
      this.obstacle.mostrar();
      //los obstaculos desaparecen y reaparecen---
      if (this.obstacle.calcularColision(this.tigre.x, this.tigre.ancho)) {
        console.log("CHOCO");
        this.obstacle.x=this.obstacle.x+width+this.obstacle.ancho;
      }
      //PERDER----
      if (this.tigre.calcularColision(this.isa.x, this.isa.ancho)) {
        console.log("tigre toca a isa");
        this.estado = "perder";
      }
      pop();
  }
  
  pantPerder(){
     background(255, 255, 0);
     fill(255);
     rect(width/2, height-180, 100, 80);
  }
  
  pantGanar() {
    background(255, 0, 0);
    fill(255);
    rect(width/2, height-180, 100, 80);
  }

  eventos(keyCode) {//cambiar eventos(nombre) por teclaIsPressed
    if (keyCode === RIGHT_ARROW) {
      this.obstacle.movimientoAvanzan();
    }
    if (keyCode === LEFT_ARROW) {
      this.obstacle.movimientoRetroceden();
      this.tigre.movimientoAvanza();
    }
  }

  tecla(keyCode) {
    if (keyCode === UP_ARROW) {
      console.log("UP");
      this.isa.saltar();
    }
  }


  estados() {
    if (this.estado==="inicio") {
      if (this.botonZona(width/2, height-180, 100, 80)) {
        console.log('click');
        this.estado = "juego";
      }
    }
    if (this.estado==="juego") {
      /* if (this.botonZona(width-100, 0, 100, 50)) {
       console.log('click');
       this.estado = "perder";
       } else */      if (this.botonZona(0, 0, 100, 50)) {
        this.estado ="ganar";
      }
    }
    if (this.estado==="perder") {
      if (this.botonZona(width/2, height-180, 100, 80)) {
        console.log('click');
        this.estado = "inicio";
      }
    }
    if (this.estado==="ganar") {
      if (this.botonZona(width/2, height-180, 100, 80)) {
        console.log('click');
        this.estado = "inicio";
      }
    }
  }

  botonZona(x, y, ancho, alto) {
    return mouseX > x && mouseX < x+ancho && mouseY > y && mouseY < y+alto;
  }
}
