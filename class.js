

class Grass{
    constructor(x,y,index){
        this.x = x;
        this.y = y;
        this.index = index;
        this.multiply = 0;
        this.direct=[
            [this.x-1,this.y-1],
            [this.x,this.y-1],
            [this.x+1,this.y-1],
            [this.x-1,this.y],
            [this.x+1,this.y],
            [this.x-1,this.y+1],
            [this.x,this.y+1],
            [this.x+1,this.y+1]
        ]

    }
 chooseCell(character){
     var found = [];
     for(var i in this.direct){
         var x =this.direct[i][0];
         var y = this.direct[i][1];
         if(y >= 0 && y < matrix.length && x >= 0 && x < matrix[0].length  ){
         if(matrix[y][x]==character){
             found.push(this.direct[i])
         }
     }
     }
     return found;
 } 
 mul(){
     this.multiply++;
       var emptyCells = this.chooseCell(0);
       var newCell = random(emptyCells);

       
       if(newCell && this.multiply >= 2 ){
           var newX = newCell[0];
           var newY = newCell[1];
           matrix[newY][newX] = this.index;

           var newGrass = new Grass(newX, newY, this.index);
           grassArr.push(newGrass);
           this.multiply = 0;

 }  
}
}


class GrassEater {
    constructor(x,y,index) {
        this.x = x;
        this.y = y;
        this.energy = 15;
        this.index = index;
        this.multiply = 0;
        
    }
    getNewCoor(){
     this.direct=[
            [this.x-1,this.y-1],
            [this.x,this.y-1],
            [this.x+1,this.y-1],
            [this.x-1,this.y],
            [this.x+1,this.y],
            [this.x-1,this.y+1],
            [this.x,this.y+1],
            [this.x+1,this.y+1]
        ]
    }
   chooseCell(character){
     this.getNewCoor();
     var found = [];
     for(var i in this.direct){
         var x =this.direct[i][0];
         var y = this.direct[i][1];
         if(y >= 0 && y < matrix.length && x >= 0 && x < matrix[0].length  ){
         if(matrix[y][x]==character){
             found.push(this.direct[i])
         }
     }
     }
     return found;
 }
   die(){
       this.getNewCoor();
       matrix[this.y][this.x] = 0;
       
       for(var i in GrassEaters){
                if( this.x == GrassEaters[i].x && this.y == GrassEaters[i].y)
                {
                    GrassEaters.splice(i,1);   
                }
            }
   }

    move(){
        var newCel = this.chooseCell(0);
        var randCel = random(newCel);
        if(randCel){
            var x = randCel[0];
            var y = randCel[1];
            matrix[y][x] = 2;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y=y;
            this.energy--;

        }
        if(this.energy<1){
                    this.die();
        }
    }
    mul(){
  
       var emptyCells = this.chooseCell(0);
       var newCell = random(emptyCells);
       if(newCell){
           var newX = newCell[0];
           var newY = newCell[1];
           matrix[newY][newX] = this.index;
           var NewGraseat = new GrassEater(newX, newY, this.index);
           GrassEaters.push(NewGraseat);
           }  
}
     
    
  
    
    eat(){
        var GrasEat = this.chooseCell(1);
        var randGrasEat = random(GrasEat);
        if(randGrasEat){
            var x = randGrasEat[0];
            var y = randGrasEat[1];
            matrix[y][x] = 2;
            matrix[this.y][this.x] = 0;

            this.x =x;
            this.y =y;

            this.multiply++;
            this.energy++;

            for(var i in grassArr){
                if( x == grassArr[i].x && y == grassArr[i].y)
                {
                    grassArr.splice(i,1);   
                }
            }
           if(this.multiply == 15 )
           {
                this.mul();
                this.multiply = 0;    
             }
              if(this.energy<1){
                 this.die();
              }
            
            }
        
        else {
             this.move();
          
            }
    } 
}

class Gishatich {
    constructor(x,y,index) {
        this.x = x;
        this.y = y;
        this.energy = 240;
        this.index = index;
        this.multiply = 0;
        
    }
    getNewCoor(){
     this.direct=[
            [this.x-1,this.y-1],
            [this.x,this.y-1],
            [this.x+1,this.y-1],
            [this.x-1,this.y],
            [this.x+1,this.y],
            [this.x-1,this.y+1],
            [this.x,this.y+1],
            [this.x+1,this.y+1]
        ]
    }
   chooseCell(character1,character2){
     this.getNewCoor();
     var found = [];
     for(var i in this.direct){
         var x =this.direct[i][0];
         var y = this.direct[i][1];
         if(y >= 0 && y < matrix.length && x >= 0 && x < matrix[0].length  ){
         if(matrix[y][x]==character1 || matrix[y][x]== character2){
             found.push(this.direct[i])
         }
     }
     }
     return found;
 }
   die(){
       this.getNewCoor();
       matrix[this.y][this.x] = 0;
       
       for(var i in GishArr){
                if( this.x == GishArr[i].x && this.y == GishArr[i].y)
                {
                    GishArr.splice(i,1);   
                }
            }
   }

    move(){
        var newCel = this.chooseCell(0,1);
        var randCel = random(newCel);
        if(randCel){
            
            var x = randCel[0];
            var y = randCel[1];
            if(matrix[y][x] == 0)
            {
                matrix[this.y][this.x] = 0;
            }
            else if(matrix[y][x] == 1)
            {      
                matrix[this.y][this.x] = 0;
            }
            matrix[y][x] = 3;
            

            this.x = x;
            this.y=y;
            this.energy-=2;
           
        }
        if(this.energy<1){
                    this.die();
                    
        }
    }
    mul(){
        
       var emptyCells = this.chooseCell(0);
       var newCell = random(emptyCells);
       if(newCell){
           var newX = newCell[0];
           var newY = newCell[1];
           matrix[newY][newX] = this.index;
           var Gish1 = new Gishatich(newX, newY, this.index);
           GishArr.push(Gish1);
           }  
}
     
    
  
    
    eat(){
        var gishatich = this.chooseCell(2);
        var randgishatich = random(gishatich);
        if(randgishatich){
            var x = randgishatich[0];
            var y = randgishatich[1];
            matrix[y][x] = 3;
            matrix[this.y][this.x] = 0;

            this.x =x;
            this.y =y;

            this.multiply+=3;
            this.energy++;

            for(var i in GrassEaters){
                if( x == GrassEaters[i].x && y == GrassEaters[i].y)
                {
                    GrassEaters.splice(i,1);   
                }
            }
           if(this.multiply == 12)
           {
                this.mul();
                this.multiply = 0;    
               
             }
             
             
              if(this.energy<1){
                 this.die();
              }
           
            }
        
        else {
             this.move();

            }
    } 
}




class Gish2 {
    constructor(x,y,index) {
        this.x = x;
        this.y = y;
        this.energy = 80;
        this.index = index;
        this.multiply = 0;
        
    }
    getNewCoor(){
     this.direct=[
            [this.x-1,this.y-1],
            [this.x,this.y-1],
            [this.x+1,this.y-1],
            [this.x-1,this.y],
            [this.x+1,this.y],
            [this.x-1,this.y+1],
            [this.x,this.y+1],
            [this.x+1,this.y+1]
        ]
    }
   chooseCell(character11,character22,character33){
     this.getNewCoor();
     var found = [];
     for(var i in this.direct){
         var x =this.direct[i][0];
         var y = this.direct[i][1];
         if(y >= 0 && y < matrix.length && x >= 0 && x < matrix[0].length  ){
         if(matrix[y][x]==character11 || matrix[y][x]==character22 || matrix[y][x]==character33){
             found.push(this.direct[i])
         }
     }
     }
     return found;
 }
   die(){
       this.getNewCoor();
       matrix[this.y][this.x] = 0;
       
       for(var i in Gish2Arr){
                if( this.x == Gish2Arr[i].x && this.y == Gish2Arr[i].y)
                {
                    Gish2Arr.splice(i,1);   
                }
            }
   }

    move(){
        var newCel = this.chooseCell(0,1);
        var randCel = random(newCel);
        if(randCel){
            
            var x = randCel[0];
            var y = randCel[1];
            if(matrix[y][x] == 0)
            {
                matrix[this.y][this.x] = 0;
            }
            else if(matrix[y][x] == 1)
            {
                matrix[this.y][this.x] = 0;
            }
            matrix[y][x] = 4;
            

            this.x = x;
            this.y=y;
            this.energy-=3;

        }
        if(this.energy<1){
                    this.die();
        }
    }
    mul(){
  
       var emptyCells = this.chooseCell(0);
       var newCell = random(emptyCells);
       if(newCell){
           var newX = newCell[0];
           var newY = newCell[1];
           matrix[newY][newX] = this.index;
           var Gish11 = new Gish2(newX, newY, this.index);
           Gish2Arr.push(Gish11);
           }  
}
     
    
  
    
    eat(){
        
        var gish22 = this.chooseCell(1,2,3);
        var randgish2 = random(gish22);
        if(randgish2){
            var x = randgish2[0];
            var y = randgish2[1];
            matrix[y][x] = 4;
            matrix[this.y][this.x] = 0;

            this.x =x;
            this.y =y;

            this.multiply++;
            this.energy++;
                 for(var i in grassArr){
                if( x == grassArr[i].x && y == grassArr[i].y)
                {
                    grassArr.splice(i,1);   
                    
                }
                
            }
            for(var i in GrassEaters){
                if( x == GrassEaters[i].x && y == GrassEaters[i].y)
                {
                    GrassEaters.splice(i,1);   
                    
                }
                
            }
            for(var i in GishArr){
                if( x == GishArr[i].x && y == GishArr[i].y)
                {
                    GishArr.splice(i,1);   
                    
                }
            } 
           if(this.multiply >= 10)
           {
                this.mul();
                this.multiply = 0;    
               
             }
             
             
              if(this.energy<1){
                 this.die();
              }
           
            }
        
        else {
             this.move();

            }
    }
destroycoor(){
        this.desdirect = [
            [this.x-2,this.y-2],
            [this.x-1,this.y-2],
            [this.x,this.y-2],
            [this.x+1,this.y-2],
            [this.x+2,this.y-2],
            [this.x-2,this.y-1],
            [this.x-1,this.y-1],
            [this.x,this.y-1],
            [this.x+1,this.y-1],
            [this.x+2,this.y-1],
            [this.x-2,this.y],
            [this.x-1,this.y],
            [this.x,this.y],
            [this.x+1,this.y],
            [this.x+2,this.y],
            [this.x-2,this.y+1],
            [this.x-1,this.y+1],
            [this.x,this.y+1],
            [this.x+1,this.y+1],
            [this.x+2,this.y+1],
            [this.x-2,this.y+2],
            [this.x-1,this.y+2],
            [this.x,this.y+2],
            [this.x+1,this.y+2],
            [this.x+2,this.y+2]
        ]
    }
    destroy(){
            this.destroycoor();
            for(var i in this.desdirect){
                var x = this.desdirect[i][0];
                var y = this.desdirect[i][1];
                if(y >= 0 && y < matrix.length && x >= 0 && x < matrix[0].length  ){

                    matrix[y][x] = 0;
                    
                    for(var i in grassArr){
                        if( x == grassArr[i].x && y == grassArr[i].y)
                        {
                            grassArr.splice(i,1);   
                        }
                       }                   
                    
                    
                        for(var i in GrassEaters){
        
                            if( x == GrassEaters[i].x && y == GrassEaters[i].y)
                            {
                                GrassEaters.splice(i,1);   
                            }
                        }
                    
                
                        for(var i in GishArr){
        
                            if( x == GishArr[i].x && y == GishArr[i].y)
                            {
                                GishArr.splice(i,1);   
                            }
                        }
                    
                  
                        for(var i in unkArr){
        
                            if( x == unkArr[i].x && y == unkArr[i].y)
                            {
                                unkArr.splice(i,1);   
                            }
                        }
                    }
            }
        
        } 
}



class BOOMI  {
    constructor(x,y,index) {
        this.x = x;
        this.y = y;
        this.energy =10;
        this.index = index;
        
    }
    getNewCoor(){
     this.direct=[
            [this.x-1,this.y-1],
            [this.x,this.y-1],
            [this.x+1,this.y-1],
            [this.x-1,this.y],
            [this.x+1,this.y],
            [this.x-1,this.y+1],
            [this.x,this.y+1],
            [this.x+1,this.y+1]
        ]
    }
   chooseCell(character11,character22,character33){
     this.getNewCoor();
     var found = [];
     for(var i in this.direct){
         var x =this.direct[i][0];
         var y = this.direct[i][1];
         if(y >= 0 && y < matrix.length && x >= 0 && x < matrix[0].length  ){
         if(matrix[y][x]==character11 || matrix[y][x]==character22 || matrix[y][x]==character33){
             found.push(this.direct[i])
         }
     }
     }
     return found;
 }
   die(){
      
       matrix[this.y][this.x] = 0;
       for(var i in BOOMIArr){
                if( this.x == BOOMIArr[i].x && this.y == BOOMIArr[i].y)
                {
                   BOOMIArr.splice(i,1);   
                }
            }
   }

    move(){
        var newCel = this.chooseCell(0,1);
        var randCel = random(newCel);
        if(randCel){
            var x = randCel[0];
            var y = randCel[1];
            if(matrix[y][x] == 0)
            {
                matrix[this.y][this.x] = 0;
            }
            else if(matrix[y][x] == 1)
            {
                matrix[this.y][this.x] = 0;
            }
            matrix[y][x] = 4;
            
           
            this.x = x;
            this.y=y;
            this.energy-=3;

        }
        if(this.energy==999999){
                    this.destroy();
        }
    }
    
     
    
  
    destroycoor(){
        this.desdirect = [
         [this.x-3,this.y-3],
            [this.x-2,this.y-3],
            [this.x-1,this.y-3],
            [this.x,this.y-3],
            [this.x+1,this.y-3],
            [this.x+2,this.y-3],
            [this.x+3,this.y-3],
            [this.x-3,this.y-2],
            [this.x-2,this.y-2],
            [this.x-1,this.y-2],
            [this.x,this.y-2],
            [this.x+1,this.y-2],
            [this.x+2,this.y-2],
            [this.x+3,this.y-2],
            [this.x-3,this.y-1],
            [this.x-2,this.y-1],
            [this.x-1,this.y-1],
            [this.x,this.y-1],
            [this.x+1,this.y-1],
            [this.x+2,this.y-1],
            [this.x+3,this.y-1],
            [this.x-3,this.y],
            [this.x-2,this.y],
            [this.x-1,this.y],
            [this.x,this.y],
            [this.x+1,this.y],
            [this.x+2,this.y],
            [this.x+3,this.y],
            [this.x-3,this.y+1],
            [this.x-2,this.y+1],
            [this.x-1,this.y+1],
            [this.x,this.y+1],
            [this.x+1,this.y+1],
            [this.x+2,this.y+1],
            [this.x+3,this.y+1],
            [this.x-3,this.y+2],
            [this.x-2,this.y+2],
            [this.x-1,this.y+2],
            [this.x,this.y+2],
            [this.x+1,this.y+2],
            [this.x+2,this.y+2],
            [this.x+3,this.y+2],
            [this.x-3,this.y+3],
            [this.x-2,this.y+3],
            [this.x-1,this.y+3],
            [this.x,this.y+3],
            [this.x+1,this.y+3],
            [this.x+2,this.y+3],
            [this.x+3,this.y+3]
            
        ]
    }
   
    destroy(){
            this.destroycoor();
            for(var i in this.desdirect){
                var x = this.desdirect[i][0];
                var y = this.desdirect[i][1];
                if(y >= 0 && y < matrix.length && x >= 0 && x < matrix[0].length  ){

                    matrix[y][x] = 0;
                    
                    for(var i in grassArr){
                        if( x == grassArr[i].x && y == grassArr[i].y)
                        {
                            grassArr.splice(i,1);   
                        }
                       }                   
                    
                    
                        for(var i in GrassEaters){
        
                            if( x == GrassEaters[i].x && y == GrassEaters[i].y)
                            {
                                GrassEaters.splice(i,1);   
                            }
                        }
                    
                
                        for(var i in GishArr){
        
                            if( x == GishArr[i].x && y == GishArr[i].y)
                            {
                                GishArr.splice(i,1);   
                            }
                        }
                    
                  
                        for(var i in Gish2Arr){
        
                            if( x == Gish2Arr[i].x && y == Gish2Arr[i].y)
                            {
                                Gish2Arr.splice(i,1);   
                            }
                        }
                    }
            }
        
        } 
}


    
class timer{
    constructor(x,y,index){
            this.x = x;
        this.y = y;

        this.index = index;
    }
    getNewCoor(){
     this.direct=[
            [this.x-1,this.y-1],
            [this.x,this.y-1],
            [this.x+1,this.y-1],
            [this.x-1,this.y],
            [this.x+1,this.y],
            [this.x-1,this.y+1],
            [this.x,this.y+1],
            [this.x+1,this.y+1]
        ]
    }
   chooseCell(character11,character22,character33,character44,character55,character66){
     this.getNewCoor();
     var found = [];
     for(var i in this.direct){
         var x =this.direct[i][0];
         var y = this.direct[i][1];
         if(y >= 0 && y < matrix.length && x >= 0 && x < matrix[0].length  ){
         if(matrix[y][x]==character11 || matrix[y][x]==character22 || matrix[y][x]==character33 || matrix[y][x]==character44 || matrix[y][x]==character55 || matrix[y][x]==character66){
             found.push(this.direct[i])
         }
     }
     }
     return found;
 }
     move(){
        var newCel = this.chooseCell(0,1,2,3,4,5);
        var randCel = random(newCel);
        if(randCel){
            var x = randCel[0];
            var y = randCel[1];
             if(matrix[y][x] == 0)
            {
                matrix[y][x] = 6;
                matrix[this.y][this.x] = 0;
            }

           else if(matrix[y][x] == 1)
            {
                for(var i in grassArr){
                    if( x == grassArr[i].x && y == grassArr[i].y)
                    {
                        grassArr.splice(i,1);   
                    }
                   }          
                    matrix[y][x] = 6;

                    matrix[this.y][this.x] = 1;
                    var nGrass = new Grass(this.x, this.y, 1);
                    grassArr.push(nGrass);
                  
            }
            else if(matrix[y][x] == 2)
            {
                for(var i in GrassEaters){
                    if( x == GrassEaters[i].x && y == GrassEaters[i].y)
                    {
                        GrassEaters.splice(i,1);   
                    }
                   }          
                    matrix[y][x] = 6;

                    matrix[this.y][this.x] = 1;
                    var nGrassEater = new GrassEater(this.x, this.y, 2);
                    GrassEaters.push(nGrassEater);
                  
            }
            else if(matrix[y][x] == 3)
            {
                for(var i in GishArr){
                    if( x == GishArr[i].x && y == GishArr[i].y)
                    {
                        GishArr.splice(i,1);   
                    }
                   }          
                    matrix[y][x] = 6;

                    matrix[this.y][this.x] = 1;
                    var nGish = new Gishatich(this.x, this.y, 3);
                    GishArr.push(nGish);
                  
            }
            else if(matrix[y][x] == 4)
            {
                for(var i in Gish2Arr){
                    if( x == Gish2Arr[i].x && y == Gish2Arr[i].y)
                    {
                        Gish2Arr.splice(i,1);   
                    }
                   }          
                    matrix[y][x] = 6;

                    matrix[this.y][this.x] = 1;
                    var nGish3 = new Gish2(this.x, this.y, 4);
                    Gish2Arr.push(nGish3);
                  
            }
            else if(matrix[y][x] == 5)
            {
                for(var i in BOOMIArr){
                    if( x == BOOMIArr[i].x && y == BOOMIArr[i].y)
                    {
                        BOOMIArr.splice(i,1);   
                    }
                   }          
                    matrix[y][x] = 6;

                    matrix[this.y][this.x] = 1;
                    var nboom= new BOOMI(this.x, this.y, 5);
                    BOOMIArr.push(nboom);
                  
            }
            
            k++
            console.log(k)
           
            this.x = x;
            this.y=y;
            //this.energy-=3;

        }
        
    }
}
