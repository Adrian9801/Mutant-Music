"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var genetic = /** @class */ (function () {
    function genetic() {
        this.model = [];
        this.lastprogenitors = 0;
        this.newPopulation = [];
        this.newSong = [];
        this.audioS2 = [];
        this.dataSong = [];
    }
    genetic.prototype.setModel = function (pModel) {
        this.model = pModel;
    };
    genetic.prototype.setDataSong = function (pDataSong) {
        this.dataSong = pDataSong;
    };
    genetic.prototype.getPopulation = function () {
        return this.newPopulation;
    };
    //evalua todos los elementos y le asigna un valor de importancia 
    // {1,2,1,1,1}org
    // {1,2,1,0,1} 4// suma uno por match
    // {1,2,1,0,1} 9
    //crear subarray
    genetic.prototype.fitness = function () {
        var pos = 0;
        this.lastprogenitors = 0;
        var progenitors;
        progenitors = [];
        var different = 0;
        var cant = Math.trunc(this.dataSong.length / this.model.length);
        var populationD = cant;
        for (var index = 0; index < cant; index++) {
            if (this.model[pos][1] != this.dataSong[index][1]) {
                different++;
            }
            if (this.model[pos][2] != this.dataSong[index][2]) {
                different++;
            }
            if (this.model[pos][3] != this.dataSong[index][3]) {
                different++;
            }
            if (this.model[pos][4] != this.dataSong[index][4]) {
                different++;
            }
            if (this.model[pos][5] != this.dataSong[index][5]) {
                different++;
            }
            if (this.model[pos][6] != this.dataSong[index][6]) {
                different++;
            }
            if (different <= 3) {
                this.dataSong[index][0] = different;
                progenitors.push(this.dataSong[index]);
            }
            if ((cant - 1) == index && pos < this.model.length - 1) {
                cant += populationD;
                pos++;
                progenitors = this.sortSolution(progenitors, 0);
                if (progenitors.length < 2) {
                    if (progenitors.length < 1) {
                        progenitors[0] = [0, (Math.floor(Math.random() * 4)), (Math.floor(Math.random() * 4)), (Math.floor(Math.random() * 4)), (Math.floor(Math.random() * 4)), (Math.floor(Math.random() * 4)), (Math.floor(Math.random() * 4))];
                    }
                    progenitors[1] = [0, (Math.floor(Math.random() * 4)), (Math.floor(Math.random() * 4)), (Math.floor(Math.random() * 4)), (Math.floor(Math.random() * 4)), (Math.floor(Math.random() * 4)), (Math.floor(Math.random() * 4))];
                }
                this.reproduction(progenitors[0], progenitors[1], (populationD));
                this.lastprogenitors += progenitors.length;
                progenitors = [];
            }
            different = 0;
        }
    };
    genetic.prototype.sortSolution = function (pSolution, pPosShape) {
        return pSolution.sort(function (shapeA, shapeB) {
            if (shapeA[pPosShape] < shapeB[pPosShape]) {
                return -1;
            }
            if (shapeA[pPosShape] > shapeB[pPosShape]) {
                return 1;
            }
            return 0;
        });
    };
    //realiza un cruce entre los datos  dle fitnes 
    genetic.prototype.reproduction = function (pFathe, pMother, pPopulation) {
        var random = 0;
        for (var index = 0; index < pPopulation; index++) {
            var kid;
            random = (Math.floor(Math.random() * 6) + 1);
            kid = pFathe.slice(0, random).concat(pMother.slice(random));
            if ((Math.floor(Math.random() * 100) < 7)) {
                kid = this.mutation(kid);
            }
            this.newPopulation.push(kid);
        }
    };
    genetic.prototype.selectionPopulation = function () {
        var actualProg;
        var auxProgenitors = (Object.assign([], this.newPopulation));
        var lastProg = this.lastprogenitors;
        this.setDataSong(this.newPopulation);
        this.fitness();
        actualProg = this.lastprogenitors;
        if (lastProg > actualProg) {
            this.setDataSong(auxProgenitors);
        }
        else if ((this.newPopulation.length - (this.newPopulation.length * 56) / 100) <= actualProg) {
            return false;
        }
        return true;
    };
    //putacion anade datos inesperados
    // la mutacion se genera en x porcentaje desde cross0ver()
    genetic.prototype.mutation = function (pKid) {
        var randomPost = 0;
        var randomMutatio = 0;
        randomPost = (Math.floor(Math.random() * 6) + 1);
        randomMutatio = (Math.floor(Math.random() * 4));
        pKid[randomPost] = randomMutatio;
        return pKid;
    };
    genetic.prototype.getZonePoint = function (pPoint, pZonePoints) {
        var zone = 0;
        for (var index = 1; index < 7; index++) {
            if (this.model[pZonePoints][index] == pPoint) {
                zone = pZonePoints * 44100 + (index - 1) * 7350;
                return this.audioS2[0].slice(zone, zone + 7350);
            }
        }
        for (var index = 0; index < this.model.length; index++) {
            for (var indexJ = 1; indexJ < 7; indexJ++) {
                if (this.model[index][indexJ] == pPoint) {
                    zone = index * 44100 + (indexJ - 1) * 7350;
                    return this.audioS2[0].slice(zone, zone + 7350);
                }
            }
        }
        zone = pZonePoints * 44100 + (Math.floor(Math.random() * 6)) * 7350;
        return this.audioS2[0].slice(zone, zone + 7350);
    };
    genetic.prototype.setAudioS2 = function (pAudioS2) {
        this.audioS2 = pAudioS2;
    };
    genetic.prototype.generateSong = function () {
        this.newSong[0] = [];
        this.newSong[1] = [];
        var lenghtPopulation = this.newPopulation.length;
        var zonePoints = 0;
        var length = Math.trunc(lenghtPopulation / this.model.length);
        for (var index = 0; index < lenghtPopulation; index++) {
            for (var indexJ = 1; indexJ < 7; indexJ++) {
                this.newSong[0] = this.newSong[0].concat(this.getZonePoint(this.newPopulation[index][indexJ], zonePoints));
                this.newSong[1] = this.newSong[1].concat(this.getZonePoint(this.newPopulation[index][indexJ], zonePoints));
            }
            if ((index + 1) % length == 0) {
                zonePoints++;
                if (zonePoints >= this.model.length) {
                    return;
                }
            }
        }
    };
    genetic.prototype.getNewSong = function () {
        return this.newSong;
    };
    return genetic;
}());
exports.genetic = genetic;
//# sourceMappingURL=genetic.js.map