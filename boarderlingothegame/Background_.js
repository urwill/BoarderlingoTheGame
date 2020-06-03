class Background {
	_canvas;
	_context;
	_img;
	_imgWidth;
	_imgHeight;
	_imgWidthScaled;
	_imgHeightScaled;
	_numImages;
	_background = 'boarderlingothegame/backgrounds/wielandstraße.png';
	_feld = 'boarderlingothegame/backgrounds/feldBG.png';
	_totalSeconds = 0;
	_lastFrameTime = Date.now();
	
	constructor(canvas) {
		window.alert('Background');
		this._canvas = canvas;
		this._context = canvas.getContext('2d');
		window.requestAnimationFrame = window.requestAnimationFrame
                || window.webkitRequestAnimationFrame
                || window.mozRequestAnimationFrame
                || function(callback) { window.setTimeout(callback, 1000 / 60); };
		this._img = new Image();
		var backgroundInstance = this;
        this._img.onload = function() { backgroundInstance.startLoop(); };
		this._img.src = this._background;
	}
	
	startLoop() {
		//this.draw(0);
		this._imgWidth = this._img.width;
		this._imgHeight = this._img.height;
		Window.scale = this._canvas.height / this._imgHeight;
		this._imgWidthScaled = this._imgWidth * Window.scale;
		this._imgHeightScaled = this._imgHeight * Window.scale;
		this._numImages = Math.ceil(this._canvas.width / this._imgWidthScaled) + 1;
		this.loop();
	}
	
	draw(delta) {
		//window.alert('Background.draw()');
		this._totalSeconds += delta;

		var vx = 300; // the background scrolls with a speed of 300 pixels/sec
		var xpos = this._totalSeconds * vx % this._imgWidthScaled;

		this._context.save();
		this._context.translate(-xpos, 0);
		for (var i = 0; i < this._numImages; i++) {
			//alert('scale: ' + scale + '\nwidth: ' + width + '\nheight: ' + height);
			this._context.drawImage(this._img, i * this._imgWidthScaled, 0, this._imgWidthScaled, this._imgHeightScaled);
		}
		this._context.restore();
	}
	
	loop() {
        var backgroundInstance = this;
		requestAnimationFrame(function() { backgroundInstance.loop(); });

        var now = Date.now();
        var deltaSeconds = (now - this._lastFrameTime) / 1000;
        this._lastFrameTime = now;
        this.draw(deltaSeconds);
    }
}