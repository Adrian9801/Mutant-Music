"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var area_1 = require("./area");
var splits = /** @class */ (function () {
    function splits(pAudioData) {
        this.audioData = pAudioData;
        ////////////////form Song////////////////////////// 
        this.zoneA = [];
        this.zoneB = [];
        this.zoneC = [];
        this.zoneD = [];
        this.zoneE = [];
        this.zoneF = [];
        this.zoneG = [];
        this.zoneH = [];
        this.dumppi = [];
        ////////////////////////////////////////////////// 
        ////////////////form S2////////////////////////// 
        this.pointAndTimeS2 = [];
        this.positionIS2 = [];
        this.zoneS2 = [];
        this.areaWaveS2 = [];
        this.totalAreaWaveS2 = [];
        ////////////////////////////////////////////////// 
    }
    // true para estudiar S2 false para la cancion 
    splits.prototype.splitSong = function (dataSong) {
        var audioLength = this.audioData.channelData[0].length - 1; // largo del audio
        var firstTime = true;
        var lastZone = 0; //ultima zona
        var nowZone = 0; //zona actual
        var point; //temp para guardar los datos de una zona 
        var zone = []; //temp para guardar los datos de una zona 
        var btime = 0; //tiempo
        var bn = 1; //n para calculo de tiempo
        for (var i = 0; i < audioLength; i++) {
            point = this.audioData.channelData[0][i]; //punto 
            if (!firstTime) { // sino es la primera vez
                // asigna nuevo valor a nowZone
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
                if (lastZone == nowZone) { // si las zonas son iguales sigue anadiendo puntos
                    if (i == 44100 * (bn)) { //si pasa del segundo actual
                        bn++; //aunmenta el calculo del segundo
                        btime++; //aumenta los segundos
                        zone.push(point);
                        zone.push(btime);
                        if (dataSong) { // de estar estudiando el S2
                            this.pointAndTimeS2.push(point);
                            this.pointAndTimeS2.push(btime);
                            this.positionIS2.push(i);
                        }
                        // console.log(point); por segundo 
                        // console.log(btime);
                    }
                    else {
                        zone.push(point);
                        zone.push(btime);
                    }
                }
                else { //si las zonas cambian o sea se brinca de una zona a otra 
                    this.insertZone(lastZone, Object.assign([], zone)); // guarda los datos de toda la zona pasada
                    zone = []; // refresca el temp de lazona
                    lastZone = nowZone;
                    if (i == 44100 * (bn)) {
                        bn++; //aunmenta el calculo del segundo
                        btime++; //aumenta los segundos
                        zone.push(point);
                        zone.push(btime);
                        if (dataSong) { // de estar estudiando el S2
                            this.pointAndTimeS2.push(point);
                            this.pointAndTimeS2.push(btime);
                            this.positionIS2.push(i);
                        }
                    }
                    else {
                        zone.push(point);
                        zone.push(btime);
                    }
                }
            }
            else { // solo para el primer caso
                zone.push(point);
                zone.push(btime);
                // console.log(point);
                // console.log(btime);
                // para S2
                this.pointAndTimeS2.push(point);
                this.pointAndTimeS2.push(btime);
                this.positionIS2.push(i);
                // asigna nuevo valor a nowZone
                if (point >= 0.75) {
                    lastZone = nowZone = 1;
                }
                else if (point >= 0.5) {
                    lastZone = nowZone = 2;
                }
                else if (point >= 0.25) {
                    lastZone = nowZone = 3;
                }
                else if (point >= 0) {
                    lastZone = nowZone = 4;
                }
                //-----------------------------------------------------------------LINEA CATESIANA X
                else if (point >= -0.25) {
                    lastZone = nowZone = 5;
                }
                else if (point >= -0.5) {
                    lastZone = nowZone = 6;
                }
                else if (point >= -0.75) {
                    lastZone = nowZone = 7;
                }
                else {
                    lastZone = nowZone = 8;
                }
                firstTime = false;
            }
        }
        if (dataSong) { // de estar estudiando el S2
            this.pointAndTimeS2.push(this.audioData.channelData[0][audioLength]);
            this.pointAndTimeS2.push(Math.round(audioLength / 44100));
            this.positionIS2.push(audioLength);
            this.loadZoneS2(); // en caso de estudiar s2 termina con la carga de las areas 
        }
    };
    //determina en que zona se encantra cada punto guardado de S2(se guarda un punto cada segundo )
    splits.prototype.loadZoneS2 = function () {
        var nowZone = 0; //zona actual
        var point; //punto 
        for (var i = 0; i < this.pointAndTimeS2.length - 1; i++) {
            point = this.audioData.channelData[0][i]; //punto 
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
            i++;
            this.zoneS2.push(nowZone); //pisiciones de esos datos 
        }
        this.areaS2();
    };
    //calcula el area de cada sub-zona de S2
    splits.prototype.areaS2 = function () {
        var clasesarea = new area_1.areas(); //area de S2 segun datos
        var auxArea = 0;
        var auxTotalArea = 0;
        for (var i = 0; i <= this.pointAndTimeS2.length - 3; i++) {
            //tiempo de inicio , tiempo final , punto de inicio punto final
            auxArea = clasesarea.waveArea(this.pointAndTimeS2[i + 1], this.pointAndTimeS2[i + 3], this.pointAndTimeS2[i], this.pointAndTimeS2[i + 2]);
            this.areaWaveS2.push(auxArea);
            auxTotalArea = auxTotalArea + auxArea;
            i++;
        }
        this.totalAreaWaveS2[0] = auxTotalArea;
    };
    splits.prototype.insertZone = function (pZoneNumber, pZone) {
        switch (pZoneNumber) {
            case 1: {
                this.zoneA.push(pZone);
                break;
            }
            case 2: {
                this.zoneB.push(pZone);
                break;
            }
            case 3: {
                this.zoneC.push(pZone);
                break;
            }
            case 4: {
                this.zoneD.push(pZone);
                break;
            }
            case 5: {
                this.zoneE.push(pZone);
                break;
            }
            case 6: {
                this.zoneF.push(pZone);
                break;
            }
            case 7: {
                this.zoneG.push(pZone);
                break;
            }
            case 8: {
                this.zoneH.push(pZone);
                break;
            }
        }
    };
    splits.prototype.getZone = function (zone) {
        switch (zone) {
            case 1: {
                return this.zoneA;
            }
            case 2: {
                return this.zoneB;
            }
            case 3: {
                return this.zoneC;
            }
            case 4: {
                return this.zoneD;
            }
            case 5: {
                return this.zoneE;
            }
            case 6: {
                return this.zoneF;
            }
            case 7: {
                return this.zoneG;
            }
            case 8: {
                return this.zoneH;
            }
        }
        return this.dumppi;
    };
    splits.prototype.getDataS2 = function (zone) {
        switch (zone) {
            case 1: {
                return this.pointAndTimeS2;
            }
            case 2: {
                return this.positionIS2;
            }
            case 3: {
                return this.zoneS2;
            }
            case 4: {
                return this.areaWaveS2;
            }
            case 5: {
                return this.totalAreaWaveS2;
            }
        }
        return [];
    };
    return splits;
}());
exports.splits = splits;
//# sourceMappingURL=split.js.map