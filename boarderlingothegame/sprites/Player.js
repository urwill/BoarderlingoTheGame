class Player {
	_x = 10 * scale;
	_y = 20 * scale;
	_horizontalMomentum;
	
	_state = PlayerStateEnum.IDLE;
	_speedRight = 8 * scale;
	_SPRUNGKRAFT = 20 * scale;
	
	_idleRight1 = new Tile('boarderlingothegame/gfx/blingo_right.png');
	_idleRight2 = new Tile('boarderlingothegame/gfx/blingo_right2.png');
	_brake1 = new Tile('boarderlingothegame/gfx/bremsen1.png');
	_brake2 = new Tile('boarderlingothegame/gfx/bremsen2.png');
	_ducking = new Tile('boarderlingothegame/gfx/blingo_ducking.png');
	_jumping = new Tile('boarderlingothegame/gfx/blingo_jump.png');
	
	constructor() {
		//window.alert('Player');
		
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

	getHitBox() {	
		var retPol = new Polygon();
		var x = this.getX();
		var y = this.getY();
		
		var offSet = 29 * 2 * scale;	//leeren Platz oben im Bild ausgleichen
		
		if(!this.isInAir()) {
			if(this.getState() === PlayerStateEnum.DUCKING)
			{//TODO nochmal ordentlich
				offSet = 135 * 2 * scale;
				retPol.addPoint(x + (34 * scale), y + (135 * scale) - offSet);
				retPol.addPoint(x + (350 * scale), y + (135 * scale) - offSet);
				retPol.addPoint(x + (350 * scale), y + (600 * scale) - offSet);
				retPol.addPoint(x + (34 * scale), y + (600 * scale) - offSet);
			}
			else {
				retPol.addPoint(x + (220 * scale), y + (30 * scale) - offSet);
				retPol.addPoint(x + (280 * scale), y + (30 * scale) - offSet);
				retPol.addPoint(x + (280 * scale), y + (135 * scale) - offSet);
				retPol.addPoint(x + (350 * scale), y + (150 * scale) - offSet);
				retPol.addPoint(x + (350 * scale), y + (280 * scale) - offSet);
				retPol.addPoint(x + (275 * scale), y + (500 * scale) - offSet);
				retPol.addPoint(x + (350 * scale), y + (530 * scale) - offSet);
				retPol.addPoint(x + (350 * scale), y + (600 * scale) - offSet);
				retPol.addPoint(x + (34 * scale), y + (600 * scale) - offSet);
				retPol.addPoint(x + (34 * scale), y + (135 * scale) - offSet);
				retPol.addPoint(x + (165 * scale), y + (135 * scale) - offSet);
				retPol.addPoint(x + (165 * scale), y + (80 * scale) - offSet);
			}
		}
		else {
			retPol.addPoint(x + (220 * scale), y + (30 * scale) - offSet);
			retPol.addPoint(x + (280 * scale), y + (30 * scale) - offSet);
			retPol.addPoint(x + (280 * scale), y + (135 * scale) - offSet);
			retPol.addPoint(x + (350 * scale), y + (150 * scale) - offSet);	//Rechter ellenbogen
			retPol.addPoint(x + (350 * scale), y + (260 * scale) - offSet);
			retPol.addPoint(x + (337 * scale), y + (480 * scale) - offSet);	//Vorderrad
			retPol.addPoint(x + (305 * scale), y + (495 * scale) - offSet);
			retPol.addPoint(x + (250 * scale), y + (455 * scale) - offSet);
			retPol.addPoint(x + (105 * scale), y + (505 * scale) - offSet);
			retPol.addPoint(x + (110 * scale), y + (550 * scale) - offSet);
			retPol.addPoint(x + (78 * scale), y + (570 * scale) - offSet);
			retPol.addPoint(x + (60 * scale), y + (560 * scale) - offSet);
			retPol.addPoint(x + (50 * scale), y + (520 * scale) - offSet);
			retPol.addPoint(x + (10 * scale), y + (530 * scale) - offSet);
			retPol.addPoint(x + (0 * scale), y + (520 * scale) - offSet);		//Linke Fußspitze
			retPol.addPoint(x + (0 * scale), y + (360 * scale) - offSet);
			retPol.addPoint(x + (55 * scale), y + (135 * scale) - offSet);
			retPol.addPoint(x + (170 * scale), y + (135 * scale) - offSet);
			retPol.addPoint(x + (170 * scale), y + (70 * scale) - offSet);
		}
		retPol.setOffset(this._idleRight1.getHeight());
		return retPol;
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

	jump() {
		if (this.getState() === PlayerStateEnum.JUMPING) {
		
			this._setState(PlayerStateEnum.FALLING);
			this.setHorizontalMomentum(-(this._SPRUNGKRAFT / 2));
		}
		if(this.getState() === PlayerStateEnum.IDLE) {
			this._setState(PlayerStateEnum.JUMPING);
			this.setHorizontalMomentum(-this._SPRUNGKRAFT);
		}
	}
	
	calcJumpFrame() {
		var bodenhoehe = 20;
		this.setY(this.getY() - this.getHorizontalMomentum());
		this.decreaseHorizontalMomentum(-0.55 * scale);
		
		if(this.getY() < 0) {
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
		if(!this.isInAir()) {
			this._setState(PlayerStateEnum.BRAKING);
		}
	}

	resetState() {
		if(!this.isInAir()) {
			this._setState(PlayerStateEnum.IDLE);
		}		
	}

	shoot() {
		// TODO
	}
}