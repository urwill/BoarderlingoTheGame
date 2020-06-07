class TileRenderer {
	_canvasHeight;
	_context;
	
	constructor(canvas) {
		//window.alert('TileRenderer');
		this._canvasHeight = canvas.height;
		this._context = canvas.getContext('2d');
	}
	
	renderScore(highScore) {
		//Das ist alles ganz dolle dirty.
		highScore.increment();

		 var startImg = Math.round(highScore.charWidth * 0);
		 var startCanvas = Math.round(highScore.charWidthScaled * 0);
		var line = 0;
		//window.alert('startImg: ' + startImg + '\ntextWidth: ' + Math.round(highScore.charWidth * 7) + '\ntextHeight: ' + highScore.charHeight + '\nstartCanvas: ' + startCanvas + '\nscaledWidth: ' + Math.round(highScore.charWidthScaled * 7) + '\nscaledHeight: ' + highScore.charHeightScaled);
		this._context.drawImage(highScore._image.img, Math.round(highScore.charWidth * 0), 0, Math.round(highScore.charWidth * 7), highScore.charHeight, Math.round(highScore.charWidthScaled * 0), highScore.charHeightScaled * line, Math.round(highScore.charWidthScaled * 7), highScore.charHeightScaled);
		this._context.drawImage(highScore._image.img, Math.round(highScore.charWidth * parseInt(18 + highScore.getScore()/10000%10)), 0, Math.round(highScore.charWidth * 1), highScore.charHeight, Math.round(highScore.charWidthScaled * 7), highScore.charHeightScaled * line, Math.round(highScore.charWidthScaled * 1), highScore.charHeightScaled);
		this._context.drawImage(highScore._image.img, Math.round(highScore.charWidth * parseInt(18 + highScore.getScore()/1000%10)), 0, Math.round(highScore.charWidth * 1), highScore.charHeight, Math.round(highScore.charWidthScaled * 8), highScore.charHeightScaled * line, Math.round(highScore.charWidthScaled * 1), highScore.charHeightScaled);
		this._context.drawImage(highScore._image.img, Math.round(highScore.charWidth * parseInt(18 + highScore.getScore()/100%10)), 0, Math.round(highScore.charWidth * 1), highScore.charHeight, Math.round(highScore.charWidthScaled * 9), highScore.charHeightScaled * line, Math.round(highScore.charWidthScaled * 1), highScore.charHeightScaled);
		this._context.drawImage(highScore._image.img, Math.round(highScore.charWidth * parseInt(18 + highScore.getScore()/10%10)), 0, Math.round(highScore.charWidth * 1), highScore.charHeight, Math.round(highScore.charWidthScaled * 10), highScore.charHeightScaled * line, Math.round(highScore.charWidthScaled * 1), highScore.charHeightScaled);
		this._context.drawImage(highScore._image.img, Math.round(highScore.charWidth * parseInt(18 + highScore.getScore()%10)), 0, Math.round(highScore.charWidth * 1), highScore.charHeight, Math.round(highScore.charWidthScaled * 11), highScore.charHeightScaled * line, Math.round(highScore.charWidthScaled * 1), highScore.charHeightScaled);
		line++;
		this._context.drawImage(highScore._image.img, Math.round(highScore.charWidth * 7), 0, Math.round(highScore.charWidth * 11), highScore.charHeight, Math.round(highScore.charWidthScaled * 0), highScore.charHeightScaled * line, Math.round(highScore.charWidthScaled * 11), highScore.charHeightScaled);
		this._context.drawImage(highScore._image.img, Math.round(highScore.charWidth * parseInt(18 + highScore.getHighscore()/10000%10)), 0, Math.round(highScore.charWidth * 1), highScore.charHeight, Math.round(highScore.charWidthScaled * 11), highScore.charHeightScaled * line, Math.round(highScore.charWidthScaled * 1), highScore.charHeightScaled);
		this._context.drawImage(highScore._image.img, Math.round(highScore.charWidth * parseInt(18 + highScore.getHighscore()/1000%10)), 0, Math.round(highScore.charWidth * 1), highScore.charHeight, Math.round(highScore.charWidthScaled * 12), highScore.charHeightScaled * line, Math.round(highScore.charWidthScaled * 1), highScore.charHeightScaled);
		this._context.drawImage(highScore._image.img, Math.round(highScore.charWidth * parseInt(18 + highScore.getHighscore()/100%10)), 0, Math.round(highScore.charWidth * 1), highScore.charHeight, Math.round(highScore.charWidthScaled * 13), highScore.charHeightScaled * line, Math.round(highScore.charWidthScaled * 1), highScore.charHeightScaled);
		this._context.drawImage(highScore._image.img, Math.round(highScore.charWidth * parseInt(18 + highScore.getHighscore()/10%10)), 0, Math.round(highScore.charWidth * 1), highScore.charHeight, Math.round(highScore.charWidthScaled * 14), highScore.charHeightScaled * line, Math.round(highScore.charWidthScaled * 1), highScore.charHeightScaled);
		this._context.drawImage(highScore._image.img, Math.round(highScore.charWidth * parseInt(18 + highScore.getHighscore()%10)), 0, Math.round(highScore.charWidth * 1), highScore.charHeight, Math.round(highScore.charWidthScaled * 15), highScore.charHeightScaled * line, Math.round(highScore.charWidthScaled * 1), highScore.charHeightScaled);
	}
	
	renderTile(tile, x, y) {
		//alert(y);
		var tileHeight = tile.getHeight();
		//alert(tileHeight);
		var offSet = this._canvasHeight - tileHeight;
		//alert(offSet);
		y = offSet - y;	//Gl ist dumm.
		//alert(y);
		//window.alert('tile: ' + tile.img + '\nx-Pos: ' + x + '\ny-Pos: ' + y);
		this._context.drawImage(tile.img, x, y, tile.getWidth(), tileHeight);
	}

	renderHitbox(coordinates) {
		this._context.fillStyle = "rgba(0, 0, 0, 0.5)";
		this._context.beginPath();
		this._context.moveTo(coordinates[0].x, coordinates[0].y);
		for(var index = 1; index < coordinates.length; index ++)
		{
			this._context.lineTo(coordinates[index].x, coordinates[index].y);
		}
		this._context.closePath();
		this._context.fill();
		this.getPolygonPoints(coordinates);
	}

	getPolygonPoints(coordinates) {
		var points = [];

		this._context.fillStyle = "rgba(255, 0, 0, 1)";
		for(var i = 0; i < coordinates.length; i ++)
		{
			this._context.fillRect(coordinates[i].x, coordinates[i].y, 10, 10);
		}
	}

	renderPolygonPoints(points) {
		this._context.fillStyle = "rgba(255, 0, 0, 1)";
		for(var i = 0; i < points.length; i ++)
		{
			this._context.fillRect(points[i].x, points[i].y, 1, 1);
		}
	}
}