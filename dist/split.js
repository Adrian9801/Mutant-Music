"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var splits = /** @class */ (function () {
    function splits(pAudioData) {
        this.zoneA = [];
        this.zoneB = [];
        this.zoneC = [];
        this.zoneD = [];
        this.zoneE = [];
        this.zoneF = [];
        this.zoneG = [];
        this.zoneH = [];
        this.dumppi = [];
        this.audioData = pAudioData;
    }
    splits.prototype.splitSong = function () {
        var audioLength = this.audioData.channelData[0].length; // largo del audio
        var firstTime = true;
        var lastZone = 0;
        var nowZone = 0;
        var point; //temp para guardar los datos de una zona 
        var zone = []; //temp para guardar los datos de una zona 
        var btime = 0;
        var bn = 1;
        for (var i = 0; i < audioLength; i++) {
            point = this.audioData.channelData[0][i];
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
                    if (i == 44100 * (bn)) {
                        bn++;
                        btime++;
                        zone.push(point);
                        zone.push(btime);
                        console.log(point);
                        console.log(btime);
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
                        bn++;
                        btime++;
                        zone.push(point);
                        zone.push(btime);
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
                console.log(point);
                console.log(btime);
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
    return splits;
}());
exports.splits = splits;
//# sourceMappingURL=split.js.map