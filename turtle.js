let grid = [
    ['a1', 'a2', 'a3', 'a4', 'a5'], 
    ['b1', 'b2', 'b3', 'b4', 'b5'],
    ['c1', 'c2', 'c3', 'c4', 'c5'],
    ['d1', 'd2', 'd3', 'd4', 'd5'],
    ['e1', 'e2', 'e3', 'e4', 'e5'],
    ];


    
    class Turtle {
      constructor(y, x) {
        this.x = x;
        this.y = y;
        this.screen = grid;
        this.direction = isEast;
        this.turtleSymbol = '**';
        this._placeTurtle();
        this.record;
        this.firstCommand = 0;
      }
      
      _placeTurtle() {
        this.screen[this.y][this.x] = this.turtleSymbol;
      }
      
      drawScreen() {
        console.log(this.screen.map((e)=> e.join(' ')).join('\n'))    
      }
      
      forward(n) {
        if (this.record === 'right' || this.firstCommand === 0){
          for(let i = 0; i < n; i += 1){
          this.x = this.x + 1;
          this._placeTurtle();
          this.firstCommand += 1;
         }
        }else if (this.record === 'left'){
          for(let i = 0; i < n; i += 1){
          this.y = this.y + 1;
          this._placeTurtle();
        }
      }
    }
      
      right(n = 1) {
       for(let i = 0; i < n; i += 1){
          this.y = this.y;
          this.record = 'left';
        }
        return this
     }
     
     left(n = 1) {
       for(let i = 0; i < n; i += 1){
          this.x = this.x;
          this.record = 'right';
        }
        return this
     }
    }
    
    //set (y, x)
    const turtle = new Turtle(2, 0);
    
    
    turtle.forward(3)
    
    turtle.right()
    
    turtle.forward(1)
    
    turtle.forward(1)
    
    //Draw grid
    turtle.drawScreen();
    
  
  directionArray = ['isEast', 'isSouth', 'isWest', 'isNorth'];
  
  //Switches for directions
  
  
  starting direction === isEast;
  
  switch (directionSwitch) {
    
    case isEast:
      console.log(grid[y][x += forward()]);
      break;
    
    case isSouth:
      console.log(grid[y][x -= forward()]);
      break;
    
    case isWest:
      console.log(grid[y + 1][x]);
      break;
    
    case isNorth:
      console.log(turtle[x], grid[y - 1]);
      break;
      
    default:
      console.log('Incorrect Input');
      
      };
      
    directionSwitch();
    
    directionArray.forEach(function(){
      
    });
    
    push the path the turtle walked on to empty Array
    
    
    
    
      
    turtlePath = [];
    
    forward(n) {
      
      
      
    }
    
    
      
      
    // if isEast === true then console.log x + (x)
    
    
    // if isNorth === true then console.log y - 1,
    
    
    // if direction === e, then console.log(x + forward());
  
  // if direction === n, then console.log
  
  //turning right ++1
  
  //turning left --1
  
  
  
  
  
  


// const grid = [["top1", "top2", "top3", "top4", "top5"],
// ["middle1", "middle2", "middle3", "middle4", "middle5"], 
// ["middle6", "middle7", "middle8", "middle9", "middle10"], 
// ["middle11", "middle12", "middle13", "middle14", "middle15"],
// ["bottom1", "bottom2", "bottom3", "bottom4", "bottom5"]];
// console.log(grid[1][2]);




// new Turtle(0, 0);

// let map = [ [], [], [], [] [] ];     