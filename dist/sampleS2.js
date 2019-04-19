"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var s2 = /** @class */ (function () {
    function s2(pAudioData) {
        this.zones = [];
        this.zonesStr = [];
        this.BeginPoint = 0;
        this.FinalPoint = 0;
        this.BeginZone = "";
        this.FinalZone = "";
        this.audioData = pAudioData;
    }
    s2.prototype.mainComponent = function () {
        var audioLength = this.audioData.channelData[0].length; // largo del audio
        var nowZone = "";
        var point; //temp para guardar los datos de una zona 
        var zone = []; //temp para guardar los datos de una zona 
        var zonesStr = []; //temp para guardar los datos de una zona 
        this.BeginPoint = this.audioData.channelData[0][0];
        this.FinalPoint = this.audioData.channelData[0][audioLength - 1];
        this.zones.push(this.BeginPoint);
        this.zones.push(this.FinalPoint);
        for (var i = 0; i <= this.zones.length - 1; i++) {
            point = this.zones[i];
            console.log('///////////////////////' + point);
            if (point >= 0.5) {
                nowZone = "A";
            }
            else if (point >= 0) {
                nowZone = "B";
            }
            else if (point >= -0.5) {
                nowZone = "C";
            }
            else {
                nowZone = "D";
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
    return s2;
}());
exports.s2 = s2;
//# sourceMappingURL=sampleS2.js.map