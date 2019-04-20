"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var samples = /** @class */ (function () {
    function samples(pAudioData) {
        this.zonesTime = 0;
        this.zones = [];
        this.zonesStr = [];
        this.BeginPoint = 0;
        this.FinalPoint = 0;
        this.BeginZone = "";
        this.FinalZone = "";
        this.audioData = pAudioData;
    }
    samples.prototype.mainComponent = function () {
        var audioLength = this.audioData.channelData[0].length; // largo del audio
        var nowZone;
        var point; //temp para guardar los datos de una zona 
        var zone = []; //temp para guardar los datos de una zona 
        var zonesStr = []; //temp para guardar los datos de una zona 
        this.BeginPoint = this.audioData.channelData[0][0];
        this.FinalPoint = this.audioData.channelData[0][audioLength - 1];
        this.zones.push(this.BeginPoint);
        this.zones.push(this.FinalPoint);
        // this.zonesTime[0] = 0;
        this.zonesTime = audioLength - 1;
        for (var i = 0; i <= this.zones.length - 1; i++) {
            point = this.zones[i];
            // console.log('///////////////////////'+ point);
            if (point >= 0.5) {
                nowZone = 1;
            }
            else if (point >= 0) {
                nowZone = 2;
            }
            else if (point >= -0.5) {
                nowZone = 3;
            }
            else {
                nowZone = 4;
            }
            this.zonesStr.push(nowZone);
        }
        // console.log('*******************');
        // console.log(zone[0]);
        // console.log(zone[1]);
        // console.log('*******************');
        // console.log(zonesStr[0]);
        // console.log(zonesStr[1]);
    };
    return samples;
}());
exports.samples = samples;
//# sourceMappingURL=sampleS2.js.map