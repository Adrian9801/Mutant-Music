"use strict";
//int valorEntero = Math.floor(Math.random()*(N-M+1)+M);// Valor entre M y N, ambos incluidos.
//Math.floor(Math.random() * 6) + 1  
// Math.floor(Math.random() * (max - min + 1)) + min;
Object.defineProperty(exports, "__esModule", { value: true });
var area_1 = require("./area");
var claseArea = new area_1.areas();
var splitMaster_1 = require("./splitMaster");
var clasSplitMaster = new splitMaster_1.splitMaster();
var MTC = /** @class */ (function () {
    function MTC() {
        this.saveDataMatch = [];
        this.chanelOne = [];
        this.chanelTwo = [];
        this.masterMTC = 0;
        this.audioData = 0;
        this.reptit = [];
        this.NumPrmArea = 0;
        this.NumPrmSector = 0;
        ////////////////form S2////////////////////////// 
        this.totalAreaOrg = [];
        this.pointsAndTimesS2 = [];
        this.pointPositionS2 = [];
        this.zonesPointsS2 = [];
        this.zonesAreaS2 = [];
        this.totalAreasS2 = [];
        this.lastSeconS2 = 0;
        ////////////////////////////////////////////////// 
        ////////////////form Song////////////////////////// 
        this.auxPZoneA = [];
        this.auxPZoneB = [];
        this.zonesAreaSong = [];
        this.zone1 = [];
        this.zone2 = [];
        this.zone3 = [];
        this.zone4 = [];
        this.zone5 = [];
        this.zone6 = [];
        this.zone7 = [];
        this.zone8 = [];
        this.dumppi = [];
        ////////////////////////////////////////////////// 
    }
    MTC.prototype.setAudioData = function (pAudioData) {
        this.audioData = pAudioData;
    };
    MTC.prototype.setDataS2 = function (pPointsAndTimesS2, pPointPositionS2, pZonesPointsS2, pZonesAreaS2, pTotalAreasS2, pTotalAreaor) {
        this.pointsAndTimesS2 = pPointsAndTimesS2;
        this.pointPositionS2 = pPointPositionS2;
        this.zonesPointsS2 = pZonesPointsS2;
        this.zonesAreaS2 = pZonesAreaS2;
        this.totalAreasS2 = pTotalAreasS2;
        this.lastSeconS2 = this.pointsAndTimesS2[this.pointsAndTimesS2.length - 1];
        this.totalAreaOrg = pTotalAreaor;
        // console.log(this.pointsAndTimesS2);//puntos y tiempos 
        // console.log(this.pointPositionS2);//posiciones de los puntos
        //console.log(this.zonesPointsS2);// zonas de cada punto
        // console.log(this.zonesAreaS2);// areas de cada zona
        // console.log(this.totalAreasS2);// area total de todas las zonas 
        // console.log( this.totalAreaOrg);// area total de todas las zonas 
    };
    MTC.prototype.setDataSong = function (pZ1, pZ2, pZ3, pZ4, pZ5, pZ6, pZ7, pZ8) {
        this.zone1 = pZ1;
        this.zone2 = pZ2;
        this.zone3 = pZ3;
        this.zone4 = pZ4;
        this.zone5 = pZ5;
        this.zone6 = pZ6;
        this.zone7 = pZ7;
        this.zone8 = pZ8;
        // console.log("///////////////////////////////////////////////////")
        // console.log("cantidad de secciones de la zona A 1" +  this.zone1.length);
        // console.log("cantidad de secciones de la zona B 2" +  this.zone2.length);
        // console.log("cantidad de secciones de la zona C 3" +  this.zone3.length);
        // console.log("cantidad de secciones de la zona D 4" +  this.zone4.length);
        // console.log("EJE X-----------------------------------------------")
        // console.log("cantidad de secciones de la zona E 5" +  this.zone5.length);
        // console.log("cantidad de secciones de la zona F 6" +  this.zone6.length);
        // console.log("cantidad de secciones de la zona G 7" +  this.zone7.length);
        // console.log("cantidad de secciones de la zona H 8" +  this.zone8.length);
        // console.log("///////////////////////////////////////////////////");
    };
    MTC.prototype.makeMT = function (pmasterArea, pChanel) {
        this.masterMTC = pmasterArea;
        this.masterMC(this.getZone(this.zonesPointsS2[0]), this.getZone(this.zonesPointsS2[this.zonesPointsS2.length - 1]), pChanel);
    };
    MTC.prototype.masterMC = function (pZoneA, pZoneB, pChanel) {
        this.auxPZoneA = pZoneA;
        this.auxPZoneB = pZoneB;
        var lenZoneOne;
        var lenZoneTwo;
        var lenSubZoneOne;
        var lenSubZoneTwo;
        var randomA;
        var randomB;
        var subRandomA;
        var subRandomB;
        var areaSong;
        var resp;
        var postA;
        var auxArea = 0;
        resp = [];
        lenZoneOne = this.auxPZoneA.length - 1;
        lenZoneTwo = this.auxPZoneB.length - 1;
        for (var i = 0; i < 5000; i++) {
            // random de entre los conjuntos de la zona 1 y 2//
            randomA = (Math.floor(Math.random() * (lenZoneOne - 0 + 1)) + 0);
            randomB = (Math.floor(Math.random() * (lenZoneTwo - 0 + 1)) + 0);
            //randon dentro del conjunto seleccionado//
            lenSubZoneOne = ((Math.round((this.auxPZoneA[randomA].length) / 2)));
            lenSubZoneTwo = ((Math.round((this.auxPZoneB[randomB].length) / 2)));
            subRandomA = ((Math.floor(Math.random() * (lenSubZoneOne - 1 + 1)) + 1) * 2) - 1; //aseguramos num par
            subRandomB = ((Math.floor(Math.random() * (lenSubZoneTwo - 1 + 1)) + 1) * 2) - 1; //aseguramos num par
            //-----------------------------------------------------------------------------------------------------//
            if ((!(this.isRepit((this.auxPZoneA[randomA][subRandomA])))) && // que el segundo(tiempo) no sea repetido
                ((this.auxPZoneB[randomB][subRandomB]) - (this.auxPZoneA[randomA][subRandomA]))
                    == this.lastSeconS2 //que cumpla los n segundos requeridos
            ) {
                areaSong = clasSplitMaster.splitPeak(pChanel, this.audioData, ((this.auxPZoneA[randomA][subRandomA]) * 44100), ((this.auxPZoneB[randomB][subRandomB]) * 44100));
                //95 5 y 50 
                if ((areaSong >= (Math.round((this.masterMTC / 100) * 97)))
                    &&
                        ((areaSong <= (this.masterMTC + (Math.round((this.masterMTC / 100) * 5)))))) { //si el area total cumple con 70% 
                    this.reptit.push(this.auxPZoneA[randomA][subRandomA]);
                    // console.log(" ");
                    // console.log(" ");
                    console.log("///////////////////////////");
                    // console.log("Area Original:  " + this.masterMTC);
                    // console.log("Area Calculada:  " + (areaSong))
                    // console.log("Duracion " + this.lastSeconS2);
                    var segI = this.auxPZoneA[randomA][subRandomA];
                    var segF = this.auxPZoneB[randomB][subRandomB];
                    //cannal audio inicio final 
                    this.buildMatch(pChanel, this.audioData, (segI * 44100), (segF * 44100));
                    // console.log("segundos i y f " + segI + "---- " + segF);
                    // console.log("Tiempo Inicial" + this.giveTime(segI));
                    // console.log("Tiempo Final" + this.giveTime(segF));
                    // console.log("posicion inicial en cancnion Original " + this.auxPZoneA[randomA][subRandomA] * 44100);
                    // console.log("posicion final en cancnion Original " + this.auxPZoneB[randomB][subRandomB] * 44100);
                    // console.log("///////////////////////////");
                }
            }
        }
    };
    MTC.prototype.getZone = function (zone) {
        switch (zone) {
            case 1: {
                return this.zone1;
            }
            case 2: {
                return this.zone2;
            }
            case 3: {
                return this.zone3;
            }
            case 4: {
                return this.zone4;
            }
            case 5: {
                return this.zone5;
            }
            case 6: {
                return this.zone6;
            }
            case 7: {
                return this.zone7;
            }
            case 8: {
                return this.zone8;
            }
        }
        return this.dumppi;
    };
    MTC.prototype.gps = function (point) {
        var nowZone;
        if (point >= 0.75) {
            nowZone = 1;
        }
        else if (point >= 0.5) {
            nowZone = 2;
        }
        else if (point >= 0.25) {
            nowZone = 3;
        }
        else if (point >= 0) {
            nowZone = 4;
        }
        //-----------------------------------------------------------------LINEA CATESIANA X
        else if (point >= -0.25) {
            nowZone = 5;
        }
        else if (point >= -0.5) {
            nowZone = 6;
        }
        else if (point >= -0.75) {
            nowZone = 7;
        }
        else {
            nowZone = 8;
        }
        return nowZone;
    };
    MTC.prototype.isRepit = function (point) {
        var datarepit = false;
        if (this.reptit.length == 0) {
            return datarepit;
        }
        else {
            for (var i = 0; i <= this.reptit.length - 1; i++) {
                if (this.reptit[i] == point) {
                    datarepit = true;
                    break;
                }
                else {
                    datarepit = false;
                }
            }
            return datarepit;
        }
    };
    MTC.prototype.giveTime = function (pSecond) {
        var min = "";
        var minA = 0;
        var seg = 0;
        if (pSecond < 60) {
            console.log(minA + " : " + pSecond);
        }
        else {
            min = (pSecond / 60).toFixed();
            minA = +min;
            seg = Math.round((((pSecond / 60) - minA) * 60));
            console.log(minA + " : " + seg);
        }
    };
    MTC.prototype.GetMatchOne = function () {
        return this.chanelOne;
    };
    MTC.prototype.GetMatchTwo = function () {
        return this.chanelTwo;
    };
    MTC.prototype.buildMatch = function (pChanel, pAudioData, pStart, pFinal) {
        console.log(pStart + "////////" + pFinal);
        console.log(pFinal - pStart);
        var point;
        for (var i = pStart; i < (pFinal); i++) {
            console.log("/////////////////////////////////////////////////////////////////////////////////////////////");
            point = pAudioData.channelData[pChanel][i]; //punto 
            if (pChanel == 0) {
                this.chanelOne.push(point);
            }
            else {
                this.chanelTwo.push(point);
            }
        }
    };
    return MTC;
}());
exports.MTC = MTC;
//# sourceMappingURL=monteCarlo.js.map