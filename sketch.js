var snakeGroup;


function preload()
{
    bg=loadImage("bg.png")
    bunnyimg=loadImage("bunnyImg.png")
    targetimg=loadImage("carrot.png")
    snakeimg=loadImage("snake.png")
}
function setup()
{

    createCanvas(600,600);
    edges=createEdgeSprites();
    bunny=createSprite(40,550,30,30);
    target=createSprite(550,40,50,50);
    bunny.scale=0.2;
    bunny.addImage(bunnyimg);
    target.scale=0.3;
    target.addImage(targetimg);


    huddle1=createSprite(20,400,100,8);
    huddle1.velocityX=5;
    huddle2=createSprite(400,200,100,8);
    huddle2.velocityX=-5;
    huddle1.addImage(snakeimg);
    huddle2.addImage(snakeimg);
    huddle1.scale=0.3;
    huddle2.scale=0.3;
    snakeGroup= new Group();

}
function draw()
{
    background(bg);

    huddle1.bounceOff(edges[0]);
    huddle1.bounceOff(edges[1]);
    huddle2.bounceOff(edges[0]);
    huddle2.bounceOff(edges[1]);
    bunny.bounceOff(edges[0]);
    bunny.bounceOff(edges[1]);
    bunny.bounceOff(edges[2]);
    bunny.bounceOff(edges[3]);


    if(bunny.isTouching(huddle1))
    {
        bunny.x=40;
        bunny.y=550;
    }
    
    if(bunny.isTouching(huddle2))
    {
        bunny.x=40;
        bunny.y=550;
    }
    if(keyDown("down"))
    {
        bunny.y=bunny.y+10;
    }
    if(keyDown("up"))
    {
        bunny.y=bunny.y-10;
    }
    if(keyDown("left"))
    {
        bunny.x=bunny.x-10;
    }
    if(keyDown("right"))
    {
        bunny.x=bunny.x+10;
    }
    snakegen()
    for(var i=0 ; i<(snakeGroup).length ; i++)
    {
        var temp=(snakeGroup).get(i);
        if (bunny.isTouching(temp))
        {
            bunny.x=40;
            bunny.y=550;
        }
    }
    drawSprites();
}

function snakegen()
{
    if (frameCount %30 ===0)
    {
        console.log(frameCount);
        var snake=createSprite(600,random(70,520),random(30,120),8);
        snake.velocityX=random(-10,-15);
        snake.shapeColor="red";
        snakeGroup.add(snake);

    }
}
