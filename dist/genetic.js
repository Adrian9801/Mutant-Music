"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var genetic = /** @class */ (function () {
    function genetic() {
        this.model = [];
        this.lastprogenitors = 0;
        this.newPopulation = [];
        this.dataSong = [];
        this.offspringLength = 0;
        this.offspring = 0;
        this.selectionCrosses = 0;
        this.mutationData = 0;
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
        console.log(cant);
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
            if ((cant - 1) == index && pos < 6) {
                //cant+=populationD;
                pos++;
                /*progenitors = this.sortSolution( progenitors,0);
                this.reproduction(progenitors[0], progenitors[1],(populationD));

                this.lastprogenitors += progenitors.length;
                progenitors =[];*/
            }
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
            kid = pFathe.slice(1, random).concat(pMother.slice(random));
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
        else if ((this.newPopulation.length - (this.newPopulation.length * 10) / 100) <= actualProg) {
            return false;
        }
        return true;
    };
    //putacion anade datos inesperados
    // la mutacion se genera en x porcentaje desde cross0ver()
    genetic.prototype.mutation = function (pKid) {
        var randomPost = 0;
        var randomMutatio = 0;
        randomPost = (Math.floor(Math.random() * 5) + 1);
        randomMutatio = (Math.floor(Math.random() * 4));
        pKid[randomPost] = randomMutatio;
        return pKid;
    };
    return genetic;
}());
exports.genetic = genetic;
//# sourceMappingURL=genetic.js.map