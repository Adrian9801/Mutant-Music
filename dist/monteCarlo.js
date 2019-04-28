"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//int valorEntero = Math.floor(Math.random()*(N-M+1)+M);// Valor entre M y N, ambos incluidos.
//Math.floor(Math.random() * 6) + 1  
// Math.floor(Math.random() * (max - min + 1)) + min;
var MTC = /** @class */ (function () {
    function MTC() {
        this.zoneA = [];
        this.zoneB = [];
    }
    MTC.prototype.setMC = function (zone1, zone2, areaS2) {
        this.zoneA = zone1;
        this.zoneB = zone2;
        this.MC();
    };
    MTC.prototype.MC = function () {
        var lenZoneOne;
        var lenZoneTwo;
        var lenSubZoneOne;
        var lenSubZoneTwo;
        var randomA;
        var randomB;
        var subRandomA;
        var subRandomB;
        // random de entre los conjuntos de la zona 1 y 2//
        lenZoneOne = this.zoneA.length - 1;
        lenZoneTwo = this.zoneB.length - 1;
        randomA = (Math.floor(Math.random() * (lenZoneOne - 0 + 1)) + 0);
        randomB = (Math.floor(Math.random() * (lenZoneTwo - 0 + 1)) + 0);
        //-------------------------------------------------//
        // random de los elementos de los conjuntos seleccionados de la zona 1 y 2//
        lenSubZoneOne = (Math.round(((this.zoneA[randomA].length - 2) / 2)));
        lenSubZoneTwo = (Math.round(((this.zoneB[randomB].length - 2) / 2)));
        subRandomA = (Math.floor(Math.random() * (lenSubZoneOne - 0 + 1)) + 0) * 2; //aseguramos num par
        subRandomB = (Math.floor(Math.random() * (lenSubZoneTwo - 0 + 1)) + 0) * 2; //aseguramos num par
        //-------------------------------------------------//
        console.log("//////////////////////////////");
        console.log(this.zoneA[randomA][subRandomA]);
        console.log(this.zoneA[randomA][subRandomA + 1]);
        console.log("-------------------------------");
        //-------------------------//
        console.log(this.zoneB[randomB][subRandomB]);
        console.log(this.zoneB[randomB][subRandomB + 1]);
        console.log("//////////////////////////////");
        this.segMonteCarlo(this.zoneA[randomA][subRandomA + 1], this.zoneB[randomB][subRandomB + 1]);
    };
    MTC.prototype.segMonteCarlo = function (segOne, segTwo) {
        if (segTwo - segOne == 7) {
            console.log("yes");
        }
        else {
            console.log("no");
            this.MC();
        }
    };
    return MTC;
}());
exports.MTC = MTC;
//# sourceMappingURL=monteCarlo.js.map