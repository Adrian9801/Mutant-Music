"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Djs = /** @class */ (function () {
    function Djs(pAudioData) {
        this.shapeSecond = this.getShape(pAudioData);
        this.coincidenceList = [];
        for (var i = 0; this.shapeSecond.length > 4; i++) {
            this.splitSong(i);
        }
        console.log(this.shapeSecond);
    }
    Djs.prototype.splitSong = function (pPos) {
        var split = this.sortSolution(Object.assign([], this.shapeSecond), 1);
        for (var index = 1; index < 9; index++) {
            if (split.length >= 1) {
                for (var i = 1; i < split.length; i++) {
                    if ((split[0][index] - split[i][index] > 1000)) {
                        if (index == 1) {
                            this.shapeSecond = this.shapeSecond.slice(i);
                        }
                        else {
                            this.shapeSecond.concat(split.slice(i));
                        }
                        split = split.slice(0, i);
                        break;
                    }
                }
                if (index < 8) {
                    split = this.sortSolution(split, index + 1);
                }
            }
            else {
                break;
            }
        }
        while (split.length > 0) {
            // this.coincidenceList[pPos].push(split[split.length-1][0]);
            split.pop();
        }
    };
    Djs.prototype.sortSolution = function (pSolution, pPosShape) {
        return pSolution.sort(function (shapeA, shapeB) {
            if (shapeA[pPosShape] > shapeB[pPosShape]) {
                return -1;
            }
            if (shapeA[pPosShape] < shapeB[pPosShape]) {
                return 1;
            }
            return 0;
        });
    };
    Djs.prototype.getShape = function (pAudioData) {
        var result = [];
        var audioLength = pAudioData.length - 1;
        var num = 0;
        var cont = 0;
        result[0] = [0, 0, 0, 0, 0, 0, 0, 0];
        for (var i = 0; i < audioLength; i++) {
            num = (pAudioData[i + 1] - pAudioData[i]) * 100;
            if (num >= 15) {
                result[cont][1] += 1;
            }
            else if (num >= 10) {
                result[cont][2] += 1;
            }
            else if (num >= 5) {
                result[cont][3] += 1;
            }
            else if (num >= 1) {
                result[cont][4] += 1;
            }
            else if (num > -1) {
                result[cont][5] += 1;
            }
            else if (num >= -5) {
                result[cont][6] += 1;
            }
            else if (num >= -10) {
                result[cont][7] += 1;
            }
            else {
                result[cont][8] += 1;
            }
            result[cont][0] = cont;
            if ((i + 1) % 44100 == 0) {
                cont++;
                result[cont] = [0, 0, 0, 0, 0, 0, 0, 0];
            }
        }
        result[cont][0] = cont;
        return result;
    };
    return Djs;
}());
exports.Djs = Djs;
