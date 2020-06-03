class InputController {
	_downPressed = false;
	_leftPressed = false;
	
	constructor() {
		window.alert('InputController');
		
		var inputControllerInstance = this;
		document.addEventListener("keydown", function() { inputControllerInstance._handleKeyDown(event); });
		document.addEventListener("keyup", function() { inputControllerInstance._handleKeyUp(event); });
	}
	
	space;
	keyV;
	
	_handleKeyDown(event) {
		switch(event.keyCode) {
			case 37:
				this._leftPressed = true;
			break;
			case 40:
				this._downPressed = true;
			break;
		}
	}
	
	_handleKeyUp(event) {
		switch(event.keyCode) {
			case 37:
				this._leftPressed = false;
			break;
			case 40:
				this._downPressed = false;
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
	} 
	
	
	leftPressed() {
		return glfwGetKey(Window.getInstance().getWinId(),GLFW_KEY_LEFT) == 1;
	}	*/
	
	downPressed() {
		return this._downPressed;
	}
	
	leftPressed() {
		return this._leftPressed;
	}
}