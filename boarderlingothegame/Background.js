class Background {
	_location = new Object({
		x: 0,
		y: 0
	});	
	_background = new Tile('boarderlingothegame/backgrounds/wielandstraße.png');
	_feld = new Tile('boarderlingothegame/backgrounds/feldBG.png');
	_currentTiles = [];
	
	constructor() {
		//window.alert('Background');

		// while(!this._tilesLoaded) {
		// 	//warten bis alle Bilder geladen sind
		// }
		
		this._tilesLoaded();	//warten bis alle Bilder geladen sind
	}

	// _tilesLoaded() {
	// 	if(!this._background.isLoaded()) {
	// 		return false;
	// 	}
	// 	if(!this._feld.isLoaded()) {
	// 		return false;
	// 	}
		
	// 	return true;
	// }
	
	_tilesLoaded() {
		var loaded = true;
		if(!this._background.isLoaded()) {
			loaded = false;
		}
		if(!this._feld.isLoaded()) {
			loaded = false;
		}
		
		if(loaded) {
			//Window.scale = windowHeight / this._background.getHeight();
			this._background.setSize();
			this._feld.setSize();
		} else {
			var backgroundInstance = this;
			window.setTimeout(function () {
				backgroundInstance._tilesLoaded();
			}, 100);
		}
	}
	
	getCurrentTiles() {
		return this._currentTiles;
	}
	
	move(speed) {
		speed = Math.round(speed);
		//window.alert(speed);
		this.getLocation().x-= speed;
		this._updateBackground();
	}
	
	_updateBackground() {
		//alert(windowHeight);
		//alert('location-x: ' + this.getLocation().x + '\nallTilesWidth: ' + this._getLengthOfAllCurrentTilesInPx() + '\nWindow-width: ' + windowWidth);
		if(this.getLocation().x + this._getLengthOfAllCurrentTilesInPx() < windowWidth)
		{
			this._currentTiles.push(this._background);	//oder was auch immer
		}
		if(this.getLocation().x + this._currentTiles[0].getWidth() < 0) {
			this._currentTiles.shift();
			this.getLocation().x += this._currentTiles[0].getWidth();
		}
	}
	
	_getLengthOfAllCurrentTilesInPx() {
		var retVal = 0;
		this.getCurrentTiles().forEach(function(eTile) {
			retVal += eTile.getWidth();
		});
		return retVal;
	}
	
	getLocation() {
		return this._location;
	}
	
	setLocation(location) {
		this._location = location;
	}
}