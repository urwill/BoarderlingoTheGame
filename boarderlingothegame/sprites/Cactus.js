class Cactus extends Obstacle {
	//_image = new Tile("boarderlingothegame/gfx/cactus.png");	//Tile in GameController laden, damit das Bild nur 1 mal geladen werden muss
	_image;
	
	constructor(cactusTile, spawnedBy) {
		super(spawnedBy);
		this._image = cactusTile;
		this._location = new Object({ x: windowWidth + 300, y: 20 * scale });
	}

	getHitBox() {
		var retPol = new Polygon();
		retPol.addPoint(this.getLocation().x, this.getLocation().y);
		retPol.addPoint(this.getLocation().x + this._image.getWidth() - (10 * scale), this.getLocation().y);
		retPol.addPoint(this.getLocation().x + this._image.getWidth(), this.getLocation().y + (10 * scale));
		retPol.addPoint(this.getLocation().x + this._image.getWidth(), this.getLocation().y + this._image.getHeight());
		retPol.addPoint(this.getLocation().x, this.getLocation().y + this._image.getHeight());
		retPol.setOffset(this._image.getHeight());
		return retPol;
	}

	moveRight(speed) {
		this.getLocation().x = this.getLocation().x - speed;
	}

	getNameAsString() {
		return "Stachelkaktus";
	}

	getTile(counterVariable) {
		return this._image;
	}
}
