//Naiara Victoria Coronel y Ana Paz Parietti comisión 1
//Link de :

let imagenes = [];
let estado;
let bestiario=[];
let nino;
let viaje;
let sonido;
let musica;

function preload() {
  for (let i=0; i<18; i++) {
    imagenes[i] = loadImage("data/pant"+i+".jpg");
  }
  bestiario=loadStrings("data/bestiario.txt");
  sonido=loadSound("data/puerta.mp3");
  musica=loadSound("data/musicafondo.mp3");
}

function setup() {
  createCanvas(640, 480);
  estado = "comienzo";
  nino=false;
  viaje=false;
  musica.amp(0.1);
  for (let i=0; i<imagenes.length; i++) {
    imagenes[i].resize(640, 480);
  }
}


function draw() {
  background(10);

  //INICIO
  if (estado ==="comienzo") {
    cargarPantalla(imagenes[0], bestiario[18], 0, 0, 10, 100, 100, CENTER);
    //botones
    botonDibujo("Créditos", 350, 400, 120, 50);
    botonDibujo("Comenzar", 100, 400, 200, 50);

    //CRÉDITOS
  } else if (estado==="creditos") {
    cargarPantalla2(imagenes[17], 0, 0, RIGHT);

    //botón
    botonDibujo("Volver", 0, 0, 120, 50);

    //CAP1 PANTALLA2
  } else if (estado==="pant2") {
    cargarPantalla(imagenes[1], bestiario[0], 0, 0, 30, 20, 20, LEFT, 150);
    //botones
    botonDibujo("Continuar", 350, 400, 150, 50);

    //CAP2 PANTALLA3
  } else if (estado==="pant3") {
    cargarPantalla(imagenes[2], bestiario[1], 0, 0, 30, 20, 20, LEFT, 150);
    //botones
    botonDibujo("Explorar la casa", 370, 400, 200, 50);
    botonDibujo("Quedarte con tus primos", 35, 400, 300, 50);

    //CAP3 PANTALLA 4
  } else if (estado==="pant4") {//si elegis jugar con tus primos
    cargarPantalla(imagenes[3], bestiario[2], 0, 0, 30, 20, 20, LEFT, 150);
    //boton
    botonDibujo("Ir a cenar", 200, 400, 200, 50);

    //CAP5-6 PANTALLA 5
  } else if (estado==="pant5") {//capitulo5/6 cena y se habla del viaje
    cargarPantalla(imagenes[4], bestiario[3], 0, 0, 30, 20, 20, LEFT, 150);
    //botones
    botonDibujo("Ir al viaje", 100, 400, 200, 50);
    botonDibujo("No ir al viaje", 350, 400, 200, 50);

    //CAP5-6 PANTALLA 6
  } else if (estado==="pant6") {//si elegis ir al viaje, te cuentan la reglas
    cargarPantalla(imagenes[4], bestiario[4], 0, 0, 30, 20, 20, LEFT, 150);
    //boton
    botonDibujo("Continuar", 100, 400, 200, 50);

    //CAP 8-9 PANTALLA 7
  } else if (estado==="pant7") {//capitulo 8/9 vuelven del viaje e isabel tiene un encuentro con el tigre
    cargarPantalla(imagenes[5], bestiario[5], 0, 0, 30, 20, 20, LEFT, 150);
    //botones
    botonDibujo("Quedarse en la casa", 330, 400, 250, 50);
    botonDibujo("Irte de la casa", 100, 400, 200, 50);//se va de la casa, FINAL ALT 4

    //CAP10 PANTALLA 8
  } else if (estado==="pant8") {//se queda en la casa y la historia continua, le preguntan dónde está el tigre
    cargarPantalla(imagenes[6], bestiario[6], 0, 0, 30, 20, 20, LEFT, 150);
    //botones
    botonDibujo("Biblioteca", 350, 400, 130, 50);
    botonDibujo("Estudio de Nene", 100, 400, 200, 50);

    //FINAL REAL PANTALLA 9
  } else if (estado==="pant9") {//FINAL REAL, ELEGISTE ESTUDIO
    cargarPantalla(imagenes[8], bestiario[7], 0, 0, 30, 20, 20, LEFT, 150);
    //boton
    botonDibujo("Volver a jugar", 100, 400, 200, 50);

    //FINAL ALT 1 PANTALLA 10
  } else if (estado==="pant10") {
    cargarPantalla(imagenes[7], bestiario[8], 0, 0, 30, 20, 20, LEFT, 150);
    //boton
    botonDibujo("Volver a jugar", 100, 400, 200, 50);

    //PANTALLA 11, elegiste explorar la cocina
  } else if (estado==="pant11") {
    cargarPantalla(imagenes[11], bestiario[9], 0, 0, 30, 20, 20, LEFT, 150);
    //botones
    botonDibujo("Confiar en Nino", 100, 400, 200, 50);
    botonDibujo("No confiar en Nino", 350, 400, 210, 50);

    // PANTALLA12, VAS A EXPLORAR A BIBLIOTECA, DESPUÉS VAS A CENAR
  } else if (estado==="pant12") {
    cargarPantalla(imagenes[16], bestiario[11], 0, 0, 30, 20, 20, LEFT, 150);
    //boton
    botonDibujo("Ir a la cena", 100, 400, 200, 50);

    //PANTALLA 13, decidiste no ir al viaje familiar
  } else if (estado==="pant13") {
    cargarPantalla(imagenes[14], bestiario[12], 0, 0, 30, 20, 20, LEFT, 150);
    //botones
    botonDibujo("Quedarse en el cuarto", 80, 400, 250, 50);
    botonDibujo("Ir a explorar", 380, 400, 140, 50);//ir a explorar

    //PANTALLA 14
  } else if (estado==="pant14") { //FINAL ALT 2, solo si no confías en nino, no viajas y decidís explorar.
    cargarPantalla(imagenes[15], bestiario[13], 0, 0, 30, 20, 20, LEFT, 150);
    //botones
    botonDibujo("Volver a jugar", 100, 400, 200, 50);

    //PANTALLA 15 FINAL ALT 4 final feliz
  } else if (estado==="pant15") { // la historia continúa, te preguntan donde esta el tigre y elegís biblioteca
    cargarPantalla(imagenes[12], bestiario[14], 0, 0, 30, 20, 20, LEFT, 150);
    //botones
    botonDibujo("Volver a jugar", 100, 400, 200, 50);

    //FINAL ALT 3 ISABEL SE VA
  } else if (estado==="pant16") { // isabel se va de la casa
    cargarPantalla(imagenes[9], bestiario[15], 0, 0, 30, 20, 20, LEFT, 150);
    //botones
    botonDibujo("Volver a jugar", 100, 400, 200, 50);

    //PANTALLA 17, explorar la casa al principio
  } else if (estado==="pant17") {
    cargarPantalla(imagenes[13], bestiario[16], 0, 0, 30, 20, 20, LEFT, 150);
    //botones
    botonDibujo("Ir a la cocina", 100, 400, 200, 50);
    botonDibujo("Ir a la biblioteca", 350, 400, 200, 50);

    //PANTALLA 18 te quedas en tu cuarto cuando la familia se va de viaje
  } else if (estado==="pant18") { // isa no va al viaje y se queda en su cuarto
    cargarPantalla(imagenes[10], bestiario[17], 0, 0, 30, 20, 20, LEFT, 150);
    //botones
    botonDibujo("Continuar", 100, 400, 200, 50);
  } else {
    cargarPantalla2(imagenes[17], 0, 0, RIGHT);
  }
}

function mousePressed() {
  if (!musica.isPlaying()) {
    musica.loop(true);
  }
  if (estado==="comienzo") {
    if (botonUso(100, 400, 200, 50)) {
      estado="pant2";
      sonido.play();
    }
    if (botonUso(350, 400, 115, 50)) {
      estado="creditos";
    }
  } else if (estado==="creditos") {
    if (botonUso(0, 0, 120, 50)) {
      estado="comienzo";
    }
  } else if (estado==="pant2") {
    if (botonUso(350, 400, 150, 50)) {
      estado="pant3";//avanzar
    }
  } else if (estado==="pant3") {
    if (botonUso(50, 400, 300, 50)) {
      estado="pant4";//quedarte con tus primos
    } else if (botonUso(370, 400, 200, 50)) {
      estado="pant17"; //explorar casa
    }
    nino=false;
    viaje=false;
  } else if (estado==="pant4") {
    if (botonUso(200, 400, 200, 50)) {
      estado="pant5";//quedarte con tus primos
    }
  } else if (estado==="pant5") {
    if (botonUso(100, 400, 200, 50)) {
      estado="pant6";//ir al viaje
    } else if (botonUso(350, 400, 200, 50)) {
      estado="pant13";//no ir
      viaje=true;
    }
  } else if (estado==="pant6") {
    if (botonUso(100, 400, 200, 50)) {
      estado="pant7";//continuar
    }
  } else if (estado==="pant7") {
    if (botonUso(330, 400, 250, 50)) {
      estado="pant8";//se queda
    } else if (botonUso(100, 400, 200, 50)) {
      estado="pant16";//se va FINAL ALT 4
    }
  } else if (estado==="pant8") {
    if (botonUso(100, 400, 200, 50)) {
      estado="pant9";//estudio del Nene FINAL REAL
    } else if (botonUso(350, 400, 115, 50)) {
      estado="pant15";//FINAL ALTERNATIVO 4 final feliz
    }
  } else if (estado==="pant9") { // FINAL REAL
    if (botonUso(100, 400, 200, 50)) {
      estado="pant3"; //volver
    }
  } else if (estado==="pant10") { // FINAL ALT 1
    if (botonUso(100, 400, 200, 50)) {
      estado="pant3"; //volver
    }
  } else if (estado==="pant11") {
    if (botonUso(100, 400, 200, 50)) {
      estado="pant4"; // Confías en nino
    } else if (botonUso(350, 400, 115, 50)) {
      estado="pant12"; // No confías en nino
      nino=true;
    }
  } else if (estado==="pant12") {
    if (botonUso(100, 400, 200, 50)) {
      estado= "pant5" // vas a explorar la biblioteca y dsp vas a la cena
    }
  } else if (estado==="pant13") {
    if (botonUso(80, 400, 250, 50)) {
      estado="pant18";// te quedas en tu cuarto
    } else if  (botonUso(380, 400, 140, 50) && nino===true && viaje===true) {
      estado="pant14";
    } else {
      estado="pant10";// final alt 1
      // faltaría ver como cumplir el final alt 2
    }
  } else if (estado==="pant14") {
    if (botonUso(100, 400, 200, 50)) {
      estado="pant3"; //volver
    }
  } else if (estado==="pant15") {
    if (botonUso(100, 400, 200, 50)) {
      estado="pant3"; //volver
    }
  } else if (estado==="pant16") {
    if (botonUso(100, 400, 200, 50)) {
      estado="pant3"; //volver
    }
  } else if (estado==="pant17") {
    if (botonUso(100, 400, 200, 50)) {//elegiste ir a explorar la cocina
      estado= "pant11"
    } else if (botonUso(350, 400, 200, 50)) {//elegiste ir a explorar la biblioteca
      estado= "pant10";
    }
  } else if (estado==="pant18") {//elegiste quedarte en tu cuarto
    if (botonUso(100, 400, 200, 50)) {
      estado= "pant7"//la historia continua, encuentro con el tigre
    }
  }
}
