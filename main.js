function myFunction() {
  document.getElementById("preguntas").style.display = "block";
}

const preguntasDeportes= [
  {
      pregunta: '¿Cuántos tiempos tiene un partido de baloncesto?',
      respuesta: {
          a: "2",
          b: "4",
          c: "5"
      },
      respuestacorrecta: "b"
  },
  {
      pregunta: "¿Cuál es el estilo de natación más rápido?",
      respuesta: {
          a: "Crol",
          b: "Espalda",
          c: "Mariposa"
      },
      respuestacorrecta: "a"
  },
  {
      pregunta: "¿Cuántos jugadores componen un equipo de rugby?",
      respuesta: {
          a: "15",
          b: "11",
          c: "16"
      },
      respuestacorrecta: "a"
  },
  {
      pregunta: "¿Cuál es el estadio de fútbol más grande de Argentina?",
      respuesta: {
          a: "El de Velez",
          b: "El de Racing",
          c: "El de River Plate"
      },
      respuestacorrecta: "c"
  },
  {
      pregunta: "¿Cuál de estas posiciones no representa a un jugador de Baseball?",
      respuesta: {
          a: "Pitcher",
          b: "Fullback",
          c: "Short Stop"
      },
      respuestacorrecta: "b"
  },
]

var i=0;
var vidas = 3;
var vivo = true;


window.onload = function(){
  document.getElementById("text").innerHTML = preguntasDeportes[i].pregunta;
  document.getElementById("respuestaA").innerHTML=preguntasDeportes[i].respuesta.a;
  document.getElementById("respuestaB").innerHTML=preguntasDeportes[i].respuesta.b;
  document.getElementById("respuestaC").innerHTML=preguntasDeportes[i].respuesta.c;
  mostrarVidas();
}

function mostrarVidas () {
  document.getElementById("vidasRestantes").innerHTML= "VIDAS: "+ vidas; 
}

function correcta (respuestaElegida){
  if (i<5){
      if (respuestaElegida==preguntasDeportes[i].respuestacorrecta){
          i=i+1;
          siguientePregunta (i);
      }
      else {
          vidas = vidas - 1;
          mostrarVidas();
          if (vidas == 0){
              vivo = false;
              alert ("Game Over!!");
              vidas= 3;
              i=0;
              siguientePregunta (i);
          }
          else{
              alert ("Te queda(n) " + vidas + " vida(s)")
          }
      }
  }
  else if (vivo = true){
      alert ("YOU WIN");
  }
}

function siguientePregunta(i){
  document.getElementById("text").innerHTML=preguntasDeportes[i].pregunta;
  document.getElementById("respuestaA").innerHTML=preguntasDeportes[i].respuesta.a;
  document.getElementById("respuestaB").innerHTML=preguntasDeportes[i].respuesta.b;
  document.getElementById("respuestaC").innerHTML=preguntasDeportes[i].respuesta.c;
  mostrarVidas();
}
