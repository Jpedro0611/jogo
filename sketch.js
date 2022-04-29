var bg, girassol,girassol_img,p1,p1_img;
var ervilhas
var solimg, gpsol, sol_score = 0;

function preload(){ // função que carregar todas as imagens e animações
   bg = loadImage ("assets/bg2.png")
   girassol_img = loadImage("assets/Girasol.png");
   p1_img = loadImage("assets/P1.png");
   solimg = loadImage ("assets/sol.png");
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
  newscore()
 
}

function keyboard(){
 if (keyDown (DOWN_ARROW) ){
    if ( ervilhas.length <=25){
      var p1 = createSprite(mouseX,mouseY,20,20);
      p1.addImage('p1',p1_img);
      p1.scale = 0.3;
      ervilhas.add(p1);
    }
  } 
}

function createsol(){ //cria o sol
 
}

function newscore(){ // aumenta a pontuação do sol
  
  
}