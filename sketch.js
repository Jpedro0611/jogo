var bg, girassol,girassol_img,p1,p1_img;
var ervilhas;

function preload(){ // função que carregar todas as imagens e animações
   bg = loadImage ("assets/bg2.png")
   girassol_img = loadImage("assets/Girasol.png");
   p1_img = loadImage("assets/P1.png");
}

function setup(){ // todas as configuraçoes dos objetos
  createCanvas(1200,1200);
  girassol = createSprite(106,642,20,20);
  girassol.addImage('girassol',girassol_img);
  girassol.scale = 0.6
  p1 = createSprite(490,646,20,20);
  p1.addImage('p1',p1_img);
  p1.scale = 0.3
  ervilhas = new Group();
}

function draw(){
  background(bg);
  textSize(80);
  fill('black');
  text(mouseX+','+mouseY,mouseX,mouseY);
  
  drawSprites(); 
  keyboard();
}

function keyboard(){
if (keyDown (DOWN_ARROW) ){
  console.log(ervilhas.lenght)
  if (ervilhas.length == 25 || ervilhas.lenght === undefined){
  var p1 = createSprite(mouseX,mouseY,20,20);
  p1.addImage('p1',p1_img);
  p1.scale = 0.3;
  ervilhas.add(p1);


  }

}





}

