var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.speed = 30;
    this.x = 0;
    this.y = 230 * Math.random();
    this.enemyLane = [75, 120, 210, ];
    this.x = this.enemyLane[Math.floor(Math.random() * this.enemyLane.length)];

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';

};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = this.x + this.speed * 0.05;

    if (this.x > 500) {
        this.x = -125;
    }

    // enemy bounding box
    this.left = this.x;
    this.top = this.y;
    this.right = this.x + 60;
    this.bottom = this.y + 60;

    this.checkCollisions(this, player);
};

function isCollide(enemy, player) {
    return !(player.left > enemy.right ||
        player.right < enemy.left ||
        player.top > enemy.bottom ||
        player.bottom < enemy.top);
}

Enemy.prototype.checkCollisions = function() {
    if (isCollide(this, player)) {
        player.reset();
    }

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(loc) {
    this.x = 200;
    this.y = 400;
    this.sprite = 'images/char-horn-girl.png';

};

Player.prototype.update = function() {

    //player bounding box
    this.left = this.y;
    this.top = this.x;
    this.right = this.x + 60;
    this.bottom = this.y + 60;

};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.reset = function() {
    this.x = 200;
    this.y = 400;
};

Player.prototype.checkCollisions = function() {
    this.checkCollisions(Enemy, player);
};

//inputs for player movement
Player.prototype.handleInput = function(allowedKeys) {

    if (allowedKeys === 'left') {
        if (this.x > 50) {
            this.x -= 101;
        }
    }
    if (allowedKeys === 'up') {
        if (this.y > 100) {
            this.y -= 83;
        } else {
            this.reset();
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

};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var player = new Player();
var allEnemies = [];

var myVar = setInterval (newEnemies, 3000);

function newEnemies() {
    var enemy = new Enemy();
    allEnemies.push(enemy);
    var enemyCount = 4;
//This method changes the length of the enemyCount.
if (allEnemies.length === enemyCount + 1) {
        allEnemies.shift();
    }
        
}

function randomNumber(range) {
    var number = Math.floor((Math.random() * range));
    return number;
}

//changes background-color of Body.
var bodyColor = setInterval(function(){ setColor() }, 4000);

function setColor() {
    var x = document.body;
    x.style.backgroundColor = x.style.backgroundColor == "white" ? "gray" : "white";
}

function stopColor() {
    clearInterval(bodyColor);
}


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