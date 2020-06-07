class Fog {
	image = new Tile("boarderlingothegame/gfx/Nebel.png");
	
	constructor() {
		AnimationTimer.getInstance().startAnimation("NEBEL");
	}
	
	getLocation() {
		var animationTimer = AnimationTimer.getInstance();

		if(animationTimer.getFrame("NEBEL") !== null) {
			var nebelTime = animationTimer.getFrame("NEBEL");
			
			if(nebelTime > 550 && nebelTime <= 610) {
				return new Object({ x: 500 + (nebelTime - 550) * 25, y: 0 });
			}
			
			if(nebelTime <= 550 && nebelTime >= 50) {
				return new Object({ x: 500, y: 0 });
			}
			
			if(nebelTime >= 0) {
				return new Object({ x: 500 + (50 - nebelTime) * 25, y: 0 });
			}			
		}
		return null;
	}
	
	stillRunning() {
		frame = AnimationTimer.getInstance().getFrame("NEBEL");
		if(frame === null) {
			return false;
		}
		return frame > 0;
	}

	resetFogTime() {
		AnimationTimer.getInstance().resetToFrame("NEBEL", 50);
	}

	getTile(counterVariable) {
		return this.image;
	}

}
