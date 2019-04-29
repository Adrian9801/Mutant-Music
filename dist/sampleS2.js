"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var area_1 = require("./area");
var samples = /** @class */ (function () {
    function samples(pAudioData) {
        this.zonesTime = 0;
        this.beginZone = 0;
        this.finalZone = 0;
        this.zones = [];
        this.S2 = [];
        this.zonesStr = [];
        this.pointZonesStr = [];
        this.audioData = pAudioData;
        this.areaWave = 0; // largo del audio
        this.timeLen = 0;
    }
    samples.prototype.dataS2 = function () {
        var audioLength = this.audioData.channelData[0].length - 1; // largo del audio
        var s2Temp = []; //temp para guardar los datos de una zona 
        var point; //temp para guardar los datos de una zona 
        var points; //temp para guardar los datos de una zona 
        var nowZone; //temp para guardar los datos de una zona 
        points = 0;
        point = this.audioData.channelData[0][0];
        s2Temp.push(point); //punto
        s2Temp.push(0); //tiempo
        s2Temp.push(this.audioData.channelData[0][audioLength]); //punto
        s2Temp.push(Math.round(audioLength / 44100)); //tiempo
        // console.log((Math.round(audioLength/44100)));//tiempo total de duracion 
        while (points !== 2) {
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
            s2Temp.push(nowZone); //punto
            console.log(point);
            point = this.audioData.channelData[0][audioLength];
            points++;
        }
        this.S2 = s2Temp;
    };
    samples.prototype.areaS2 = function () {
        var clasesarea = new area_1.areas(); //area de S2 segun datos
        this.beginZone = this.S2[4]; //inicio
        this.finalZone = this.S2[5]; //final
        this.timeLen = this.S2[3]; //tiempo
        this.areaWave = clasesarea.waveArea(this.S2[1], this.S2[3], this.S2[0], this.S2[2]);
    };
    return samples;
}());
exports.samples = samples;
//# sourceMappingURL=sampleS2.js.map