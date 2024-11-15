//RECORDAR VOLVER A GUADAR CON EL NOMBRE BIEN!!
//Naiara Victoria Coronel y Ana Paz Parietti comisión 1
//Link de :

let main;

function setup() {
  createCanvas(640, 480);
  main = new Juego();
}

function draw() {
  main.mostrar();
  if (keyIsPressed === true) {
    main.eventos(keyCode);
  }else{
   main.tigreAtaca(); 
  }
}

function mousePressed() {
  main.estados();
}

function keyPressed() {
  main.tecla(keyCode);
}
