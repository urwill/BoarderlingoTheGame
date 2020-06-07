class AnimationTimer {
	
	_incrementEachFrameNumber = 0;
	_whichAnimationRunsHowLong = new Map();
	static _singleton;
	
	constructor() {

	}
	
	static  getInstance() {
		if (this._singleton === undefined)
		{
			this._singleton = new AnimationTimer();
		}
		return this._singleton;
	}

	getFrame() {
		return this._incrementEachFrameNumber;
	}

	getFrame(key) {
		var frame = this._whichAnimationRunsHowLong.get(key);
		if(frame === null)
		{
			return Number.MAX_SAFE_INTEGER;
		}
		return this._incrementEachFrameNumber - frame;
	}

	startAnimation(key) {
		this._whichAnimationRunsHowLong.set(key, this._incrementEachFrameNumber);
	}

	increment() {
		this._incrementEachFrameNumber++;
	}

	resetToFrame(key, frame) {
		this._whichAnimationRunsHowLong.set(key, this._incrementEachFrameNumber + frame);
	}
}
