//ver como hace que solo tengamos que escribir boton una vez, preguntar al profe x nuestra situacion
//cómo hacemos para achicar la parte de créditos---->hacemos una imagen

//-----------PANTALLAS-------------------
function cargarPantalla(imagenes, texto, x, y, xT, yT, tamT, tono, borde, alineacion, aliT, rectTam) {
  imageMode(alineacion);
  image(imagenes, x, y);
  noStroke();
  fill(0, 150);
  rect(x, y, width, rectTam);//parametro para modificar alto del cuadrado (fondo) dependiendo el alto de tu texto
  stroke(borde);
  textAlign(aliT);
  textSize(tamT);
  fill(tono);
  text(texto, xT, yT, width-50);
  

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
