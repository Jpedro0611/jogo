var bg, girassol,girassol_img,p1,p1_img;
var ervilhas
var solimg, gpsol, sol_score = 0;
var zb1,zb2,zb3,zb4,zb5,zb6;

function preload(){ // função que carregar todas as imagens e animações
   bg = loadImage ("assets/bg2.png")
   girassol_img = loadImage("assets/Girasol.png");
   p1_img = loadImage("assets/P1.png");
   solimg = loadImage ("assets/sol.png");
   zb1 = loadImage('assets/z1.png');
   zb2 = loadImage('assets/z2.png');
   zb3 = loadImage('assets/z3.png');
   zb4 = loadImage('assets/z4.png');
   zb5 = loadImage('assets/z5.png');
   zb6 = loadImage('assets/z6.png');

}

function setup(){ // todas as configuraçoes dos objetos
  createCanvas(1200,1200);
  girassol = createSprite(106,642,20,20);
  girassol.addImage('girassol',girassol_img);
  girassol.scale = 0.6

  ervilhas = new Group();
  gpsol = new Group();
  
}

function draw(){
  background(bg);
  textSize(80);
  fill('black');
  text(mouseX+','+mouseY,mouseX,mouseY);
  
  drawSprites(); 

  textSize(20)
  text(sol_score, 64,149)

  keyboard();
  createsol();
  newscore();
  createzombie();
}

function keyboard(){
 if (keyDown (DOWN_ARROW) ){
    if (sol_score/100 >=1){
      var p1 = createSprite(mouseX,mouseY,20,20);
      sol_score -= 100;
      p1.addImage('p1',p1_img);
      p1.scale = 0.3;
      ervilhas.add(p1);
    }
  } 
}

function createsol(){ //cria o sol
  if (frameCount%130 === 0){
  var sol;
  
  sol = createSprite(random(100, 1050),50,20,20);
  sol.addImage('sol',solimg);
  sol.scale = 1.2
  sol.velocityY = 2
  gpsol.add(sol);
  }
  
 
}

function newscore(){ // aumenta a pontuação do sol
  for (var i = 0; i < gpsol.length; i++){
    if (mousePressedOver(gpsol.get(i))){
      sol_score +=25;
      gpsol.get(i).destroy();
      }

  }
  
  
}

function createzombie (){
  if (frameCount%210 === 0){
  var zb 
  zb = createSprite(1250,random(250,1050),20,20)
  zb.velocityX = -1;
  var randy = Math.round(random(1,6));
  switch(randy){
    case 1:zb.addImage('zombie',zb1);
    break 
    case 2:zb.addImage('zombie',zb2);
    break 
    case 3:zb.addImage('zombie',zb3);
    break 
    case 4:zb.addImage('zombie',zb4);
    break 
    case 5:zb.addImage('zombie',zb5);
    break 
    case 6:zb.addImage('zombie',zb6);
    break 
  }
  zb.scale = 1.5
  }
  



}