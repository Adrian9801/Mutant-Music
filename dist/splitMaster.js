"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var area_1 = require("./area");
var claseArea = new area_1.areas();
var splitMaster = /** @class */ (function () {
    function splitMaster() {
        this.peak = [];
        this.peakArea = [];
    }
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
            nowseg = Math.round(i / 22050); //aca
            if (point > 0.3) { //aca 
                if ((point >= pAudioData.channelData[pSide][i + 1]) && down) {
                    if (auxPoint < point) {
                        auxPoint = point;
                    }
                    else if ((nowseg != lastSeg)) { // toma de 4 a 3 muestras por seg 
                        auxData = auxData + auxPoint;
                        lastSeg = nowseg;
                        this.peak.push(auxPoint); //punto
                        this.peak.push(Math.round(i / 44100)); //tiempo
                        down = false;
                        i++;
                        grow++;
                        auxPoint = 0;
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
        this.peak = [];
        this.peakArea = [];
        return musicalFootprint;
    };
    return splitMaster;
}());
exports.splitMaster = splitMaster;
//# sourceMappingURL=splitMaster.js.map