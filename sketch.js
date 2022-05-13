var bg, girassol,girassol_img,p1,p1_img;
var ervilhas
var solimg, gpsol, sol_score = 100;
var zb1,zb2,zb3,zb4,zb5,zb6;
var ervilhA;
var shotgp;
var countErv = 0;
var life = 3;
var cor;
var estadojogo = 'jogar';
var controle = true;
var limite;

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
  ervilhA = loadImage('assets/ervilha.png');
}

function setup(){ // todas as configuraçoes dos objetos
  createCanvas(1200,1200);
  girassol = createSprite(106,642,20,20);
  girassol.addImage('girassol',girassol_img);
  girassol.scale = 0.6
  cor = createSprite(485,80,360,150)
  cor.shapeColor = 'SaddleBrown'

  limite = createSprite(10,600,20,1300)
  limite.visible = false;
  shotgp = new Group();
  ervilhas = new Group();
  gpsol = new Group();
  zbgp = new Group();

}

function draw(){
  if (estadojogo === 'jogar'){
  background(bg);
  textSize(80);
  fill('black');
  text(mouseX+','+mouseY,mouseX,mouseY);
  
  drawSprites(); 

  textSize(20)
  text(sol_score, 64,149)
  text(countErv, 168,143)
  text(life, 260,143)

  shotgp.isTouching(zbgp,destroyer)
  ervilhas.isTouching(zbgp,Destroyer);


  keyboard();
  createsol();
  newscore();
  createzombie();
  ervilha();
  if (zbgp.isTouching (limite)){
    estadojogo = 'gameOver'



  }
 if (frameCount%100 === 0){
  controle = true;

 }
  
  if (life === 0){
    estadojogo = 'gameOver'


  }
  }else if(estadojogo === 'gameOver'){
    GameOver();
  }
  
}

function Destroyer (ervilha,zb){
ervilha.destroy();
life--;
countErv--;
}


function destroyer (shot,zb) {
shotgp.destroyEach();
zb.destroy();






}


function keyboard(){
 if (keyDown (DOWN_ARROW) ){
    if (sol_score/100 >=1 && controle == true){
      var p1 = createSprite(mouseX,mouseY,20,20);
      sol_score -= 100;
      p1.addImage('p1',p1_img);
      p1.scale = 0.3;
     // p1.debug = true;
      countErv ++;
      p1.setCollider('circle',0,0,350);
      ervilhas.add(p1);
      controle = false;
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
  sol.lifetime = 300;
  gpsol.add(sol);
  }
  
 
}

function newscore(){ // aumenta a pontuação do sol
  for (var i = 0; i < gpsol.length; i++){
    if (mousePressedOver(gpsol.get(i))){
      sol_score +=50;
      gpsol.get(i).destroy();
      }

  }
  
  
}

function createzombie (){
  if (frameCount%150 === 0){
  var zb 
  zb = createSprite(1250,random(250,1050),20,20)
  zb.velocityX = -3;
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
  zb.lifetime = 1300;
  zb.debug = true;
  zbgp.add(zb);
  }
  



}

function ervilha () {
if (frameCount%60 === 0){
  for(var i = 0; i < ervilhas.length; i ++){
    var shot2 = ervilhas.get(i);
    var shot;
    shot = createSprite(shot2.x + 40,shot2.y - 30, 20, 20);
    shot.velocityX = 2;
    shot.addImage('tiro',ervilhA);
    shot.scale = 2;
    shot.lifetime = 600;
    shotgp.add(shot);
    shot.debug = true;
    shot.setCollider('circle',0,0,20)
  }
 

}


}

function GameOver () {
  background('black');
  stroke('white')
  strokeWeight('15')
  fill('black');
  textSize(80);
  text('GAME OVER',400,600)
  image(zb1,200,800,200,200)
  image(zb2,800,300,200,200)
}