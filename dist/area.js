"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var areas = /** @class */ (function () {
    function areas() {
    }
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
        lado1 = 1 - startPositionY;
        if (finalPositionY !== startPositionY) {
            lado2 = 1 - finalPositionY;
            if (lado1 > lado2) {
                cateto2 = lado1 - lado2;
                lado0 = lado2;
            }
            else {
                cateto2 = lado2 - lado1;
                lado0 = lado1;
            }
            AreaRectangulo = (cateto1) * (lado0);
            AreaTriangulo = (((cateto2) * (cateto1)) / 2);
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