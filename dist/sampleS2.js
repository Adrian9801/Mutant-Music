"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var samples = /** @class */ (function () {
    function samples(pAudioData) {
        this.zonesTime = 0;
        this.zones = [];
        this.S2 = [];
        this.zonesStr = [];
        this.pointZonesStr = [];
        this.audioData = pAudioData;
        this.audioLength = this.audioData.channelData[0].length; // largo del audio
    }
    samples.prototype.dataS2 = function () {
        var audioLength = this.audioData.channelData[0].length - 1; // largo del audio
        var s2Temp = []; //temp para guardar los datos de una zona 
        s2Temp.push(this.audioData.channelData[0][0]); //punto
        s2Temp.push(0); //tiempo
        s2Temp.push(this.audioData.channelData[0][audioLength]); //punto
        s2Temp.push(Math.round(audioLength / 44100)); //punto
        console.log((Math.round(audioLength / 44100)));
        this.S2 = s2Temp;
    };
    return samples;
}());
exports.samples = samples;
//# sourceMappingURL=sampleS2.js.map