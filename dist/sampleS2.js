"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var samples = /** @class */ (function () {
    function samples(pAudioData) {
        this.zonesTime = 0;
        this.zones = [];
        this.zonesStr = [];
        this.pointZonesStr = [];
        this.audioData = pAudioData;
        this.audioLength = this.audioData.channelData[0].length; // largo del audio
    }
    samples.prototype.setPoints = function (pCantPoint) {
        var point;
        var auxPointIterator;
        point = this.audioData.channelData[0][0];
        this.pointZonesStr.push(point); // se guarda los puntos para la razon de crecimiento
        this.zones.push(point);
        for (var i = pCantPoint - 1; i !== 0; i--) {
            auxPointIterator = Math.round(((this.audioLength - 1) / i));
            point = this.audioData.channelData[0][auxPointIterator];
            this.pointZonesStr.push(point); // se guarda los puntos para la razon de crecimiento
            this.zones.push(point);
        }
    };
    samples.prototype.mainComponent = function (pCantCod) {
        this.setPoints(pCantCod);
        var nowZone;
        var point; //temp para guardar los datos de una zona 
        this.zonesTime = this.audioLength - 1;
        for (var i = 0; i <= this.zones.length - 1; i++) {
            point = this.zones[i];
            // console.log('///////////////////////'+ point);
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
            console.log(nowZone);
            this.zonesStr.push(nowZone);
        }
    };
    return samples;
}());
exports.samples = samples;
//# sourceMappingURL=sampleS2.js.map