class HighScore {
	_score = 0;
	_highscore = 0;
	charWidth;
	charWidthScaled;
	charHeight;
	charHeightScaled;
	
	static _image;
	
	constructor() {
		//window.alert('HighScore');
		
		this._image = new Tile('boarderlingothegame/gfx/TexturFuerHighscore.png');
		
		while(!this._tilesLoaded) {
			//warten bis alle Bilder geladen sind
		}
		
		this.loadCharValues();		
	}
	
	loadCharValues() {
		if(this._image.getHeight() === undefined) {
			//alert('repeat');
			var highscoreInstance = this;
			window.setTimeout(function () {
				highscoreInstance.loadCharValues();
			}, 100);
		} else {
			//alert(this._image.img.width / 29);
			this.charWidth = this._image.img.width / 29;
			this.charWidthScaled = this._image.getWidth() / 29 / 2;
			this.charHeight = this._image.img.height;
			this.charHeightScaled = this._image.getHeight() / 2;
		}
	}
	
	_tilesLoaded() {
		if(!this._image.isLoaded()) {
			return false;
		}
		
		return true;
	}

	resetToZero() {
		this._score = 0;
		this._highscore = 0;
	}
	
	reset() {
		if(this._highscore < this._score)
		this._highscore = this._score;
		this._score = 0;
	}
	
	increment() {
		this._score++;
	}
	
	getHighscore() {
		return this._highscore;
	}
	
	getScore() {
		return this._score;
	}
	
	static getImage() {
		return this._image;
	}
}
