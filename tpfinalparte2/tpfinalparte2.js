let principal;
let isaIdle = [];

function preload() {
  for (let i=0; i<1; i++) {
    isaIdle[i] = loadImage("data/isa/idle" + i + ".png");
  }
}

function setup() {
  createCanvas(640, 480);
  background(200);
  principal = new Juego();

  for (let i=0; i<isaIdle.length; i++) {
    isaIdle[i].resize(100, 115);
  }
}


function draw() {
  principal.mostrar();
}


function keyPressed() {
  //REFERENCIA-----
  // if (tecla === right)
  //autito.moverderecha

  if (key === 'd') {
    principal.avanzarPersonaje;
  }
}
