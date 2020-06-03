class TileRenderer {
	_canvasHeight;
	_context;
	
	constructor(canvas) {
		window.alert('TileRenderer');
		this._canvasHeight = canvas.height;
		this._context = canvas.getContext('2d');
	}
	
	renderScore(highScore) {
		//Das ist alles ganz dolle dirty.
		highScore.increment();
		/* shader.bind();
		Tile tile = highScore.getImage();
		if (!getTileTextures().containsKey(tile.getTexture())) 
			getTileTextures().put(tile.getTexture(), new Texture(tile.getTexture()));
			
		getTileTextures().get(tile.getTexture()).bind(0);
		shader.setUniform("sampler", 0);
		shader.setUniform("projection", SCOREMAT);
		scoreModel.render();
		new Model(getKoords(7f/29f,8f/29f) , getKoords((float)(18+ highScore.getScore()/10000%10)/29f,(float)(19+ highScore.getScore()/10000%10)/29f)).render();
		new Model(getKoords(8f/29f,9f/29f) , getKoords((float)(18+ highScore.getScore()/1000%10)/29f,(float)(19+ highScore.getScore()/1000%10)/29f)).render();
		new Model(getKoords(9f/29f,10f/29f) , getKoords((float)(18+ highScore.getScore()/100%10)/29f,(float)(19+ highScore.getScore()/100%10)/29f)).render();
		new Model(getKoords(10f/29f,11f/29f) , getKoords((float)(18+ highScore.getScore()/10%10)/29f,(float)(19+ highScore.getScore()/10%10)/29f)).render();
		new Model(getKoords(11f/29f,12f/29f) , getKoords((float)(18+ highScore.getScore()%10)/29f,(float)(19+ highScore.getScore()%10)/29f)).render();
		shader.setUniform("projection",HIGHSCOREMAT );
		highScoreModel.render();
		new Model(getKoords(11f/29f,12f/29f) , getKoords((float)(18+ highScore.getHighscore()/10000%10)/29f,(float)(19+ highScore.getHighscore()/10000%10)/29f)).render();
		new Model(getKoords(12f/29f,13f/29f) , getKoords((float)(18+ highScore.getHighscore()/1000%10)/29f,(float)(19+ highScore.getHighscore()/1000%10)/29f)).render();
		new Model(getKoords(13f/29f,14f/29f) , getKoords((float)(18+ highScore.getHighscore()/100%10)/29f,(float)(19+ highScore.getHighscore()/100%10)/29f)).render();
		new Model(getKoords(14f/29f,15f/29f) , getKoords((float)(18+ highScore.getHighscore()/10%10)/29f,(float)(19+ highScore.getHighscore()/10%10)/29f)).render();
		new Model(getKoords(15f/29f,16f/29f) , getKoords((float)(18+ hi ghScore.getHighscore()%10)/29f,(float)(19+ highScore.getHighscore()%10)/29f)).render();*/

		//Das ist alles ganz dolle dirty.
		//window.alert(highScore._image.getHeight());
		//this._context.drawImage(highScore._image.img, 0, 0, highScore._image.getWidth(), highScore._image.getHeight());
		//this._context.drawImage(highScore._image.img, 335, 3, 63, 68, 0, 0, 63 * Window.scale, 68 * Window.scale);
		
		/* var charWidth = 1422;
		var charHeight = 85;
		var charHeightScaled = highScore._image.getHeight(); */
		
		 var startImg = Math.round(highScore.charWidth * 0);
		 var startCanvas = Math.round(highScore.charWidthScaled * 0);
		// var width = Math.round((1422 / 29) * 7);
		// var height = 85;
		// var widthScaled = Math.round((highScore._image.getWidth() / 29) * 7);
		// var heightScaled = highScore._image.getHeight();
		// this._context.drawImage(highScore._image.img, startImg, 0, width, height, startCanvas, 0, widthScaled, heightScaled);
		// startImg = Math.round((1422 / 29) * 19);
		// startCanvas = widthScaled;
		// width = Math.round(1422 / 29);
		// widthScaled = Math.round(highScore._image.getWidth() / 29);
		// this._context.drawImage(highScore._image.img, startImg, 0, width, height, startCanvas, 0, widthScaled, heightScaled);
		try {
			//window.alert(highScore.getScore());
			//window.alert(parseInt(highScore.getScore()%10));
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
		
		//this._context.drawImage(highScore._image.img, startImg, 0, Math.round(highScore.charWidth * 7), highScore.charHeight, startCanvas, 0, Math.round(highScore.charWidthScaled * 7), highScore.charHeightScaled);
		} catch(err) {
			window.alert(err.message);
		}
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
}