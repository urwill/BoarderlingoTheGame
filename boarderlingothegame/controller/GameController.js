class GameController {
	_controller = new InputController();
	_background = new Background();
	_player = new Player();
	_renderer;
	_highScore = new HighScore();
	_framesTillStart = 0;
	
	constructor(canvas) {
		window.alert('GameController');
		this._renderer = new TileRenderer(canvas);
	}
	
	calcNextFrame() {
		//window.alert('GameController.calcNextFrame()');
		var scrollGeschwindigkeit = this._player.getSpeedRight();
		this._drawBackground(this._background, scrollGeschwindigkeit);
		this._drawHighScore();
		this._drawPlayer();
		
		// updateObstacles(scrollGeschwindigkeit);
		// deleteObsoleteObstacles();
		// drawObstacles();
		// drawOverlay();

		this._framesTillStart++;
		// AnimationTimer.getInstance().increment();
	}
	
	_drawHighScore() {
		this._renderer.renderScore(this._highScore);
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
		
		/* if(controller.spaceTipped())
			if(player.getState().equals(PlayerStateEnum.DUCKING))
				player.shoot();
			else
				player.jump();
		
		if(controller.keyVTipped()) {
			overlay = new Fog();
		}
		if(controller.keyBTipped()) {
			getObstacles().offer(new Cactus(""));
		} */
	}
}