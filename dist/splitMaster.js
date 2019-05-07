"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var area_1 = require("./area");
var claseArea = new area_1.areas();
var splitMaster = /** @class */ (function () {
    function splitMaster() {
        this.peak = [];
    }
    // 0 IZQ
    splitMaster.prototype.splitPeak = function (pSide, pAudioData, pI, pLastI) {
        this.audioData = pAudioData;
        var musicalFootprint = 0;
        var audioLength = this.audioData.channelData[0].length - 1; // largo del audio
        var point; //temp para guardar los datos de una zona 
        var zone = []; //temp para guardar los datos de una zona 
        var down = true;
        var btime = 0; //tiempo
        var bn = 1; //n para calculo de tiempo
        var grow = 1;
        var auxPoint = -3;
        for (var i = pI; i < pLastI; i++) {
            point = this.audioData.channelData[pSide][i]; //punto 
            if (point > -0) {
                if (point > this.audioData.channelData[pSide][i + 1] && down) {
                    if (auxPoint < point) {
                        auxPoint = point;
                    }
                    else if (i >= (audioLength / 8) * grow) {
                        //console.log(point);
                        this.peak.push(auxPoint); //punto
                        this.peak.push(i / 44100); //tiempo
                        down = false;
                        grow++;
                    }
                }
                else if (this.audioData.channelData[pSide][i] < this.audioData.channelData[pSide][i + 1]) {
                    down = true;
                }
            }
        }
        for (var i = 0; i < this.peak.length - 2; i++) {
            musicalFootprint = musicalFootprint + claseArea.waveTiangle(0, 0, 0, this.peak[i], this.peak[i], this.peak[i + 1]);
        }
        console.log(musicalFootprint);
    };
    return splitMaster;
}());
exports.splitMaster = splitMaster;
//# sourceMappingURL=splitMaster.js.map