//int valorEntero = Math.floor(Math.random()*(N-M+1)+M);// Valor entre M y N, ambos incluidos.
//Math.floor(Math.random() * 6) + 1  
// Math.floor(Math.random() * (max - min + 1)) + min;

import { areas } from "./area";
var claseArea = new areas();

export class MTC {



    private NumMTC: number
    private NumPrmSector:number
    private NumPrmArea: number
    private dumppi: number[][];
    private reptit: number[];
    private lastSeconS2: number;
    private auxPZoneA: number[][];
    private auxPZoneB: number[][];
    ////////////////form S2////////////////////////// 
    private pointsAndTimesS2: number[];
    private pointPositionS2: number[];
    private zonesPointsS2: number[];
    private zonesAreaS2: number[];
    private totalAreasS2: number[];
    ////////////////////////////////////////////////// 

    ////////////////form Song////////////////////////// 
    private zonesAreaSong: number[];
    private zone1: number[][];
    private zone2: number[][];
    private zone3: number[][];
    private zone4: number[][];
    private zone5: number[][];
    private zone6: number[][];
    private zone7: number[][];
    private zone8: number[][];
    ////////////////////////////////////////////////// 

    private audioData: any;


    public constructor() {
        this.NumMTC = 0;
        this.audioData = 0;
        this.reptit = [];
        this.NumPrmArea=0;
        this.NumPrmSector=0;
        ////////////////form S2////////////////////////// 
        this.pointsAndTimesS2 = [];
        this.pointPositionS2 = [];
        this.zonesPointsS2 = [];
        this.zonesAreaS2 = [];
        this.totalAreasS2 = [];
        this.lastSeconS2 = 0;
        ////////////////////////////////////////////////// 
        ////////////////form Song////////////////////////// 
        this.auxPZoneA = [];
        this.auxPZoneB = [];
        this.zonesAreaSong = [];
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

    public setAudioData(pAudioData: any) {
        this.audioData = pAudioData;
    }

    public setDataS2(pPointsAndTimesS2: number[], pPointPositionS2: number[],
        pZonesPointsS2: number[], pZonesAreaS2: number[], pTotalAreasS2: number[]) {

        this.pointsAndTimesS2 = pPointsAndTimesS2;
        this.pointPositionS2 = pPointPositionS2;
        this.zonesPointsS2 = pZonesPointsS2;
        this.zonesAreaS2 = pZonesAreaS2;
        this.totalAreasS2 = pTotalAreasS2;
        this.lastSeconS2 = this.pointsAndTimesS2[this.pointsAndTimesS2.length - 1];

        // console.log(this.pointsAndTimesS2);//puntos y tiempos 
        // console.log(this.pointPositionS2);//posiciones de los puntos
        // console.log(this.zonesPointsS2);// zonas de cada punto
        //  console.log(this.zonesAreaS2);// areas de cada zona
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

        this.MC(this.getZone(this.zonesPointsS2[0]), this.getZone(this.zonesPointsS2[this.zonesPointsS2.length - 1]));

    }


    public MC(pZoneA: number[][], pZoneB: number[][]) {

        this.auxPZoneA = pZoneA;
        this.auxPZoneB = pZoneB;

        var lenZoneOne: number;
        var lenZoneTwo: number;

        var lenSubZoneOne: number;
        var lenSubZoneTwo: number;

        var randomA: number;
        var randomB: number;
        var subRandomA: number;
        var subRandomB: number;

        var areaSong: number;
        var resp: number[][];
        var postA: number;
        var auxArea: number = 0;

        resp = [];
        lenZoneOne = this.auxPZoneA.length - 1;
        lenZoneTwo = this.auxPZoneB.length - 1;


        for (var i = 0; i < 3000; i++) {

            // random de entre los conjuntos de la zona 1 y 2//
            randomA = (Math.floor(Math.random() * (lenZoneOne - 0 + 1)) + 0);
            randomB = (Math.floor(Math.random() * (lenZoneTwo - 0 + 1)) + 0);

            //randon dentro del conjunto seleccionado//
            lenSubZoneOne = ((Math.round((this.auxPZoneA[randomA].length) / 2)));
            lenSubZoneTwo = ((Math.round((this.auxPZoneB[randomB].length) / 2)));

            subRandomA = ((Math.floor(Math.random() * (lenSubZoneOne - 1 + 1)) + 1) * 2) - 1;//aseguramos num par
            subRandomB = ((Math.floor(Math.random() * (lenSubZoneTwo - 1 + 1)) + 1) * 2) - 1;//aseguramos num par
            //-----------------------------------------------------------------------------------------------------//




            if ((!(this.isRepit((this.auxPZoneA[randomA][subRandomA])))) &&// que el segundo(tiempo) no sea repetido
                (this.auxPZoneB[randomB][subRandomB]) - (this.auxPZoneA[randomA][subRandomA])
                == this.lastSeconS2 //que cumpla los n segundos requeridos
            ) {

                areaSong = claseArea.waveArea(this.auxPZoneA[randomA][subRandomA],
                    this.auxPZoneB[randomB][subRandomB], this.auxPZoneA[randomA][subRandomA - 1], this.auxPZoneB[randomB][subRandomB - 1]);//calculo del area total

                if ( Math.round((this.totalAreasS2[0] / 100) * 70) <= areaSong) {//si el area total cumple con 70% 

                    postA = this.auxPZoneA[randomA][subRandomA];// posicion en la  cancion 

                    

                    for (var i = 1; i <= this.zonesAreaS2.length; i++) { // analisis de las sub areas

                        //tiempo de inicio , tiempo final , punto de inicio punto final, caluclo de cada sub area
                        auxArea = claseArea.waveArea(this.auxPZoneA[randomA][subRandomA] + i - 1//segundo
                            , this.auxPZoneA[randomA][subRandomA] + i,//segundo
                            this.audioData.channelData[0][postA + ((44100) * (i))],//punto
                            this.audioData.channelData[0][postA + ((44100) * (i + 1))]);//punto
                            
                            this.NumPrmArea = this.NumPrmArea + auxArea;
                            this.NumPrmSector=this.NumPrmSector+this.gps( this.audioData.channelData[0][postA + ((44100) * (i))]);;

                        // if ((this.auxPZoneA[randomA][subRandomA]) == 180) {//36
                        //     this.NumPrm = this.NumPrm + auxArea;//this.NumPrm +this.gps( this.audioData.channelData[0][postA + ((44100) * (i))]);
                        //      // console.log(auxArea + "area");
                        // //     // console.log( "//////////////////// "+ i +" //////////////////////////");   
                        // //     // console.log("//////////////////////////////////////////////////////////////");   
                        // //     // console.log(this.gps(this.audioData.channelData[0][postA + ((44100) * (i))])+" la calculada");
                        // //     // console.log(this.zonesPointsS2[i - 1]+" la que debe ser");
                        // //     // console.log(this.gps(this.audioData.channelData[0][postA + ((44100) * (i + 1))])+" la calculada");
                        // //     // console.log(this.zonesPointsS2[i]+" la que debe ser");
                        // //     // console.log("//////////////////////////////////////////////////////////////");
                        // }

                        // console.log( "//////////////////// "+ i +" //////////////////////////");   
                        // console.log("//////////////////////////////////////////////////////////////");   
                        // console.log(this.gps(this.audioData.channelData[0][postA + ((44100) * (i))])+" la calculada");
                        // console.log(this.zonesPointsS2[i - 1]+" la que debe ser");
                        // console.log(this.gps(this.audioData.channelData[0][postA + ((44100) * (i + 1))])+" la calculada");
                        // console.log(this.zonesPointsS2[i]+" la que debe ser");
                        // console.log("//////////////////////////////////////////////////////////////");   


                        if (// Math.round((this.zonesAreaS2[i - 1] / 100) * 90) <= auxArea &&
                            (this.gps(this.audioData.channelData[0][postA + ((44100) * (i))]) == this.zonesPointsS2[i - 1])//cumplen con el adn
                            ||
                            (this.gps(this.audioData.channelData[0][postA + ((44100) * (i + 1))]) == this.zonesPointsS2[i])//cumplen con el adn
                        ) {
                            //console.log(this.gps(this.audioData.channelData[0][postA + ((44100) * (i))]));
                            this.zonesAreaSong.push(auxArea);
                        } else {
                            this.zonesAreaSong = [];
                            break;
                        }
                       
                    }//for de cada sub area 
                   // console.log((this.NumPrm));
                    


                    if (this.zonesAreaSong.length == this.zonesAreaS2.length //&&
                       // this.NumPrmArea>=  Math.round((this.totalAreasS2[0]/100)*80)
                         //&& this.NumPrmSector+2 >= Math.round((32/100)*80) 
                        ) {
                        // pZoneA[randomA][subRandomA] = -1;
                        // pZoneB[randomB][subRandomB] = -1
                        console.log("///////////////////////////");
                        console.log((this.totalAreasS2[0] / 100) * 70 + "70%");
                        console.log((this.totalAreasS2[0]) + "org")
                        console.log(this.lastSeconS2);
                        console.log(this.auxPZoneA[randomA][subRandomA]);
                        console.log(this.auxPZoneB[randomB][subRandomB]);
                        console.log(this.auxPZoneA[randomA][subRandomA] * 44100);
                        console.log(this.auxPZoneB[randomB][subRandomB] * 44100);
                        console.log("///////////////////////////");
                        resp.push(this.zonesAreaSong);
                        // console.log(this.auxPZoneA[randomA][subRandomA] + " rep");
                        this.reptit.push(this.auxPZoneA[randomA][subRandomA]);
                        this.zonesAreaSong = [];
                    }
                    if(this.NumPrmArea!==0){
                        this.NumPrmArea=0;
                    }
                    if(this.NumPrmSector!==0){
                      this.NumPrmSector=0;
                    }
                   
                }

            }
        }
        //console.log((this.zonesAreaS2));
       

    }

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

    public gps(point: number): number {
        var nowZone: number;
        if (point >= 0.75) { nowZone = 1 }
        else if (point >= 0.5) { nowZone = 2 }
        else if (point >= 0.25) { nowZone = 3 }
        else if (point >= 0) { nowZone = 4 }
        //-----------------------------------------------------------------LINEA CATESIANA X
        else if (point >= -0.25) { nowZone = 5 }
        else if (point >= -0.5) { nowZone = 6 }
        else if (point >= -0.75) { nowZone = 7 }
        else { nowZone = 8 }
        return nowZone;
    }

    public isRepit(point: number): boolean {
        var datarepit: boolean = false;
        if (this.isRepit.length == 0) {
            return datarepit;
        } else {
            for (var i = 0; i <= this.isRepit.length - 1; i++) {
                if (this.reptit[i] == point) {
                    datarepit = true;
                    break;
                } else {
                    datarepit = false;
                }
            }
            return datarepit;

        }
    }

}

// if (this.zonesAreaSong.length == this.zonesAreaS2.length) {
//     // pZoneA[randomA][subRandomA] = -1;
//     // pZoneB[randomB][subRandomB] = -1;
//     console.log("///////////////////////////");
//     console.log((this.totalAreasS2[0] / 100) * 70 + "70%");
//     console.log((this.totalAreasS2[0]) + "org")
//     console.log(this.lastSeconS2);
//     console.log(pZoneA[randomA][subRandomA]);
//     console.log(pZoneB[randomB][subRandomB]);
//     console.log(pZoneA[randomA][subRandomA] * 44100);
//     console.log(pZoneB[randomB][subRandomB] * 44100);
//     console.log("///////////////////////////");
//     resp.push(this.zonesAreaSong);
//     pZoneA[randomA][subRandomA] = -1;
//     pZoneB[randomB][subRandomB] = -1;
//     this.zonesAreaSong = [];

// }

// console.log( "//////////////////// "+ i +" //////////////////////////");   
                        // console.log("//////////////////////////////////////////////////////////////");   
                        // console.log(this.gps(this.audioData.channelData[0][postA + ((44100) * (i))])+" la calculada");
                        // console.log(this.zonesPointsS2[i - 1]+" la que debe ser");
                        // console.log(this.gps(this.audioData.channelData[0][postA + ((44100) * (i + 1))])+" la calculada");
                        // console.log(this.zonesPointsS2[i]+" la que debe ser");
                        // console.log("//////////////////////////////////////////////////////////////");   





// public monteCarlo(pZoneA: number[][], pZoneB: number[][], psameZone: boolean, pAterior: number) {

//     var zoneA: number;
//     var zoneB: number;

//     var randomA: number;
//     var randomB: number;

//     var lenZoneOne: number = pZoneA.length - 1;
//     var lenZoneTwo: number = pZoneB.length - 1;

//     var lenSubZoneOne: number;
//     var lenSubZoneTwo: number;

//     var subRandomA: number;
//     var subRandomB: number;


//     for (var i = 0; i < 7000; i++) {

//         if (psameZone) {

//             randomA = (Math.floor(Math.random() * (lenZoneOne - 0 + 1)) + 0);// random de las secciones 
//             lenSubZoneOne = ((Math.round((pZoneA[randomA].length) / 2)));// len intercalado
//             subRandomA = ((Math.floor(Math.random() * (lenSubZoneOne - 1 + 1)) + 1) * 2) - 1;//aseguramos num par

//             // console.log("xxxxxxxxxxxxxxxxxxxX");
//             // console.log( pZoneA[randomA][subRandomA]);
//             // console.log( pZoneA[randomA][subRandomA+2]);
//             // console.log("///////////");
//             var auxJ = 0;
//             for (var j = subRandomA; j < pZoneA[randomA].length - 1; j++) {
//                 //subRandomB = pZoneA[randomA][j+2];

//                 auxJ = j + 2;
//                 // console.log("///////////" + auxJ);
//                 // console.log(pZoneA[randomA][j]);
//                 // console.log(pZoneA[randomA][auxJ]);
//                 // console.log("///////////");
//                 // console.log("///////////  " + j);
//                 if (pZoneA[randomA][j] < pZoneA[randomA][auxJ]) {
//                     console.log("///////SIIIIII////  ");
//                     console.log(pZoneA[randomA][j]);
//                     console.log(pZoneA[randomA][auxJ]);
//                     console.log("//////////////////");

//                     break;

//                 }
//                 j++;
//             }


//         }
//     }


//   // for (var i = 0; i < zonesSS2.length - 1; i++) {
    //   //   zoneA = clasesplit.getZone(zonesSS2[i]);
    //   //   zoneB = clasesplit.getZone(zonesSS2[i + 1]);
    //   //   if (i == i + 1) {
    //   //     sameZone = true;
    //   //   } else {
    //   //     sameZone = false;
    //   //   }

    //   //   claseMTC.monteCarlo(zoneA,zoneB,sameZone); 



    // break;
                    // console.log( claseArea.waveArea(pZoneA[randomA][subRandomA]
                    //                                 ,pZoneA[randomA][subRandomA]+1,
                    //                                 this.audioData.channelData[0][postA+(44100)], 
                    //                                 this.audioData.channelData[0][postA+((44100)*2)]));


                    //  var areaA = claseArea.waveArea(pZoneA[randomA][subRandomA]
                    //     ,pZoneA[randomA][subRandomA]+1,
                    //     this.audioData.channelData[0][postA], 
                    //     this.audioData.channelData[0][postA*(44100)]);                               

                    //  console.log( (this.zonesAreaS2));
                    //  console.log( ( this.zonesAreaSong));


                    // console.log(areaSong)