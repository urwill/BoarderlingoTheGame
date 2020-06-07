class InputController {
	_downPressed = false;
	_leftPressed = false;
	_spaceTipped = false;
	_spaceTippedFired = false;
	_keyVTipped = false;
	_keyVTippedFired = false;
	_keyBTipped = false;
	_keyBTippedFired = false;
	
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
			case 86:
				this._keyVTippedFired = false;
				this._keyVTipped = false;
				break;
		}
	}
	
	/* spaceTipped() {
		var retval = false;
		if(space == 0 && glfwGetKey(Window.getInstance().getWinId(),GLFW_KEY_SPACE) == 1)
			retval = true;
		space = glfwGetKey(Window.getInstance().getWinId(),GLFW_KEY_SPACE);
		return retval;
	}
	public boolean keyVTipped() {
		boolean retval=false;
		if(keyV == 0 && glfwGetKey(Window.getInstance().getWinId(),GLFW_KEY_V) == 1)
			retval = true;
		keyV = glfwGetKey(Window.getInstance().getWinId(),GLFW_KEY_V);
		return retval;
	}
	public boolean keyBTipped() {
		boolean retval=false;
		if(keyV == 0 && glfwGetKey(Window.getInstance().getWinId(),GLFW_KEY_B) == 1)
			retval = true;
		keyV = glfwGetKey(Window.getInstance().getWinId(),GLFW_KEY_B);
		return retval;
	} */
	
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
}