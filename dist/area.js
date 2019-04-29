"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var areas = /** @class */ (function () {
    function areas() {
    }
    // console.log('El area de la muestra es ' + pp.waveArea(0,ss.zonesTime,ss.zones[0],ss.zones[1]));
    //   _c1__                                
    //   |   | 
    // l1|   |l2   
    //   |_c1|                                                                     
    //   |  /               
    //c2 | /                
    //   |/                 
    // X se refiere al tiempo , Y a los valores de amplitud
    areas.prototype.waveArea = function (startPositionX, finalPositionX, startPositionY, finalPositionY) {
        var cateto1;
        var cateto2;
        var lado0; // el menor de los dos l1 ol2
        var lado1;
        var lado2;
        var AreaRectangulo;
        var AreaTriangulo;
        var AreaTotal;
        cateto1 = finalPositionX - startPositionX;
        lado1 = Math.round((1 - startPositionY) * 10); //lado izq
        //si la altura es diferente
        if (finalPositionY !== startPositionY) {
            lado2 = Math.round((1 - finalPositionY) * 10); //lado derecho
            if (lado1 > lado2) {
                cateto2 = lado1 - lado2;
                lado0 = lado2;
            } //cual es mayor
            else {
                cateto2 = lado2 - lado1;
                lado0 = lado1;
            }
            AreaRectangulo = (cateto1) * (lado0);
            AreaTriangulo = (((cateto2) * (cateto1)) / 2);
            // console.log( AreaRectangulo+ "cuadrado   tiempo"+ (cateto1) +"    lado0  "+ (lado0) );
            // console.log( AreaTriangulo+ "triangulo" );
            AreaTotal = AreaRectangulo + AreaTriangulo;
        }
        else {
            AreaTotal = (cateto1) * (lado1);
        }
        return AreaTotal;
    };
    return areas;
}());
exports.areas = areas;
//# sourceMappingURL=area.js.map