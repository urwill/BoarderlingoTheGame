class Cactus extends Obstacle {
	_image = new Tile("boarderlingothegame/gfx/cactus.png");
	
	constructor(spawnedBy) {
		super(spawnedBy);
		this._location = new Object({ x: windowWidth + 300, y: 20 * scale });
	}
	
	getLocation() {
		return this._location;
	}

	getHitBox() {
		// var retPol = [];
		// retPol.push([this.getLocation().x, this.getLocation().y]);
		// retPol.push([this.getLocation().x + this._image.getWidth() - (10 * scale), this.getLocation().y]);
		// retPol.push([this.getLocation().x + this._image.getWidth(), this.getLocation().y + (10 * scale)]);
		// retPol.push([this.getLocation().x + this._image.getWidth(), this.getLocation().y + this._image.getHeight()]);
		// retPol.push([this.getLocation().x, this.getLocation().y + this._image.getHeight()]);

		// var offSet = windowHeight - this._image.getHeight() - (retPol[0][1] * 2);
		// for(var index = 0; index < retPol.length; index++) {
		// 	retPol[index][1] += offSet;
		// }

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
