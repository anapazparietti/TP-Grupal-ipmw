//RECORDAR VOLVER A GUADAR CON EL NOMBRE BIEN!!
//Naiara Victoria Coronel y Ana Paz Parietti comisión 1
//Link de :

let main;
let imagenes = [];
let imagSalto =[];
let imagAvanzar =[];
let imagRetrocede=[];


function preload() {
  for (let i=0; i<20; i++) {
    imagAvanzar[i] = loadImage("data/run/run"+ i+".png");
  }
  for (let i=0; i<1; i++) {
    imagenes[i] = loadImage("data/image"+ i + ".png");
  }
}-


function setup() {
  createCanvas(640, 480);
  main = new Juego();
  for (let i=0; i<imagAvanzar.length; i++) {
    imagAvanzar[i].resize(100, 150);
  }
}

function draw() {
  main.mostrar();
  if (keyIsPressed === true) {
    main.eventos(keyCode);
  } else {
    main.tigreAtaca();
  }
}

function mousePressed() {
  main.estados();
}

function keyPressed() {
  main.tecla(keyCode);
}
