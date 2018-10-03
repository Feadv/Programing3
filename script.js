

function randomMatrix(n, m) {
    var matrix = []
    for (var y = 0; y < n; y++) {
        matrix[y] = [];
        for (var x = 0; x < m; x++) {

            matrix[y][x] = Math.round((Math.random()*0));
               
        }
    
                  
                   
    
}
for(var w =0;w<2200;w++){
    var r1 =  Math.round((Math.random()*100)+10);
    var r11 = Math.round((Math.random()*100)+10);
    matrix[r1][r11] = 1;
}
for(var w =0;w<150;w++){
    var r2 =  Math.round((Math.random()*100)+10);
    var r22 = Math.round((Math.random()*100)+10);
    matrix[r2][r22] = 2;
}
for(var w =0;w<180;w++){
    var r3 =  Math.round((Math.random()*100)+10);
    var r33 = Math.round((Math.random()*100)+10);
    matrix[r3][33] = 3;
}
for(var w =0;w<5;w++){
    var r4 =  Math.round((Math.random()*100)+10);
    var r44 = Math.round((Math.random()*100)+10);
    matrix[r4][r44] = 4;
}
for(var w =0;w<40   ;w++){
    var r4 =  Math.round((Math.random()*100)+1);
    var r44 = Math.round((Math.random()*100)+1);
    matrix[r4][r44] = 5;
}
matrix[1][1] = 6;
                    
                
                    
return matrix;

}


///////////////////////LESSON 4////////////////////////




// Math.round((Math.random()*1)+0)





///////fin work///////
var c =  Math.round((Math.random()*45)+115);
var matrix = randomMatrix(c,c);
var grassArr = [];
var GrassEaters =[];
var GishArr = [];
var Gish2Arr = [];
var timerArr = [];
var side = 7.5    ;
var v;
v==c;
v/=2;

var BOOMIArr=[];
var k=10;
function setup() {
frameRate(30)

    createCanvas(matrix[0].length * side, matrix.length * side);
    background("#acacac");

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                var gr = new Grass(x,y, 1);
                grassArr.push(gr);
            }
            else if(matrix[y][x] == 2) {
                var graseat = new GrassEater(x,y, 2);
                GrassEaters.push(graseat);
            }
            else if(matrix[y][x] == 3) {
                var gish = new Gishatich(x,y, 3);
               GishArr.push(gish);
            }
            else if(matrix[y][x] == 4) {
                var gish2 = new Gish2(x,y, 4);
               Gish2Arr.push(gish2);
            }
              else if(matrix[y][x] == 5) {
                var BOOM = new BOOMI(x,y, 5);
             BOOMIArr.push(BOOM);
            }
            else if(matrix[y][x] == 6) {
                var time1 = new timer(x,y, 6);
             timerArr.push(time1);
            }

        }
    }
}
function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill(0, 120, 0);
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac")
                rect(x * side, y * side, side, side);

            }
            else if(matrix[y][x]==2 ){
                fill(255, 255, 0);
                rect(x * side, y * side, side, side);
            }
            else if(matrix[y][x]==3){
                fill(10, 15, 0);
                rect(x * side, y * side, side, side);
            }
            else if(matrix[y][x]==4){
                fill("red");
                rect(x * side, y * side, side, side);
            }
             else if(matrix[y][x]==5){
                fill(165,125,69);
                rect(x * side, y * side, side, side);
            }
            else if(matrix[y][x]==6){
                noFill();
                rect(x * side, y * side, side, side);
            }
            
        }
    }

           
        
    for (var i in grassArr) {
        grassArr[i].mul();
       
        
    }


    for (var i in GrassEaters) {
          GrassEaters[i].eat()
          
    }
    for(var i in GishArr){
        GishArr[i].eat();
    }
    for(var i in Gish2Arr){

        
       Gish2Arr[i].eat();
    }
    for(var i in timerArr){

        
       timerArr[i].move();
    }
for(var i in BOOMIArr){

   if(k==69){
   BOOMIArr[i].destroy()}
       if(k==70) {BOOMIArr[i].die()  
         }
      
      
   
      
    }
  


}

