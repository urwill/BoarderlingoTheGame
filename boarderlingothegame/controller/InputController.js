class InputController {
	_downPressed = false;
	_leftPressed = false;
	_spaceTipped = false;
	_spaceTippedFired = false;
	_keyVTipped = false;
	_keyVTippedFired = false;
	_keyBTipped = false;
	_keyBTippedFired = false;
	_keyNTipped = false;
	_keyNTippedFired = false;
	_keyMTipped = false;
	_keyMTippedFired = false;
	
	constructor() {
		//window.alert('InputController');
		
		var inputControllerInstance = this;
		document.addEventListener("keydown", function() { inputControllerInstance._handleKeyDown(event); });
		document.addEventListener("keyup", function() { inputControllerInstance._handleKeyUp(event); });
	}
	
	space;
	keyV;
	
	_handleKeyDown(event) {
		switch(event.keyCode) {
			case 32:
				this._spaceTipped = true;
				break;
			case 37:
				this._leftPressed = true;
				break;
			case 40:
				this._downPressed = true;
				break;
			case 66:
				this._keyBTipped = true;
				break;
			case 77:
				this._keyMTipped = true;
				break;
			case 78:
				this._keyNTipped = true;
				break;
			case 86:
				this._keyVTipped = true;
				break;
		}
	}
	
	_handleKeyUp(event) {
		switch(event.keyCode) {
			case 32:
				this._spaceTippedFired = false;
				this._spaceTipped = false;
				break;
			case 37:
				this._leftPressed = false;
				break;
			case 40:
				this._downPressed = false;
				break;
			case 66:
				this._keyBTippedFired = false;
				this._keyBTipped = false;
				break;
			case 77:
				this._keyMTippedFired = false;
				this._keyMTipped = false;
				break;
			case 78:
				this._keyNTippedFired = false;
				this._keyNTipped = false;
				break;
			case 86:
				this._keyVTippedFired = false;
				this._keyVTipped = false;
				break;
		}
	}

	reset() {
		this._leftPressed = false;
		this._downPressed = false;
	}
	
	downPressed() {
		return this._downPressed;
	}
	
	leftPressed() {
		return this._leftPressed;
	}

	spaceTipped() {
		var retval = false;

		if(!this._spaceTippedFired && this._spaceTipped) {
			this._spaceTippedFired = true;
			retval = true;
		}

		return retval;
	}

	keyVTipped() {
		var retval = false;

		if(!this._keyVTippedFired && this._keyVTipped) {
			this._keyVTippedFired = true;
			retval = true;
		}

		return retval;
	}

	keyBTipped() {
		var retval = false;

		if(!this._keyBTippedFired && this._keyBTipped) {
			this._keyBTippedFired = true;
			retval = true;
		}

		return retval;
	}

	keyNTipped() {
		var retval = false;

		if(!this._keyNTippedFired && this._keyNTipped) {
			this._keyNTippedFired = true;
			retval = true;
		}

		return retval;
	}

	keyMTipped() {
		var retval = false;

		if(!this._keyMTippedFired && this._keyMTipped) {
			this._keyMTippedFired = true;
			retval = true;
		}

		return retval;
	}
}