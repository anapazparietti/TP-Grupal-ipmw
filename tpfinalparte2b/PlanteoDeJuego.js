/*
OBJETIVO
Avanzar por un camino, esquivando obstaculos hasta llegar a la meta. 
¿cómo se GANA?
Al llegar al final del camino que es donde se encuentra la meta.
¿cómo se PIERDE?
El personaje es perseguido por un tigre, si es atrapado por este pierde.

MÉCANICAS
--Player:
Movimiento: avanzar, retroceder, saltar, agacharse
Tiene una única vida, muere cuando es atrapado por el tigre
--Tigre (Enemy):
Solo puede avanzar, no puede morrir.
--Obstaculos:
"Estaticos" solo se pueden superar saltandolos o agachandose

ESTADOS DEL JUEGO:
--Menú
--Juego
--Pantalla perdiste
--Pantalla ganaste

CÓMO FUNCIONA EL JUEGO
Cuando el personaje avanza, el fondo y el piso se mueve en sentido opuesto, trayendo los obstaculos que se ven fuera de pantalla
Cuando el personaje retrocede o se queda quieto, el tigre avanza

EXTRA
tener una barra que indica cuánto falta para llegar
un tiempo limite para llegar a la meta
*/
