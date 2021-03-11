//Key learning 
//1) Object oriented design 
//2) use of map to optimise precomputation
//3)Use of array data structure
//4) Working of canvas in html for designing

//Getting canvas element
var canvas = document.getElementById("mycanvas");

//Getting the 2- context for our use
var pen = canvas.getContext("2d");

//Dimensions of the width of the snake
var dim_x = 35;

//Dimensions of the height of the snake
var dim_y = 35;

var gameover = "false";

base_image = new Image();
base_image.src = "images/apples.png";

trophy = new Image();
trophy.src="images/shield.png";

var cond;


// console.log("sh");

var timer=800;

var object=fruit();

//Map to store the current coordinate of the sbake
var mp=[];

for(var i=0;i<20;i++)
{
    mp.push([]);
}

for(var i=0;i<20;i++)
{
    for(var j=0;j<20;j++)
    {
        mp[i].push(0);
    }
}



//snake object
 var snake={
    
    length : 5,
    color: "blue",
    cells : [],
    direction: "right",

    createsnake : function()
    {
        for(var i=0;i<this.length;i++)
        {
            var object={
                x:i,
                y:0
            };
            
            mp[object.x][0]=1;
            this.cells.push(object);
        }
    } ,

     drawsnake : function()
     {
        

         if(this.direction=="right")
         {
             if(object.x==this.cells[this.length-1].x && object.y==this.cells[this.length-1].y )
             {
                // console.log(object==this.cells[this.length-1]);

                 this.cells.push({

                
                        x : this.cells[this.length-1].x+1,
                        y : this.cells[this.length-1].y
                    }
                       );

                       this.length++;
                       object=fruit();
                       pen.drawImage(base_image, 36*object.x, 36*object.y,36,36);


             }



             var obj={
                x : this.cells[this.length-1].x+1,
                y : this.cells[this.length-1].y,
            };

            let first=this.cells[0];
            var x1=first.x;
            var y1=first.y;
            mp[x1][y1]=0;

             this.cells.shift();
             
             this.cells.push(obj);

             if(mp[obj.x][obj.y]==1)
             {
                 gameover="true";
             }

             else{
                   mp[obj.x][obj.y]=1;
             }

             for(var i=0;i<this.cells.length;i++)
          {
              pen.fillStyle = this.color;
              pen.fillRect(36*this.cells[i].x,36*this.cells[i].y,dim_x,dim_y);
           }
        
          if(this.cells[this.length-1].x >= 17 || this.cells[this.length-1].y >= 17 || this.cells[this.length-1].x < 0 || this.cells[this.length-1].y < 0)
           {
                         gameover="true";
                   }

         }

         else if(this.direction=="left")
         {
            // console.log(object==this.cells[this.length-1]);

            if(object.x==this.cells[this.length-1].x && object.y==this.cells[this.length-1].y)
            {
                this.cells.push({

               
                       x : this.cells[this.length-1].x-1,
                       y : this.cells[this.length-1].y
                   }
                      );

                      this.length++;
                      object=fruit();
                      pen.drawImage(base_image, 36*object.x, 36*object.y,36,36);


            }


            var obj={
               x : this.cells[this.length-1].x-1,
               y : this.cells[this.length-1].y,
           };

           let first=this.cells[0];
           var x1=first.x;
           var y1=first.y;
           mp[x1][y1]=0;

            this.cells.shift();
            
            this.cells.push(obj);

            if(mp[obj.x][obj.y]==1)
            {
                gameover="true";
            }

            else{
                  mp[obj.x][obj.y]=1;
            }

            for(var i=0;i<this.cells.length;i++)
         {
             pen.fillStyle = this.color;
             pen.fillRect(36*this.cells[i].x,36*this.cells[i].y,dim_x,dim_y);
         }
         if(this.cells[this.length-1].x >= 17 || this.cells[this.length-1].y >= 17 || this.cells[this.length-1].x < 0 || this.cells[this.length-1].y < 0)
           {
                         gameover="true";
                   }


         }

         else if(this.direction=="up")
         {

            if(object.x==this.cells[this.length-1].x && object.y==this.cells[this.length-1].y)
             {
                // console.log(object==this.cells[this.length-1]);

                 this.cells.push({

                
                        x : this.cells[this.length-1].x,
                        y : this.cells[this.length-1].y-1
                    }
                       );

                       this.length++;
                       object=fruit();
                       pen.drawImage(base_image, 36*object.x, 36*object.y,36,36);

             }

            



            var obj={
               x : this.cells[this.length-1].x,
               y : this.cells[this.length-1].y-1,
           };

           let first=this.cells[0];
           var x1=first.x;
           var y1=first.y;
           mp[x1][y1]=0;

            this.cells.shift();
            
            this.cells.push(obj);

            if(mp[obj.x][obj.y]==1)
            {
                gameover="true";
            }

            else{
                  mp[obj.x][obj.y]=1;
            }

            for(var i=0;i<this.cells.length;i++)
         {
             pen.fillStyle = this.color;
             pen.fillRect(36*this.cells[i].x,36*this.cells[i].y,dim_x,dim_y);
         }

         if(this.cells[this.length-1].x >= 17 || this.cells[this.length-1].y >= 17 || this.cells[this.length-1].x < 0 || this.cells[this.length-1].y < 0)
           {
                         gameover="true";
                   }

         }


         else if(this.direction=="down")
         {

            if(object.x==this.cells[this.length-1].x && object.y==this.cells[this.length-1].y)
             {
                // console.log(object==this.cells[this.length-1]);

                 this.cells.push({

                
                        x : this.cells[this.length-1].x,
                        y : this.cells[this.length-1].y+1
                    }
                       );

                       this.length++;
                       object=fruit();
                       pen.drawImage(base_image, 36*object.x, 36*object.y,36,36);
                    }

         

            var obj={
               x : this.cells[this.length-1].x,
               y : this.cells[this.length-1].y+1,
           };

           let first=this.cells[0];
           var x1=first.x;
           var y1=first.y;
           mp[x1][y1]=0;

            this.cells.shift();
            
            this.cells.push(obj);

            if(mp[obj.x][obj.y]==1)
            {
                gameover="true";
            }

            else{
                  mp[obj.x][obj.y]=1;
            }

            for(var i=0;i<this.cells.length;i++)
         {
             pen.fillStyle = this.color;
             pen.fillRect(36*this.cells[i].x,36*this.cells[i].y,dim_x,dim_y);
         }

         if(this.cells[this.length-1].x >= 17 || this.cells[this.length-1].y >= 17 || this.cells[this.length-1].x < 0 || this.cells[this.length-1].y < 0)
           {
                         gameover="true";
                   }

         }

         



     }  // Draw snake function 


} // Snake object

snake.createsnake();

function draw()
{
   pen.clearRect(0, 0, 612, 612);
   pen.drawImage(trophy,0,0,36,36);
   pen.font = "30px Arial";
   pen.fillStyle = "red";
   pen.fillText(snake.length-5, 35, 25);


}

//Game loop function
function create()
{

    
    pen.drawImage(base_image, 36*object.x, 36*object.y,36,36);
    snake.drawsnake();
    

   


    
}

//Maintaining continuity of the game

function fruit()
{
    let x = Math.round(Math.random()*15);
    let y =Math.round(Math.random()*15);

   

    return {
        x :x,
        y :y
    };

}

function gameloop()
{
    if(gameover=="true")
    {
        clearInterval(cond);
        alert("Game is over!! Plz Refresh the Page");
        return ;
    }

    draw();
    create();

    let score = snake.length-5;

    if(score > 5 && score <= 10 )
    {
        timer=500;
        button.innerHTML="level-2";
    }

    else if(score> 10 && score <= 15)
    {
        timer =300;
        button.innerHTML="level-3";

    }
    else if(score >15 ){
        timer=100;
        button.innerHTML="level-4";

    }

    clearInterval(cond); 
    cond = setInterval(gameloop, timer); 
    // console.log(timer,score);
    

}

function keymovement(e)
{
    let key = e.key;
    if(key=="ArrowRight" && snake.direction != "right" && snake.direction != "left")
    {
        snake.direction="right";
    }
    else if(key == "ArrowLeft" && snake.direction != "left" && snake.direction != "right")
    {
        snake.direction="left";
    }
    else if(key=="ArrowDown" && snake.direction != "down" && snake.direction != "up")
    {
        snake.direction="down";
    }

    else if(key== "ArrowUp" && snake.direction != "up" && snake.direction !="down")
    {
        snake.direction="up";
    }

    
    
}


var check=false;

//Callback function for button
function callback(){
     
    if(check==true)
    {
        return ;
    }
    // console.log("sh");
    check=true;
    button.innerHTML="Level-1";
     gameloop();
      
}


//Handling the event for the any key pressed
document.addEventListener("keyup" , keymovement);

//Button event for starting the button
var button = document.getElementById("button");

button.addEventListener("click",callback);

//Interval of gameloop


