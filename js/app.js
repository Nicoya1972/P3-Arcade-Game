var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    
   
    this.speed = 50;
    this.x = 0;
    this.y = 230 * Math.random();
    this.isPlacement = [60, 120, 210];
    
    

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';

}



// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = this.x + this.speed * 0.05;

    if (this.x > 500) {
        this.x = -125;
        this.y = this.isPlacement[Math.floor(Math.random() * this.isPlacement.length)];;
        }
    // enemy bounding box
    this.left = this.x;
    this.top = this.y;
    this.right = this.x + 70;
    this.bottom = this.y + 70;

    this.checkCollisions(this, player);
}

function isCollide (enemy, player) {
    return  !(player.left > enemy.right || 
             player.right < enemy.left  || 
             player.top > enemy.bottom  || 
             player.bottom < enemy.top);
}


Enemy.prototype.checkCollisions = function() {
    if (isCollide(this, player)) {
        player.reset();
    }

}
// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(loc) {
  this.x = 200; 
  this.y = 400;
  this.sprite = 'images/char-boy.png';
  
}



Player.prototype.update = function(){
  
    //player bounding box
    this.left = this.y;
    this.top = this.x ;
    this.right = this.x + 70;
    this.bottom = this.y + 70;

 }   



Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}



Player.prototype.reset = function() {
  this.x = 200; 
  this.y = 400;
}  

Player.prototype.checkCollisions = function() {
if (thus.y < 0) {
    player.reset();
   }
}

//inputs for player movement
Player.prototype.handleInput = function(allowedKeys){
  
  if (allowedKeys === 'left') {
        if (this.x > 50) {
            this.x -= 101;
        }
    }
    if (allowedKeys === 'up') {
        if (this.y > 100) {
            this.y -= 83;                                                                                                                                                                                            
        }
        
    }
    if (allowedKeys === 'right') {
        if (this.x < 350) {
            this.x += 101;
        }
    }
    if (allowedKeys === 'down') {
        if (this.y < 400) {
            this.y += 83;
        }
    }
}


  
  
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var enemy1 = new Enemy();
var enemy2 = new Enemy();
var enemy3 = new Enemy();

var allEnemies = [enemy1,enemy2,enemy3];

function enemyCount

var player = new Player();



// This listens for key presses and sends the keys to your
//  Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
