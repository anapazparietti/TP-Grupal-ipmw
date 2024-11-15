/*
OBJETIVO
Avanzar por un camino, esquivando obstaculos hasta llegar a la meta. 
¿cómo se GANA?
Al llegar al final del camino que es donde se encuentra la meta.
¿cómo se PIERDE?
El personaje es perseguido por un tigre, si es atrapado por este pierde.

MÉCANICAS
--Player:
Movimiento: avanzar, retroceder, saltar --- LISTO (agacharse)
Tiene una única vida, muere cuando es atrapado por el tigre --- LISTO
--Tigre (Enemy):
Solo puede avanzar, no puede morir. --- LISTO
--Obstaculos:
"Estaticos" solo se pueden superar saltandolos o agachandose 

ESTADOS DEL JUEGO:
--Menú
--Juego
--Pantalla perdiste
--Pantalla ganaste

CÓMO FUNCIONA EL JUEGO
Cuando el personaje avanza, el fondo y el piso se mueve en sentido opuesto, trayendo los obstaculos que se ven fuera de pantalla --- LISTO
Cuando el personaje retrocede o se queda quieto, el tigre avanza

EXTRA
un tiempo limite para llegar a la meta
*/
