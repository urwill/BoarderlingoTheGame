class Obstacle {
	_spawnedBy;
	_location;
	
	constructor(spawnedBy) {
		this._spawnedBy = spawnedBy;
	}
	
	getSpawnedBy() {
		return this._spawnedBy;
	}
	
}
