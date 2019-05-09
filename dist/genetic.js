"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var genetic = /** @class */ (function () {
    function genetic() {
        this.model = [];
        this.progenitors = [];
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
    //evalua todos los elementos y le asigna un valor de importancia 
    // {1,2,1,1,1}org
    // {1,2,1,0,1} 4// suma uno por match
    // {1,2,1,0,1} 9
    //crear subarray
    genetic.prototype.fitness = function () {
        var pos = 0;
        var different = 0;
        var cant = Math.trunc(this.dataSong.length / this.model.length);
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
            if ((cant - 1) == index && pos < 7) {
                cant += cant;
                pos++;
            }
            if (different <= 3) {
                this.dataSong[index][0] = different;
                this.progenitors.push(this.dataSong[index]);
            }
        }
        this.sortSolution(this.progenitors, 0);
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
    genetic.prototype.reproduction = function () {
    };
    //mexcla de caracteristicas de los padres 
    //// medios , tercios exc..
    //lomite de 3 min despues
    genetic.prototype.cross0ver = function () {
    };
    //putacion anade datos inesperados
    // la mutacion se genera en x porcentaje desde cross0ver()
    genetic.prototype.mutation = function () {
    };
    return genetic;
}());
exports.genetic = genetic;
//# sourceMappingURL=genetic.js.map