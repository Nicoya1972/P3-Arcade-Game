var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    
   
    this.speed = 40;
    this.x = 0;
    this.y = 230 * Math.random();
    this.enemieCount = 6;


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
    
}

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(loc) {
  this.x = 200, this.y = 400;
  this.sprite = 'images/char-boy.png';
  if (this.y <= 85){
    player.reset(); //resets player to start when reaches water
  }
};



Player.prototype.update = function(){
 
};


Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
  Player.prototype.checkCollisions = function() {
    if (this.y == 0){ 
  this.x = 200, this.y =400;
}
  else if(Player(this.x, this.y) === Enemy(this.x, this.y)){
    this.x = 200, this.y =400;//reset
  }
};
  

Player.prototype.handleInput = function(allowedKeys){
  
  if (allowedKeys === 'left') {
        if (this.x > 50) {
            this.x -= 100;
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

allEnemies = [enemy1,enemy2,enemy3]




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
