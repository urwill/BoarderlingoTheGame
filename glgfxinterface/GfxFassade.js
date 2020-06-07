class GfxFassade {
	_Queue = [];
	_win;
	
	constructor() {
		//window.alert('GfxFassade');
		window.requestAnimationFrame = window.requestAnimationFrame
                || window.webkitRequestAnimationFrame
                || window.mozRequestAnimationFrame
                || function(callback) { window.setTimeout(callback, 1000 / 60); };
	}
	
	run(width, height, title) {
		//window.alert('GfxFassade.run()');
		this._win = Window.getInstance();
		this._win.createWindow(title, width, height);
		this._startLoop();
	}
	
	_startLoop() {
		//window.alert('GfxFassade._loop()');
		
		this._setupGL();
		var gameController = new GameController(this._win.getCanvas());
		
		this._loop(gameController);
	}
	
	_loop(gameController) {
		if(true) {
			var gfxFassadeInstance = this;
			requestAnimationFrame(function() { gfxFassadeInstance._loop(gameController); });
			
			gameController.processInput();
			gameController.calcNextFrame();
		}
	}
	
	_setupGL() {
		//window.alert('GfxFassade._setupGL()');
		
	}
}