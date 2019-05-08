"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var area_1 = require("./area");
var samples = /** @class */ (function () {
    function samples(pAudioData) {
        this.timesS2 = [];
        this.areas = [];
        this.audioLength = 0;
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
    samples.prototype.allAreaS2 = function () {
        var clasesarea = new area_1.areas(); //area de S2 segun datos
        for (var i = 0; i <= this.zones.length - 3; i++) {
            if (this.zones[i + 1] == this.zones[i + 3]) {
                this.timesS2.push(1);
                this.areas.push(clasesarea.waveArea(this.zones[i + 1], this.zones[i + 3], this.zones[i], this.zones[i + 2]));
                i++;
            }
            else {
                var aux = this.zones[i + 3] - this.zones[i + 1];
                this.timesS2.push(aux);
                this.areas.push(clasesarea.waveArea(this.zones[i + 1], this.zones[i + 3], this.zones[i], this.zones[i + 2]));
                i++;
            }
        }
        console.log(this.timesS2 + " esteeeee");
    };
    //////////////////////////////////////////////////////////////////////////////////////////////////////////
    samples.prototype.setPoints = function (pCantPoint) {
        var point;
        var auxPointIterator;
        this.audioLength = this.audioData.channelData[0].length - 1;
        point = this.audioData.channelData[0][0]; // primer punto guardado
        // this.pointZonesStr.push(0);// posicion y tiempo
        this.zones.push(point); //puntos
        this.zones.push(0);
        for (var i = pCantPoint - 1; i !== 0; i--) {
            auxPointIterator = Math.round(((this.audioLength - 1) / i));
            point = this.audioData.channelData[0][auxPointIterator];
            // this.pointZonesStr.push(auxPointIterator);// se guarda los puntos para la razon de crecimiento
            // this.pointZonesStr.push( Math.round((auxPointIterator/44100)) );// se guarda los puntos para la razon de crecimiento
            this.zones.push(point);
            this.zones.push(Math.round((auxPointIterator / 44100)));
        }
    };
    // codifica la muestra en "pCantCod" fragmentos 
    //determina los valores de pertenacia en elplano cat
    samples.prototype.mainComponent = function (pCantCod) {
        this.setPoints(pCantCod); // corta en semi-areas la muestra
        this.allAreaS2(); // calcula el area de cada semi-area 
        var nowZone;
        var point; //temp para guardar los datos de una zona  
        this.zonesTime = this.audioLength - 1;
        for (var i = 0; i <= this.zones.length - 1; i++) {
            point = this.zones[i];
            var ptime = this.zones[i + 1];
            console.log('punto ' + point);
            console.log('tiempo ' + ptime);
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
            console.log('zona' + nowZone);
            console.log('/////////////////');
            this.zonesStr.push(nowZone);
            i++;
        }
        console.log(this.zonesStr);
    };
    return samples;
}());
exports.samples = samples;
//# sourceMappingURL=sampleS2.js.map