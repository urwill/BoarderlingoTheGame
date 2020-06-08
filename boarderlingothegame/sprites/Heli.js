class Heli extends Obstacle {
	speedOffset = 3.5;
	//_image = new Tile("boarderlingothegame/gfx/Heli.png");	//Tile in GameController laden, damit das Bild nur 1 mal geladen werden muss
	_image;
	
	
	constructor(heliTile, spawnedBy) {
		super(spawnedBy);
		this._image = heliTile;
		this._location = new Object({ x: windowWidth + 300, y: 500 * scale });
	}

	getHitBox() {
		var retPol = new Polygon();
		retPol.addPoint(this.getLocation().x, this.getLocation().y);
		retPol.addPoint(this.getLocation().x + this._image.getWidth(), this.getLocation().y);
		retPol.addPoint(this.getLocation().x + this._image.getWidth(), this.getLocation().y + this._image.getHeight());
		retPol.addPoint(this.getLocation().x, this.getLocation().y + this._image.getHeight());
		retPol.setOffset(this._image.getHeight());
		return retPol;
	}

	moveRight(speed) {
		var absoluteSpeed = parseInt(speed + this.speedOffset);
		this.getLocation().x = this.getLocation().x - absoluteSpeed;
	}

	getNameAsString() {
		return "Heli";
	}

	getTile(counterVariable) {
		return this._image;
	}
}
