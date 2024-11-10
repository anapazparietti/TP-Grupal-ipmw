//textoPerzonalizado en cargarPantalla
//remplazar todo
//ver como hace que solo tengamos que escribir boton una vez, preguntar al profe x nuestra situacion

//-----------PANTALLAS-------------------
function cargarPantalla(imagenes, texto, x, y, alineacion, rectTam) {//borrar ancho y alto en la función
  imageMode(alineacion);
  image(imagenes, x, y);
  noStroke();
  fill(0, 150);
  rect(x, y, width, rectTam);//parametro para modificar alto del cuadrado dependiendo el alto de tu texto
  textAlign(LEFT);
  textSize(20);
  fill(255);
  text(texto, x+30, y+20, width-50);
  

}

function textoPersonalizado(texto, x, y, tam, tono, borde, alineacion) {
  push();
  textSize(tam);
  fill(tono);
  stroke(borde);
  textAlign(alineacion);
  text(texto, x, y);
  pop();
}

function escribirParrafos(texto) {
  noStroke();
  fill(0, 150);
  rect(0, 0, width, 165);
  textAlign(LEFT);
  textSize(20);
  fill(255);
  text(texto, 30, 20, width-50);
}

//--------------BOTONES----------------
//dibujo
function botonDibujo(texto, x, y, ancho, alto) {
  push();
  if (botonUso(x, y, ancho, alto)) {
    fill(126, 216, 31);
  } else {
    fill(57, 103, 8);
  }
  noStroke();
  rect(x, y, ancho, alto, alto/4);
  pop();
  push();
  textAlign(CENTER, CENTER);
  stroke(0);
  fill(255)
    textSize(25);
  text(texto, x+ancho/2, y+alto/2);
  pop();
}
//zona/ click/ mousepressed
function botonUso(x, y, ancho, alto) {
  return mouseX > x && mouseX < x+ancho && mouseY > y && mouseY < y+alto;
}
