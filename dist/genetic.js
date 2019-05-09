"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var genetic = /** @class */ (function () {
    function genetic() {
        this.model = 0;
        this.offspringLength = 0;
        this.offspring = 0;
        this.selectionCrosses = 0;
        this.mutationData = 0;
    }
    //poblacion de la cancion al azar 
    genetic.prototype.initialPopulation = function () {
    };
    //evalua todos los elementos y le asigna un valor de importancia 
    // {1,2,1,1,1}org
    // {1,2,1,0,1} 4// suma uno por match
    // {1,2,1,0,1} 9
    //crear subarray
    genetic.prototype.fitness = function () {
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