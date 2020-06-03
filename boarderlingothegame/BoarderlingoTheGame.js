const supportedBrowsers = [
  "Firefox ab Version 3.5",
  "Chrome ab Version 4.0",
  "Edge ab Version 10.0", 
  "Internet Explorer ab Version 10.0", 
  "Opera ab Version 11.5", 
  "Safari ab Version 4.0"
];
const windowWidth = 900;
const windowHeight = 500;
const browserSupportMessage = 'Dein Browser wird nicht unterstützt. Folgende Browser werden unterstützt:\n' + supportedBrowsers.join(',\n');

function testBrowserSupport() {
	if (typeof(Worker) === "undefined") {
		window.alert(browserSupportMessage);
		return false;
	}
	return true;
}

function startup() {
	if(!testBrowserSupport()) {
		return;
	}
	
	new BoarderlingoTheGame(false);
}

class BoarderlingoTheGame {
	_gfx;
	
	constructor(isOnTwitch) {
		window.alert('BoarderlingoTheGame');
		this.run();
	}
	
	run() {
		window.alert('BoarderlingoTheGame.run()');
		this._gfx = new GfxFassade();
		this._gfx.run(windowWidth, windowHeight, 'BoarderlingoTheGame');
	}
}