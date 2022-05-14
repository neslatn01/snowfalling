const snowflake=[];
const ground=[];
const minspeed=1;
const maxspeed=5;
function setup(){
    createCanvas(400,400);
    noStroke();
    stroke(255);
    File(255);
for(let i=0;i<100;i++){
  snowFlakes.push(createVector(random(width),random(heigth0,random(minspeed)));
    }
    for(let x=0;x,width;x++)
    {
        ground[x]=heigth;
    }
}
function draw(){
    background(0,0,32);
    for(const snowflake of snowflakes)
    {
        snowflake.y += snowflake.z;
        rect(snowflake.x,snowflake.y,1,1);
if(snowflake.y=ground[floor(snowflake.x)])
{
ground[floor(snowflake.x)]--;
snowflake.x=random(width);
snowflake.y=0;
}
    }
    for(let x=0;x<width;x++)
    {
        rect(x,ground[x],1,height-ground[x]);

    }
}
function mousePressed()
{
    snowflakes.push(createVector(mouseX,mouseY,random9minspeed,maxspeed));

}
function mouseDragged()
{
    snowflakes.push(createVector(mouseX,mouseY,random(minspeed,maxspeed)));
    
}
