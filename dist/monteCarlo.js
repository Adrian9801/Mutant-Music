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
        this.time = 0;
    }
    MTC.prototype.setMC = function (pZone1, pZone2, pAreaS2, ptime) {
        this.zoneA = pZone1;
        this.zoneB = pZone2;
        this.areaS2 = pAreaS2;
        this.time = ptime;
        this.MC();
    };
    MTC.prototype.monteCarlo = function (pZoneA, pZoneB, psameZone) {
        var zoneA;
        var zoneB;
        var randomA;
        var randomB;
        var lenZoneOne = pZoneA.length - 1;
        var lenZoneTwo = pZoneB.length - 1;
        var lenSubZoneOne;
        var lenSubZoneTwo;
        var subRandomA;
        var subRandomB;
        for (var i = 0; i < 200; i++) {
            if (psameZone) {
                randomA = (Math.floor(Math.random() * (lenZoneOne - 0 + 1)) + 0); // random de las secciones 
                lenSubZoneOne = ((Math.round((pZoneA[randomA].length - 2) / 2))); // len intercalado
                subRandomA = (Math.floor(Math.random() * (lenSubZoneOne - 0 + 1)) + 0) * 2; //aseguramos num par
                subRandomB = subRandomA + 1; //metod de prediccion de segundo 
                for (var i = subRandomA + 2; i < pZoneA[randomA].length - 1; i++) {
                    subRandomB = pZoneA[randomA][i];
                    if (subRandomA = subRandomB - 1) {
                        console.log("segundo encontrado");
                    }
                    i++;
                }
                zoneA = pZoneA[randomA][subRandomA + 1];
                zoneB = pZoneA[randomA][subRandomB + 1];
                ;
                if (zoneA + 1 == (zoneB)) {
                    console.log("//////////////");
                }
            }
            else {
            }
        }
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
        for (var i = 0; i < 80000; i++) {
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
            if (((this.zoneB[randomB].length > 1) && (this.zoneA[randomA].length > 1)) // que no sea un par ya seleccionado
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
        console.log(this.Respuesta[0]);
    };
    MTC.prototype.segMonteCarlo = function (segOne, segTwo, posOne, posTwo) {
        var clasesarea = new area_1.areas(); //area de S2 segun datos
        var area;
        if (segTwo - segOne == this.time) {
            area = clasesarea.waveArea(segOne, segTwo, posOne, posTwo);
            if (((this.areaS2 / 100) * 70 <= area) && (area <= this.areaS2)) {
                // console.log(this.areaS2  + " area original");
                // console.log(clasesarea.waveArea(segOne, segTwo, posOne, posTwo)  + " area de muestra");
                // console.log("//////////////////////////////" );
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