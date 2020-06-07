const supportedBrowsers = [
  "Firefox ab Version 45",
  "Chrome ab Version 42",
  "Edge ab Version 13", 
  //"Internet Explorer ab Version 10.0", 
  "Opera ab Version 29", 
  "Safari ab Version 7"
];
const windowWidth = 1900;
const windowHeight = 650;
var scale = 1;
const browserSupportMessage = 'Dein Browser wird nicht unterstützt. Folgende Browser werden unterstützt:\n' + supportedBrowsers.join(',\n');

function testBrowserSupport() {
	try {
		eval('"use strict"; class foo {}');
	} catch (err) { 
		window.alert(browserSupportMessage);
	 	return false;
	}

	return true;
}

function startup() {
	//bringt leider nichts, da gar kein Code ausgeführt wird, wenn der Browser nicht unterstützt wird
	// if(!testBrowserSupport()) {
	// 	return;
	// }
	
	var img = new Image();
	img.onload = function() { scale = windowHeight / this.height; new BoarderlingoTheGame(false); };
	img.src = 'boarderlingothegame/backgrounds/wielandstraße.png';
}

class BoarderlingoTheGame {
	_gfx;
	
	constructor(isOnTwitch) {
		//window.alert('BoarderlingoTheGame');
		this.run();
	}
	
	run() {
		//window.alert('BoarderlingoTheGame.run()');
		this._gfx = new GfxFassade();
		this._gfx.run(windowWidth, windowHeight, 'BoarderlingoTheGame');
	}
}