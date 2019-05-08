"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Mix = /** @class */ (function () {
    function Mix(pDominantSection, pAudio) {
        this.silence = this.createSilence();
        this.dominantSection = this.createMix(pDominantSection, pAudio);
    }
    Mix.prototype.createMix = function (pDominantSection, pAudio) {
        var result = [[], []];
        var sectionTime = [];
        var length = pDominantSection.length;
        var pos = 0;
        for (var indice = 0; indice < 11; indice++) {
            for (var index = 0; index < 3; index++) {
                pos = Math.floor(Math.random() * (length));
                sectionTime[index] = pDominantSection[pos];
            }
            result = this.addPart(sectionTime, indice, pAudio, result);
        }
        return result;
    };
    Mix.prototype.createSilence = function () {
        var silence = [];
        var silenceC = [];
        silence.push(0);
        for (var index = 0; index < 22; index++) {
            if (index < 12) {
                silence = silence.concat(silence);
                if (index == 0 || index == 2 || index == 3 || index == 4 || index == 7 || index == 11) {
                    silenceC = silenceC.concat(silence);
                }
            }
            else {
                if (index == 12) {
                    silence = [];
                }
                silence = silence.concat(silenceC);
            }
        }
        return silence;
    };
    Mix.prototype.addPart = function (pTime, pPosAudio, pAudio, pResult) {
        switch (pPosAudio) {
            case 1:
            case 2:
            case 5:
            case 7: {
                pResult[0] = pResult[0].concat(Array.prototype.slice.call(pAudio[0].slice(pTime[0], 44100 + pTime[0])));
                pResult[1] = pResult[1].concat(this.silence);
                pResult[0] = pResult[0].concat(this.silence);
                pResult[1] = pResult[1].concat(Array.prototype.slice.call(pAudio[1].slice(pTime[1], 44100 + pTime[1])));
                pResult[0] = pResult[0].concat(Array.prototype.slice.call(pAudio[0].slice(pTime[2], 44100 * 2 + pTime[2])));
                pResult[1] = pResult[1].concat(Array.prototype.slice.call(pAudio[1].slice(pTime[2], 44100 * 2 + pTime[2])));
                break;
            }
            case 3:
            case 4:
            case 8:
            case 9: {
                var duration = (Math.floor(Math.random() * (4)) + 4);
                for (var index = 0; index < duration; index++) {
                    pResult[0] = pResult[0].concat(Array.prototype.slice.call(pAudio[0].slice(pTime[0], 44100 + pTime[0])));
                    pResult[1] = pResult[1].concat(Array.prototype.slice.call(pAudio[1].slice(pTime[0], 44100 + pTime[0])));
                }
                break;
            }
            default: {
                var duration = (Math.floor(Math.random() * (3)) + 3);
                for (var index = 0; index < duration; index++) {
                    pResult[0] = pResult[0].concat(this.silence);
                    pResult[1] = pResult[1].concat(this.silence);
                    pResult[0] = pResult[0].concat(Array.prototype.slice.call(pAudio[0].slice(pTime[index % 3], 44100 + pTime[index % 3])));
                    pResult[1] = pResult[1].concat(Array.prototype.slice.call(pAudio[1].slice(pTime[index % 3], 44100 + pTime[index % 3])));
                }
                break;
            }
        }
        return pResult;
    };
    Mix.prototype.getDominantSection = function () {
        return this.dominantSection;
    };
    return Mix;
}());
exports.Mix = Mix;
//# sourceMappingURL=Mix.js.map