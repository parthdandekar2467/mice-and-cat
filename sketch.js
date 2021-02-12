var cat, cat1, cat1, cat3, cat4, cat1_image, cat2_image, cat3_image, cat4_image, cat_image;
var garden, garden_image;
var mouse1, mouse2, mouse3, mouse4, mouse1_image, mouse2_image, mouse3_image, mouse4_image;


function preload() 
{
    cat1_image = loadImage("images/cat1.png");
    cat2_image = loadImage("images/cat2.png");
    cat3_image = loadImage("images/cat3.png");
    cat4_image = loadImage("images/cat4.png");

    garden_image = loadImage("images/garden.png");

    mouse1_image = loadImage("images/mouse1.png")
    mouse2_image = loadImage("images/mouse2.png");
    mouse3_image = loadImage("images/mouse3.png");
    mouse4_image = loadImage("images/mouse4.png");
}

function setup()
{
    createCanvas(1000,800);


    garden = createSprite(500, 300, 1000, 800);
    garden.addImage(garden_image);
    
    cat = createSprite(650, 425, 50, 40);
    cat.addImage(cat1_image);
    cat.scale = 0.09;

    mouse = createSprite(130, 400, 20, 20);
    mouse.addImage(mouse1_image);
    mouse.scale = 0.10;

    


}

function draw() 
{

    background(220);

   
    
    keyPressed();
    isTouching();
    drawSprites();
}


function keyPressed()
{
  if(keyCode === LEFT_ARROW)
  {
      cat.velocityX = -5;
      cat.addAnimation("catrunning", cat2_image, cat3_image);
      cat.changeAnimation("catrunning");

      mouse.addAnimation("mousedancing", mouse2_image, mouse3_image);
      mouse.changeAnimation("mousedancing");

     
  }
  
  if(cat.x-mouse.x<(cat.width-mouse.width)/2)
  {
      cat.addAnimation("lastCat", cat4_image);
      cat.changeAnimation("lastCat");

      cat.velocityX = 0;

      mouse.addAnimation("mouseKnife", mouse4_image);
      mouse.changeAnimation("mouseKnife");

      cat.x = 180;
  }

  
  
    cat.debug = false;
}

function isTouching()
{
  
}
