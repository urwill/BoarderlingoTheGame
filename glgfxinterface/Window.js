class Window {
	_windowID;
	static _width;
	static _height;
	static _window;
	static scale = 1;
	_canvas;
	
	constructor() {
		//window.alert('Window');
		this._canvas = document.createElement('canvas');
		document.body.appendChild(this._canvas);
	}
	
 	static getInstance() {
		//window.alert('Window.getInstance()');
		if(this._window === undefined) {
			this._window = new Window();
		}
		return this._window;
	}
	
	createWindow(title, width, height) {
		//window.alert('Window.createWindow()');
		this._windowID = title;
		this._width = width;
		this._height = height;
		
		this._canvas.id = title;
		this._canvas.width = width;
		this._canvas.height = height;
	}
	
	static getWidth() {
		return this._width;
	}
	
	static getHeight() {
		return this._height;
	}
	
	getCanvas() {
		return this._canvas;
	}
}