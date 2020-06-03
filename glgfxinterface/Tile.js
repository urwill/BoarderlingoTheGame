class Tile {
	img;
	_width;
	_height;
	
	constructor(imgPath) {
		//window.alert('Tile: ' + imgPath);
		
		this.img = new Image();
		var tileInstance = this;
        this.img.onload = function() { tileInstance._imgLoaded(); };
		this.img.src = imgPath;
	}
	
	_imgLoaded() {
		//window.alert('Tile._imgLoaded(): ' + this.img.src);
		//alert(this.img.width);
		this.setSize();
		//alert(this._width);
	}
	
	isLoaded() {
		//window.alert('Tile.isLoaded(): ' + this.img.src);
		if (!this.img.complete) {
			return false;
		}
		
		return true;
	}
	
	setSize() {
		this._width = this.img.width * Window.scale;
		this._height = this.img.height * Window.scale;
	}
	
	getHeight() {
		return this._height;
	}

	setHeight(height) {
		this._height = height;
	}

	getWidth() {
		return this._width;
	}

	setWidth(width) {
		this._width = width;
	}
}