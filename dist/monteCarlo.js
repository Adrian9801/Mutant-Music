"use strict";
//int valorEntero = Math.floor(Math.random()*(N-M+1)+M);// Valor entre M y N, ambos incluidos.
//Math.floor(Math.random() * 6) + 1  
// Math.floor(Math.random() * (max - min + 1)) + min;
Object.defineProperty(exports, "__esModule", { value: true });
var area_1 = require("./area");
var MTC = /** @class */ (function () {
    function MTC() {
        this.zoneA = [];
        this.zoneB = [];
        this.Respuesta = [];
        this.respMT = [];
        this.areaS2 = 0;
    }
    MTC.prototype.setMC = function (zone1, zone2, areaS2) {
        this.zoneA = zone1;
        this.zoneB = zone2;
        this.areaS2 = areaS2;
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
        lenZoneOne = this.zoneA.length - 1;
        lenZoneTwo = this.zoneB.length - 1;
        for (var i = 0; i < 70000; i++) {
            // random de entre los conjuntos de la zona 1 y 2//
            randomA = (Math.floor(Math.random() * (lenZoneOne - 0 + 1)) + 0);
            randomB = (Math.floor(Math.random() * (lenZoneTwo - 0 + 1)) + 0);
            //-------------------------------------------------//
            // random de los elementos de los conjuntos seleccionados de la zona 1 y 2//
            lenSubZoneOne = (Math.round(((this.zoneA[randomA].length - 2) / 2)));
            lenSubZoneTwo = (Math.round(((this.zoneB[randomB].length - 2) / 2)));
            subRandomA = (Math.floor(Math.random() * (lenSubZoneOne - 0 + 1)) + 0) * 2; //aseguramos num par
            subRandomB = (Math.floor(Math.random() * (lenSubZoneTwo - 0 + 1)) + 0) * 2; //aseguramos num par
            //-------------------------------------------------//
            if (((this.zoneB[randomB].length > 0) && (this.zoneA[randomA].length > 0)) // que no sea un par ya seleccionado
                &&
                    this.segMonteCarlo(this.zoneA[randomA][subRandomA + 1], this.zoneB[randomB][subRandomB + 1] //que cumpla los n segundos requeridos
                    , this.zoneA[randomA][subRandomA], this.zoneB[randomB][subRandomB])) {
                this.respMT.push(this.zoneA[randomA][subRandomA + 1]);
                this.respMT.push(this.zoneB[randomB][subRandomB + 1]);
                this.Respuesta.push(this.respMT);
                this.respMT = [];
                this.zoneB[randomB] = [];
                this.zoneA[randomA] = [];
            }
        }
        console.log(this.Respuesta.length);
    };
    MTC.prototype.segMonteCarlo = function (segOne, segTwo, posOne, posTwo) {
        var clasesarea = new area_1.areas(); //area de S2 segun datos
        if (segTwo - segOne == 7) {
            var area = clasesarea.waveArea(segOne, segTwo, posOne, posTwo);
            if ((443 <= area) && (area <= this.areaS2)) {
                console.log(this.areaS2);
                console.log(clasesarea.waveArea(segOne, segTwo, posOne, posTwo) + " area");
                // console.log(posOne + "   " + posTwo);
                // console.log(segOne + "   " + segTwo);
                console.log("//////////////////////////////");
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    };
    return MTC;
}());
exports.MTC = MTC;
//# sourceMappingURL=monteCarlo.js.map