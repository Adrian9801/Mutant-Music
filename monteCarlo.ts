//int valorEntero = Math.floor(Math.random()*(N-M+1)+M);// Valor entre M y N, ambos incluidos.
//Math.floor(Math.random() * 6) + 1  
// Math.floor(Math.random() * (max - min + 1)) + min;

import { areas } from "./area";

export class MTC {


    public Respuesta: number[][];
    public zoneA: number[][];
    public zoneB: number[][];
    public respMT: number[];
    public areaS2: number;
    public time: number;

    public constructor() {
        this.zoneA = [];
        this.zoneB = [];
        this.Respuesta = [];
        this.respMT = [];
        this.areaS2 = 0;
        this.time = 0;
    }

    public setMC(pZone1: number[][], pZone2: number[][], pAreaS2: number, ptime: number) {
        this.zoneA = pZone1;
        this.zoneB = pZone2;
        this.areaS2 = pAreaS2;
        this.time = ptime;
        this.MC();
    }

    public monteCarlo(pZoneA: number[][], pZoneB: number[][], psameZone: boolean) {

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



    public MC() {
        var lenZoneOne: number;
        var lenZoneTwo: number;

        var lenSubZoneOne: number;
        var lenSubZoneTwo: number;

        var randomA: number;
        var randomB: number;
        var subRandomA: number;
        var subRandomB: number;


        lenZoneOne = this.zoneA.length - 1;
        lenZoneTwo = this.zoneB.length - 1;


        for (var i = 0; i < 80000; i++) {
            // random de entre los conjuntos de la zona 1 y 2//
            randomA = (Math.floor(Math.random() * (lenZoneOne - 0 + 1)) + 0);
            randomB = (Math.floor(Math.random() * (lenZoneTwo - 0 + 1)) + 0);

            //-------------------------------------------------//

            // random de los elementos de los conjuntos seleccionados de la zona 1 y 2//
            lenSubZoneOne = (Math.round(((this.zoneA[randomA].length - 2) / 2)));
            lenSubZoneTwo = (Math.round(((this.zoneB[randomB].length - 2) / 2)));



            subRandomA = (Math.floor(Math.random() * (lenSubZoneOne - 0 + 1)) + 0) * 2;//aseguramos num par
            subRandomB = (Math.floor(Math.random() * (lenSubZoneTwo - 0 + 1)) + 0) * 2;//aseguramos num par
            //-------------------------------------------------//


            if (((this.zoneB[randomB].length > 1) && (this.zoneA[randomA].length > 1))// que no sea un par ya seleccionado
                &&
                this.segMonteCarlo(this.zoneA[randomA][subRandomA + 1], this.zoneB[randomB][subRandomB + 1]//que cumpla los n segundos requeridos
                    , this.zoneA[randomA][subRandomA], this.zoneB[randomB][subRandomB])

            ) {
                this.respMT.push(this.zoneA[randomA][subRandomA + 1]);
                this.respMT.push(this.zoneB[randomB][subRandomB + 1]);
                this.Respuesta.push(this.respMT);
                this.respMT = [];
                this.zoneB[randomB] = [];
                this.zoneA[randomA] = [];
            }

        }
        console.log(this.Respuesta.length);
        console.log(this.Respuesta[0]);
    }

    public segMonteCarlo(segOne: number, segTwo: number, posOne: number, posTwo: number): boolean {
        var clasesarea = new areas();//area de S2 segun datos
        var area: number;
        if (segTwo - segOne == this.time) {
            area = clasesarea.waveArea(segOne, segTwo, posOne, posTwo)
            if (((this.areaS2 / 100) * 70 <= area) && (area <= this.areaS2)) {
                // console.log(this.areaS2  + " area original");
                // console.log(clasesarea.waveArea(segOne, segTwo, posOne, posTwo)  + " area de muestra");
                // console.log("//////////////////////////////" );
                return true;
            } else {
                return false;
            }


        } else {
            return false;
        }

    }



    // console.log("//////////////////////////////");
    // console.log(this.zoneA[randomA][subRandomA]);
    // console.log(this.zoneA[randomA][subRandomA + 1]);
    // console.log("-------------------------------");
    // //-------------------------//
    // console.log(this.zoneB[randomB][subRandomB]);
    // console.log(this.zoneB[randomB][subRandomB + 1]);
    // console.log("//////////////////////////////");




}