"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var areas = /** @class */ (function () {
    function areas() {
    }
    areas.prototype.waveTiangle = function (pAX, pAY, pBX, pBY, pCX, pCY) {
        var areaTriangle = Math.abs((((pAX * (pBY - pCY)) + (pBX * (pCY - pAY)) + (pCX * (pAY - pBY))) / 2));
        return (areaTriangle * 100) * 2;
    };
    return areas;
}());
exports.areas = areas;
//# sourceMappingURL=area.js.map