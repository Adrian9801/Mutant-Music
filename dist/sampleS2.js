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
        var point; //temp para guardar los datos de una zona 
        var points; //temp para guardar los datos de una zona 
        var nowZone; //temp para guardar los datos de una zona 
        points = 0;
        point = 0;
        s2Temp.push(this.audioData.channelData[0][0]); //punto
        s2Temp.push(0); //tiempo
        s2Temp.push(this.audioData.channelData[0][audioLength]); //punto
        s2Temp.push(Math.round(audioLength / 44100)); //punto
        console.log((Math.round(audioLength / 44100)));
        while (points !== 2) {
            if (point >= 0.75) {
                nowZone = 1;
            }
            else if (point >= 0.5) {
                nowZone = 2;
            }
            else if (point >= 0.25) {
                nowZone = 3;
            }
            else if (point >= 0) {
                nowZone = 4;
            }
            //-----------------------------------------------------------------LINEA CATESIANA X
            else if (point >= -0.25) {
                nowZone = 5;
            }
            else if (point >= -0.5) {
                nowZone = 6;
            }
            else if (point >= -0.75) {
                nowZone = 7;
            }
            else {
                nowZone = 8;
            }
            s2Temp.push(nowZone); //punto
            console.log(point);
            point = this.audioData.channelData[0][audioLength];
            points++;
        }
        this.S2 = s2Temp;
    };
    return samples;
}());
exports.samples = samples;
//# sourceMappingURL=sampleS2.js.map