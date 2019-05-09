"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Djs = /** @class */ (function () {
    function Djs(pAudioData, isS1) {
        this.shapeSecond2 = [];
        this.coincidenceList = [];
        this.shapeSecond = [];
        if (isS1) {
            this.shapeSecond = this.getShape(pAudioData);
            for (var index = 0; this.shapeSecond.length > 0; index++) {
                this.splitSong(index);
            }
            this.coincidenceList = this.sortSolution(this.coincidenceList, 0);
        }
        else {
            // this.getShape(pAudioData);
        }
    }
    Djs.prototype.splitSong = function (pPos) {
        this.shapeSecond = this.sortSolution(this.shapeSecond, 1);
        var split = Object.assign([], this.shapeSecond);
        var num = 0;
        if (split.length > 1) {
            for (var i = 1; i < split.length; i++) {
                num = Math.abs(split[0][1] - split[i][1]) + Math.abs(split[0][2] - split[i][2]) + Math.abs(split[0][3] - split[i][3])
                    + Math.abs(split[0][4] - split[i][4]) + Math.abs(split[0][5] - split[i][5]) + Math.abs(split[0][6] - split[i][6])
                    + Math.abs(split[0][7] - split[i][7]) + Math.abs(split[0][8] - split[i][8]);
                if ((num > 4000)) {
                    this.shapeSecond = this.shapeSecond.slice(i);
                    split = split.slice(0, i);
                    break;
                }
            }
        }
        else {
            this.shapeSecond = [];
        }
        var similar = [split.length];
        while (split.length > 0) {
            similar.push(split[split.length - 1][0]);
            split.pop();
        }
        this.coincidenceList[pPos] = similar;
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
        var cambio = 1;
        var num1 = 0;
        var num2 = 0;
        var num3 = 0;
        var shape = 0;
        result[0] = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.shapeSecond2[0] = [0, 0, 0, 0, 0, 0, 0];
        for (var index = 0; index < audioLength; index++) {
            num = (pAudioData[index + 1] - pAudioData[index]) * 100;
            if (num >= 15) {
                result[cont][1] += 1;
                num1++;
            }
            else if (num >= 10) {
                result[cont][2] += 1;
                num1++;
            }
            else if (num >= 5) {
                result[cont][3] += 1;
                num1++;
            }
            else if (num >= 0.5) {
                result[cont][4] += 1;
                num1++;
            }
            else if (num > -0.5) {
                result[cont][5] += 1;
                num2++;
            }
            else if (num >= -5) {
                result[cont][6] += 1;
                num3++;
            }
            else if (num >= -10) {
                result[cont][7] += 1;
                num3++;
            }
            else {
                result[cont][8] += 1;
                num3++;
            }
            if ((index + 2) % 3675 == 0 && pAudioData[index] < 0) {
                shape = 3;
            }
            if ((index + 1) % 7350 == 0) {
                if (num1 > num2) {
                    shape = 1;
                    num2 = num1;
                }
                if (num2 < num3) {
                    shape = 2;
                }
                this.shapeSecond2[cont][cambio] = shape;
                num1 = 0;
                num2 = 0;
                num3 = 0;
                shape = 0;
                cambio++;
                if ((index + 1) % 44100 == 0) {
                    cont++;
                    this.shapeSecond2[cont] = [cont, 0, 0, 0, 0, 0, 0];
                    cambio = 1;
                    result[cont] = [cont, 0, 0, 0, 0, 0, 0, 0, 0];
                }
            }
        }
        return result;
    };
    return Djs;
}());
exports.Djs = Djs;
//# sourceMappingURL=Dj.js.map