"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var area_1 = require("./area");
var claseArea = new area_1.areas();
var splitMaster = /** @class */ (function () {
    function splitMaster() {
        this.peak = [];
        this.peakArea = [];
    }
    // 0 IZQ
    splitMaster.prototype.splitPeak = function (pSide, pAudioData, pI, pLastI) {
        var musicalFootprint = 0;
        var point; //temp para guardar los datos de una zona 
        var down = true;
        var grow = 1;
        var auxPoint = -3;
        for (var i = pI; i < pLastI; i++) {
            point = pAudioData.channelData[pSide][i]; //punto 
            if (point > 0.5) {
                if ((point >= pAudioData.channelData[pSide][i + 1]) && down) {
                    if (auxPoint < point) {
                        auxPoint = point;
                    }
                    else if (i >= ((pLastI - pI) / 85) * grow) {
                        // console.log(auxPoint);
                        // console.log(Math.round(i / 44100));
                        this.peak.push(auxPoint); //punto
                        this.peak.push(Math.round(i / 44100)); //tiempo
                        down = false;
                        grow++;
                    }
                }
                else if (pAudioData.channelData[pSide][i] < pAudioData.channelData[pSide][i + 1]) {
                    down = true;
                }
            }
        }
        for (var i = 0; i < this.peak.length - 1; i++) {
            musicalFootprint = musicalFootprint + claseArea.waveTiangle(0, 0, 0, this.peak[i], this.peak[i], this.peak[i + 1]);
            this.peakArea.push(musicalFootprint);
            i++;
        }
        // console.log(this.peak);
        // console.log(this.peakArea.length);
        // console.log(this.peakArea);
        this.peak = [];
        this.peakArea = [];
        return musicalFootprint;
    };
    return splitMaster;
}());
exports.splitMaster = splitMaster;
//# sourceMappingURL=splitMaster.js.map