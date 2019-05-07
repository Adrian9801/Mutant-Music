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
        var lastSeg = -1;
        var nowseg = 1;
        var point; //temp para guardar los datos de una zona 
        var down = true;
        var grow = 1;
        var auxPoint = 0;
        var auxData = 0;
        for (var i = pI; i < pLastI; i++) {
            point = pAudioData.channelData[pSide][i]; //punto 
            nowseg = Math.round(i / 44100);
            if (point > 0.5) {
                if ((point >= pAudioData.channelData[pSide][i + 1]) && down) {
                    if (auxPoint < point) {
                        auxPoint = point;
                    }
                    /// else if (i >= ((pLastI - pI)/ 90) * grow) {
                    else if (i >= ((pLastI - pI) / 8) * grow
                        && (nowseg != lastSeg)) {
                        auxData = auxData + auxPoint;
                        // console.log(Math.round(i / 44100));.
                        lastSeg = Math.round(i / 44100);
                        this.peak.push(auxPoint); //punto
                        this.peak.push(Math.round(i / 44100)); //tiempo
                        down = false;
                        i++;
                        grow++;
                        //auxPoint=0;
                    }
                }
                else if (pAudioData.channelData[pSide][i] < pAudioData.channelData[pSide][i + 1]) {
                    down = true;
                }
            }
        }
        for (var i = 0; i < this.peak.length - 1; i++) {
            musicalFootprint = musicalFootprint + claseArea.waveTiangle(0, 0, 0, this.peak[i] * 10, this.peak[i], this.peak[i + 1]);
            this.peakArea.push(musicalFootprint);
            i++;
        }
        // console.log(this.peak);
        // console.log(this.peakArea.length);
        //console.log(musicalFootprint + "area total");
        console.log("AAAAAAAAAAAAAAAAAAAAA");
        console.log(auxData);
        console.log("AAAAAAAAAAAAAAAAAAAAA");
        this.peak = [];
        this.peakArea = [];
        return musicalFootprint;
    };
    return splitMaster;
}());
exports.splitMaster = splitMaster;
//# sourceMappingURL=splitMaster.js.map