let principal;
let isaIdle;

function preload() {
 /* for (let i=0; i<1; i++) {
    isaIdle[i] = loadImage("data/isa/idle" + i + ".png");
  }*/
  
  isaIdle = loadImage("data/isa/idle.png");
}

function setup() {
  createCanvas(640, 480);
  
  
  principal = new Juego();
  
  isaIdle.resize(100,105);

 /* for (let i=0; i<isaIdle.length; i++) {
    isaIdle[i].resize(100, 115);
  }*/
}


function draw() {
  principal.mostrar();
}

//function mousePressed para poner iniciar 
function keyPressed() {
    principal.avanzarPersonaje(keyCode);
}
