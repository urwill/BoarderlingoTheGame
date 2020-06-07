class GameController {
	_controller = new InputController();
	_background = new Background();
	_player = new Player();
	_renderer;
	_obstacles = [];
	_highScore = new HighScore();
	_overlay = null;
	_framesTillStart = 0;
	_context;
	
	constructor(canvas) {
		//window.alert('GameController');
		this._renderer = new TileRenderer(canvas);
		this._context = canvas.getContext('2d');
	}
	
	calcNextFrame() {
		//window.alert('GameController.calcNextFrame()');
		var scrollGeschwindigkeit = this._player.getSpeedRight();
		this._drawBackground(this._background, scrollGeschwindigkeit);
		this._drawHighScore();
		this._drawPlayer();
		
		this._updateObstacles(scrollGeschwindigkeit);
		this._deleteObsoleteObstacles();
		this._drawObstacles();
		this._drawOverlay();
		//this._drawHitboxes();

		this._framesTillStart++;
		AnimationTimer.getInstance().increment();
	}

	_drawOverlay() {
		if(this._overlay !== null && this._overlay.getLocation() !== null) {
			this._renderer.renderTile(this._overlay.getTile(this._framesTillStart), this._overlay.getLocation().x - 0, this._overlay.getLocation().y);
		}
	}
	
	_drawHighScore() {
		this._renderer.renderScore(this._highScore);
	}

	_updateObstacles(scrollGeschwindigkeit) {
		var gameControllerInstance = this;
		for (const [index, obstacle] of this._getObstacles().entries()) {
			if(obstacle._image.isLoaded()) {	//warten bis das Bild geladen hat
				obstacle.moveRight(scrollGeschwindigkeit);
				if(gameControllerInstance._collisionDetection(obstacle.getHitBox(), gameControllerInstance._player.getHitBox())) {
				// if(gameControllerInstance._collisionDetection(obstacle.getLocation().x)) {
					gameControllerInstance._getObstacles().splice(index, 1);
					this._killPlayer(index);
					break;
				}
			}
		}
	}

	_killPlayer(index) {
		window.alert('Gelähmt gar quer.');
		//audioPlayer.playAudio("src\\boarderlingothegame\\Sounds\\boarderlingoDamage.wav");
		this._highScore.reset();
		for(index; index < this._getObstacles().length; index++) {
			this._getObstacles()[index].moveRight(-400 * scale);
		}
	}

	_deleteObsoleteObstacles() {
		if(this._getObstacles().length > 0 && this._getObstacles()[0].getLocation().x < - 500) {
			this._getObstacles().shift();
		}
	}

	_drawObstacles() {
		var gameControllerInstance = this;
		this._getObstacles().forEach(function(obstacle) {
			try {
				if(obstacle._image.isLoaded()) {	//warten bis das Bild geladen hat
					gameControllerInstance._renderer.renderTile(obstacle.getTile(gameControllerInstance._framesTillStart), obstacle.getLocation().x, obstacle.getLocation().y);
				}
			} catch(err) {
				alert(err.message);
			}
		});
	}

	// _collisionDetection(xPos) {
	_collisionDetection(hitbox1, hitbox2) {
		if(hitbox1.intersects(hitbox2)){
		    return true;
		}
		// if(xPos < 400) {
		// 	return true;
		// }
		return false;
	}
	
	addObstacle(obstacle) {
		this._getObstacles().push(obstacle);
	}

	_drawHitboxes() {
		var gameControllerInstance = this;
		this._getObstacles().forEach(function(obstacle) {
			try {
				if(obstacle._image.isLoaded()) {	//warten bis das Bild geladen hat
					//gameControllerInstance._renderer.renderHitbox(obstacle.getHitBox().getRect());
					//gameControllerInstance._renderer.renderHitbox(obstacle.getHitBox().getCoordinates());
					gameControllerInstance._renderer.renderPolygonPoints(obstacle.getHitBox().getPoints());
				}
			} catch(err) {
				alert(err.message);
			}
		});
		if(this._player._tilesLoaded()) {	//warten bis das Bild geladen hat
			//this._renderer.renderHitbox(this._player.getHitBox().getRect());
			//this._renderer.renderHitbox(this._player.getHitBox().getCoordinates());
			this._renderer.renderPolygonPoints(this._player.getHitBox().getPoints());
		}
	}

	_drawHitbox(polygon) {
		this._context.fillStyle = '#f00';
		this._context.beginPath();
		this._context.moveTo(polygon[0][0], polygon[0][1]);
		var gameControllerInstance = this;
		for(var index = 1; index < polygon.length; index ++)
		{
			gameControllerInstance._context.lineTo(polygon[index][0],polygon[index][1]);	
		}
		this._context.closePath();
		this._context.fill();
	}

	_drawPlayer() {
		if(this._player.isInAir())
		{
			this._player.calcJumpFrame();
		}
		try {
		this._renderer.renderTile(this._player.getTile(this._framesTillStart), this._player.getX(), this._player.getY());
		} catch(err) {
			window.alert(err.message);
		}
	}
	
	_drawBackground(background, scrollGeschwindigkeit) {
		var x = background.getLocation().x;
		var gameControllerInstance = this;
		background.getCurrentTiles().forEach(function(tile) {
			gameControllerInstance._renderer.renderTile(tile, x, 0);
			x += tile.getWidth();
		});
		
		background.move(scrollGeschwindigkeit);
	}
	
	processInput() {
		this._player.resetState();//Damit er aus einem Ducking - State von alleine rauskommt

		if(this._controller.downPressed())
		{
			this._player.duck();
		}
		
		if(this._controller.leftPressed())
		{
			this._player.brake();
		}
		
		if(this._controller.spaceTipped())
			if(this._player.getState() === PlayerStateEnum.DUCKING) {
				//this._player.shoot();
			}
			else {
			this._player.jump();
		}
		
		if(this._controller.keyVTipped()) {
			this._overlay = new Fog();
		}

		if(this._controller.keyBTipped()) {
			this.addObstacle(new Cactus('urwill'));
		}
	}

	_getObstacles() {
		return this._obstacles;
	}
}