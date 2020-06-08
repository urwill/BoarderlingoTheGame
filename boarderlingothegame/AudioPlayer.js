class AudioPlayer {

    _damageAudio = new Audio('boarderlingothegame/sounds/boarderlingoDamage.mp3');

    constructor() {

    }
    
    _playAudio(audio){
        //audio.volume = 1;
        audio.play();
    }

    playDamageAudio() {
        this._playAudio(this._damageAudio);
    }
}