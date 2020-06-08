class Granny extends Obstacle {
	//_oma1 = new Tile("boarderlingothegame/gfx/Oma1.png");	//Tile in GameController laden, damit das Bild nur 1 mal geladen werden muss
	//_oma2 = new Tile("boarderlingothegame/gfx/Oma2.png");	//Tile in GameController laden, damit das Bild nur 1 mal geladen werden muss
	_oma1;
	_image;		//muss _image heißen, weil darauf momentan geprüft wird, ob das Tile geladen ist
	_isMovingDown = false;
	
	constructor(oma1Tile, oma2Tile, spawnedBy) {
		super(spawnedBy);
		this._oma1 = oma1Tile;
		this._image = oma2Tile;
		this._location = new Object({ x: windowWidth + 300, y: 20 * scale });
	}

	getHitBox() {
		var retPol = new Polygon();
		var x = this.getLocation().x;
		var y = this.getLocation().y;
		var width = 50 * scale;
		var height = 300 * scale;
		retPol.addPoint(x, y);
		retPol.addPoint(x + width, y);
		retPol.addPoint(x + width, y + height);
		retPol.addPoint(x, y + height);
		retPol.setOffset(height);
		return retPol;
	}

	moveRight(speed) {
		this.getLocation().x = this.getLocation().x - speed;
		if(this.getLocation().x < 1000 * scale) {
			this._isMovingDown = true;
		}
		if(this._isMovingDown) {
			this.moveDown();	//TODO meeh...
		}
	}

	moveDown() {
		this.getLocation().y = this.getLocation().y - (3 * scale);
	}

	getNameAsString() {
		return "Oma";
	}

	getTile(counterVariable) {
		return (counterVariable / 8) % 2 == 0 && this._isMovingDown ? this._oma1 : this._image;
	}
}
