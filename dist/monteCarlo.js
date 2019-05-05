"use strict";
//int valorEntero = Math.floor(Math.random()*(N-M+1)+M);// Valor entre M y N, ambos incluidos.
//Math.floor(Math.random() * 6) + 1  
// Math.floor(Math.random() * (max - min + 1)) + min;
Object.defineProperty(exports, "__esModule", { value: true });
var MTC = /** @class */ (function () {
    ////////////////////////////////////////////////// 
    function MTC() {
        ////////////////form S2////////////////////////// 
        this.pointsAndTimesS2 = [];
        this.pointPositionS2 = [];
        this.zonesPointsS2 = [];
        this.zonesAreaS2 = [];
        this.totalAreasS2 = [];
        ////////////////////////////////////////////////// 
        ////////////////form Song////////////////////////// 
        this.zone1 = [];
        this.zone2 = [];
        this.zone3 = [];
        this.zone4 = [];
        this.zone5 = [];
        this.zone6 = [];
        this.zone7 = [];
        this.zone8 = [];
        ////////////////////////////////////////////////// 
    }
    MTC.prototype.setDataS2 = function (pPointsAndTimesS2, pPointPositionS2, pZonesPointsS2, pZonesAreaS2, pTotalAreasS2) {
        this.pointsAndTimesS2 = pPointsAndTimesS2;
        this.pointPositionS2 = pPointPositionS2;
        this.zonesPointsS2 = pZonesPointsS2;
        this.zonesAreaS2 = pZonesAreaS2;
        this.totalAreasS2 = pTotalAreasS2;
        // console.log(this.pointsAndTimesS2);//puntos y tiempos
        // console.log(this.pointPositionS2);//posiciones de los puntos
        // console.log(this.zonesPointsS2);// zonas de cada punto
        // console.log(this.zonesAreaS2);// areas de cada zona
        // console.log(this.totalAreasS2);// area total de todas las zonas 
    };
    MTC.prototype.setDataSong = function (pZ1, pZ2, pZ3, pZ4, pZ5, pZ6, pZ7, pZ8) {
        this.zone1 = pZ1;
        this.zone2 = pZ2;
        this.zone3 = pZ3;
        this.zone4 = pZ4;
        this.zone5 = pZ5;
        this.zone6 = pZ6;
        this.zone7 = pZ7;
        this.zone8 = pZ8;
        console.log("///////////////////////////////////////////////////");
        console.log("cantidad de secciones de la zona A 1" + this.zone1.length);
        console.log("cantidad de secciones de la zona B 2" + this.zone2.length);
        console.log("cantidad de secciones de la zona C 3" + this.zone3.length);
        console.log("cantidad de secciones de la zona D 4" + this.zone4.length);
        console.log("EJE X-----------------------------------------------");
        console.log("cantidad de secciones de la zona E 5" + this.zone5.length);
        console.log("cantidad de secciones de la zona F 6" + this.zone6.length);
        console.log("cantidad de secciones de la zona G 7" + this.zone7.length);
        console.log("cantidad de secciones de la zona H 8" + this.zone8.length);
        console.log("///////////////////////////////////////////////////");
    };
    return MTC;
}());
exports.MTC = MTC;
//     public MC() {
//         var lenZoneOne: number;
//         var lenZoneTwo: number;
//         var lenSubZoneOne: number;
//         var lenSubZoneTwo: number;
//         var randomA: number;
//         var randomB: number;
//         var subRandomA: number;
//         var subRandomB: number;
//         lenZoneOne = this.zoneA.length - 1;
//         lenZoneTwo = this.zoneB.length - 1;
//         for (var i = 0; i < 80000; i++) {
//             // random de entre los conjuntos de la zona 1 y 2//
//             randomA = (Math.floor(Math.random() * (lenZoneOne - 0 + 1)) + 0);
//             randomB = (Math.floor(Math.random() * (lenZoneTwo - 0 + 1)) + 0);
//             //-------------------------------------------------//
//             // random de los elementos de los conjuntos seleccionados de la zona 1 y 2//
//             lenSubZoneOne = (Math.round(((this.zoneA[randomA].length - 2) / 2)));
//             lenSubZoneTwo = (Math.round(((this.zoneB[randomB].length - 2) / 2)));
//             subRandomA = (Math.floor(Math.random() * (lenSubZoneOne - 0 + 1)) + 0) * 2;//aseguramos num par
//             subRandomB = (Math.floor(Math.random() * (lenSubZoneTwo - 0 + 1)) + 0) * 2;//aseguramos num par
//             //-------------------------------------------------//
//             if (((this.zoneB[randomB].length > 1) && (this.zoneA[randomA].length > 1))// que no sea un par ya seleccionado
//                 &&
//                 this.segMonteCarlo(this.zoneA[randomA][subRandomA + 1], this.zoneB[randomB][subRandomB + 1]//que cumpla los n segundos requeridos
//                     , this.zoneA[randomA][subRandomA], this.zoneB[randomB][subRandomB])
//             ) {
//                 this.respMT.push(this.zoneA[randomA][subRandomA + 1]);
//                 this.respMT.push(this.zoneB[randomB][subRandomB + 1]);
//                 this.Respuesta.push(this.respMT);
//                 this.respMT = [];
//                 this.zoneB[randomB] = [];
//                 this.zoneA[randomA] = [];
//             }
//         }
//         console.log(this.Respuesta.length);
//         console.log(this.Respuesta[0]);
//     }
//     public segMonteCarlo(segOne: number, segTwo: number, posOne: number, posTwo: number): boolean {
//         var clasesarea = new areas();//area de S2 segun datos
//         var area: number;
//         if (segTwo - segOne == this.time) {
//             area = clasesarea.waveArea(segOne, segTwo, posOne, posTwo)
//             if (((this.areaS2 / 100) * 70 <= area) && (area <= this.areaS2)) {
//                 // console.log(this.areaS2  + " area original");
//                 // console.log(clasesarea.waveArea(segOne, segTwo, posOne, posTwo)  + " area de muestra");
//                 // console.log("//////////////////////////////" );
//                 return true;
//             } else {
//                 return false;
//             }
//         } else {
//             return false;
//         }
//     }
//     // console.log("//////////////////////////////");
//     // console.log(this.zoneA[randomA][subRandomA]);
//     // console.log(this.zoneA[randomA][subRandomA + 1]);
//     // console.log("-------------------------------");
//     // //-------------------------//
//     // console.log(this.zoneB[randomB][subRandomB]);
//     // console.log(this.zoneB[randomB][subRandomB + 1]);
//     // console.log("//////////////////////////////");
// }
//# sourceMappingURL=monteCarlo.js.map