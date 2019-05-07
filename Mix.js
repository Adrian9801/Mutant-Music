"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Mix = /** @class */ (function () {
    function Mix(pDominantSectionL, pDominantSectionR) {
        this.dominantSection = this.s(pDominantSectionL, pDominantSectionR);
    }
    Mix.prototype.s = function (pDominantSectionL, pDominantSectionR) {
        var a = [];
        var la = 0;
        var pos = 0;
        for (var i = 0; i < la;) {
            pos = Math.floor(Math.random() * (la));
            if (pDominantSectionL[pos].length > 0) {
                a.push(Object.assign([], pDominantSectionL[pos]));
                pDominantSectionL[pos] = [];
                i++;
            }
        }
        return a;
    };
    return Mix;
}());
exports.Mix = Mix;
