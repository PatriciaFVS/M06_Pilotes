import {Pilota} from "./pilota.js"

// Preparació del canvas ----------------------
/* Obté una referència a <canvas>, després crida al mètode getContext()
  per definir un context al el que es pot començar a dibuisar
  (ctx) és un objecte que representa l'àrea de dibuix del 
  <canvas> y permet dibuixar elements 2D al damunt.

  width and height són dreceres a l'ample i alt del canvas  que coincideixen
  amb l'alt i ample del navegador (viewport)
*/
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

let pilotes=[];
// funció per generar un número aleatori entre dues xifres

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

// funció per generar un color aleatori

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}
function loop(){
  pilotes=[];
  ctx.clearRect(0, 0, width, height);
  

  for(let i=0;i<25;i++){
    let mida= random(10,20);
    let x = random(mida, width-mida);
    let y= random(mida, height-mida);
    let velX= random(-1,1);
    let velY= random(-1,1);
    let color= randomRGB();

    pilotes.push(new Pilota(x,y,velX,velY,color,mida))
    
  }
  
  pilotes.forEach(pilota => {
    pilota.dibuixa(ctx);
    pilota.mou(width,height);
    requestAnimationFrame(loop);
  }); 
    
  
}

loop();