var bg

function preload(){ // função que carregar todas as imagens e animações
   bg = loadImage ("assets/bg2.png")
}

function setup(){ // todas as configuraçoes dos objetos
  createCanvas(1200,1200);
  
}

function draw(){
  background(bg);
  drawSprites(); 

}

