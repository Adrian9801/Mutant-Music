//int valorEntero = Math.floor(Math.random()*(N-M+1)+M);// Valor entre M y N, ambos incluidos.
//Math.floor(Math.random() * 6) + 1  
// Math.floor(Math.random() * (max - min + 1)) + min;

import { areas } from "./area";

export class MTC {

    private NumMTC: number
    private dumppi: number[][];
    ////////////////form S2////////////////////////// 
    private pointsAndTimesS2: number[];
    private pointPositionS2: number[];
    private zonesPointsS2: number[];
    private zonesAreaS2: number[];
    private totalAreasS2: number[];
    ////////////////////////////////////////////////// 

    ////////////////form Song////////////////////////// 
    private zone1: number[][];
    private zone2: number[][];
    private zone3: number[][];
    private zone4: number[][];
    private zone5: number[][];
    private zone6: number[][];
    private zone7: number[][];
    private zone8: number[][];
    ////////////////////////////////////////////////// 


    public constructor() {
        this.NumMTC = 0;
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
        this.dumppi = [];
        ////////////////////////////////////////////////// 

    }

    public setDataS2(pPointsAndTimesS2: number[], pPointPositionS2: number[],
        pZonesPointsS2: number[], pZonesAreaS2: number[], pTotalAreasS2: number[]) {

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

    }


    public setDataSong(pZ1: number[][], pZ2: number[][], pZ3: number[][], pZ4: number[][],
        pZ5: number[][], pZ6: number[][], pZ7: number[][], pZ8: number[][]) {

        this.zone1 = pZ1;
        this.zone2 = pZ2;
        this.zone3 = pZ3;
        this.zone4 = pZ4;
        this.zone5 = pZ5;
        this.zone6 = pZ6;
        this.zone7 = pZ7;
        this.zone8 = pZ8;

        // console.log("///////////////////////////////////////////////////")
        // console.log("cantidad de secciones de la zona A 1" +  this.zone1.length);
        // console.log("cantidad de secciones de la zona B 2" +  this.zone2.length);
        // console.log("cantidad de secciones de la zona C 3" +  this.zone3.length);
        // console.log("cantidad de secciones de la zona D 4" +  this.zone4.length);
        // console.log("EJE X-----------------------------------------------")
        // console.log("cantidad de secciones de la zona E 5" +  this.zone5.length);
        // console.log("cantidad de secciones de la zona F 6" +  this.zone6.length);
        // console.log("cantidad de secciones de la zona G 7" +  this.zone7.length);
        // console.log("cantidad de secciones de la zona H 8" +  this.zone8.length);
        // console.log("///////////////////////////////////////////////////");

    }


    public makeMT() {
        var same: boolean;

        for (var i = 0; i < this.zonesPointsS2.length - 1; i++) {

            if (this.getZone(i) == this.getZone(i + 1)) {
                same = true;
            } else {
                same = false;
            }
            
            this.monteCarlo(this.getZone(i), this.getZone(i + 1), same, this.NumMTC);

        }

    }

    public monteCarlo(pZoneA: number[][], pZoneB: number[][], psameZone: boolean, pAterior: number) {

        var zoneA: number;
        var zoneB: number;

        var randomA: number;
        var randomB: number;

        var lenZoneOne: number = pZoneA.length - 1;
        var lenZoneTwo: number = pZoneB.length - 1;

        var lenSubZoneOne: number;
        var lenSubZoneTwo: number;

        var subRandomA: number;
        var subRandomB: number;


        for (var i = 0; i < 7000; i++) {

            if (psameZone) {

                randomA = (Math.floor(Math.random() * (lenZoneOne - 0 + 1)) + 0);// random de las secciones 
                lenSubZoneOne = ((Math.round((pZoneA[randomA].length) / 2)));// len intercalado
                subRandomA = ((Math.floor(Math.random() * (lenSubZoneOne - 1 + 1)) + 1) * 2) - 1;//aseguramos num par

                // console.log("xxxxxxxxxxxxxxxxxxxX");
                // console.log( pZoneA[randomA][subRandomA]);
                // console.log( pZoneA[randomA][subRandomA+2]);
                // console.log("///////////");
                var auxJ = 0;
                for (var j = subRandomA; j < pZoneA[randomA].length - 1; j++) {
                    //subRandomB = pZoneA[randomA][j+2];

                    auxJ = j + 2;
                    // console.log("///////////" + auxJ);
                    // console.log(pZoneA[randomA][j]);
                    // console.log(pZoneA[randomA][auxJ]);
                    // console.log("///////////");
                    // console.log("///////////  " + j);
                    if (pZoneA[randomA][j] < pZoneA[randomA][auxJ]) {
                        console.log("///////SIIIIII////  ");
                        console.log(pZoneA[randomA][j]);
                        console.log(pZoneA[randomA][auxJ]);
                        console.log("//////////////////");

                        break;

                    }
                    j++;
                }


            }
        }




    }

    //   // for (var i = 0; i < zonesSS2.length - 1; i++) {
    //   //   zoneA = clasesplit.getZone(zonesSS2[i]);
    //   //   zoneB = clasesplit.getZone(zonesSS2[i + 1]);
    //   //   if (i == i + 1) {
    //   //     sameZone = true;
    //   //   } else {
    //   //     sameZone = false;
    //   //   }

    //   //   claseMTC.monteCarlo(zoneA,zoneB,sameZone); 


    public getZone(zone: number): (number[][]) {
        switch (zone) {
            case 1: {
                return this.zone1;
            }
            case 2: {
                return this.zone2;
            }
            case 3: {
                return this.zone3;
            }
            case 4: {
                return this.zone4;
            }
            case 5: {
                return this.zone5;
            }
            case 6: {
                return this.zone6;
            }
            case 7: {
                return this.zone7;
            }
            case 8: {
                return this.zone8;
            }
        }
        return this.dumppi;
    }







}
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