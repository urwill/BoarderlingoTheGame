class Player {
	_x = 10;
	_y = 20;
	_horizontalMomentum;
	
	_state = PlayerStateEnum.IDLE;
	_speedRight = 8 * Window.scale;
	_SPRUNGKRAFT = 20;
	
	_idleRight1 = new Tile('boarderlingothegame/gfx/blingo_right.png');
	_idleRight2 = new Tile('boarderlingothegame/gfx/blingo_right2.png');
	_brake1 = new Tile('boarderlingothegame/gfx/bremsen1.png');
	_brake2 = new Tile('boarderlingothegame/gfx/bremsen2.png');
	_ducking = new Tile('boarderlingothegame/gfx/blingo_ducking.png');
	_jumping = new Tile('boarderlingothegame/gfx/blingo_jump.png');
	
	constructor() {
		window.alert('Player');
		
		while(!this._tilesLoaded) {
			//warten bis alle Bilder geladen sind
		}
	}
	
	_tilesLoaded() {
		if(!this._idleRight1.isLoaded()) {
			return false;
		}
		if(!this._idleRight2.isLoaded()) {
			return false;
		}
		if(!this._brake1.isLoaded()) {
			return false;
		}
		if(!this._brake2.isLoaded()) {
			return false;
		}
		if(!this._ducking.isLoaded()) {
			return false;
		}
		if(!this._jumping.isLoaded()) {
			return false;
		}
		
		return true;
	}
	
	isInAir() {
		return (this.getState() === PlayerStateEnum.JUMPING || this.getState() === PlayerStateEnum.FALLING);
	}
	
	getTile(counterVariable) {
		if(this.getState() === PlayerStateEnum.IDLE)
		{
			if (counterVariable % 3 == 0 | counterVariable % 5 == 0)
			{
				return this._idleRight1;
			}
			else
			{
				return this._idleRight2;
			}
		}
		if(this.isInAir()) {
			return this._jumping;
		}
		if(this.getState() === PlayerStateEnum.DUCKING) {
			return this._ducking;
		}
		if(this.getState() === PlayerStateEnum.BRAKING)
		{
			if (counterVariable % 3 == 0 | counterVariable % 5 == 0)
			{
				return this._brake1;
			}
			else
			{
				return this._brake2;
			}
		}
		
		return this._idleRight1;
	}
	
	getX() {
		return this._x;
	}
	
	setX(x) {
		this._x = x;
	}
	
	getY() {
		return this._y;
	}
	
	setY(y) {
		this._y = y;
	}
	
	getState() {
		return this._state;
	}

	_setState(state) {
		this._state = state;
	}
	
	getSpeedRight() {
		if(this.getState() === PlayerStateEnum.BRAKING)
		{
			return this._speedRight / 2;
		}
		return this._speedRight;
	}
	
	setSpeedRight(speedRight) {
		this._speedRight = speedRight;
	}
	
	getHorizontalMomentum() {
		return this._horizontalMomentum;
	}

	setHorizontalMomentum(horizontalMomentum) {
		this._horizontalMomentum = horizontalMomentum;
	}
	
	decreaseHorizontalMomentum(diff) {
		this._horizontalMomentum -= diff;
	}

	applyHorizontalMomentum(momentum) {
		this._horizontalMomentum += momentum;
	}
	
	calcJumpFrame() {
		var bodenhoehe = 0;
		this.setY(this.getY() + this.getHorizontalMomentum());
		this.decreaseHorizontalMomentum(-0.55);
		
		if(this.getY() > bodenhoehe) {
			this.setY(bodenhoehe);
			this.setHorizontalMomentum(0);
			this._setState(PlayerStateEnum.IDLE);			
		}
	}
	
	duck() {
		if(!this.isInAir())
		{
			this._setState(PlayerStateEnum.DUCKING);
		}
	}
	
	brake() {
		if(!this.isInAir())
			this._setState(PlayerStateEnum.BRAKING);
	}

	resetState() {
		if(!this.isInAir())
			this._setState(PlayerStateEnum.IDLE);
		
	}
}