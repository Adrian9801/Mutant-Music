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
        this.time =0;
    }

    public setMC(pZone1: number[][], pZone2: number[][], pAreaS2: number,ptime:number) {
        this.zoneA = pZone1;
        this.zoneB = pZone2;
        this.areaS2 = pAreaS2;
        this.time = ptime;
        this.MC();
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


        for (var i = 0; i < 70000; i++) {
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


            if (((this.zoneB[randomB].length >0 ) && (this.zoneA[randomA].length > 0))// que no sea un par ya seleccionado
                &&
                this.segMonteCarlo(this.zoneA[randomA][subRandomA + 1], this.zoneB[randomB][subRandomB + 1]//que cumpla los n segundos requeridos
                    , this.zoneA[randomA][subRandomA], this.zoneB[randomB][subRandomB])

            ) {
                this.respMT.push(this.zoneA[randomA][subRandomA + 1]);
                this.respMT.push(this.zoneB[randomB][subRandomB + 1]);
                this.Respuesta.push(this.respMT);
                this.respMT = [];
                this.zoneB[randomB] = [];
                this.zoneA[randomA]  = [];
            }

        }
        console.log(this.Respuesta.length);
    }

    public segMonteCarlo(segOne: number, segTwo: number, posOne: number, posTwo: number): boolean {
        var clasesarea = new areas();//area de S2 segun datos
       
        if (segTwo - segOne ==  this.time ) {
            var area = clasesarea.waveArea(segOne, segTwo, posOne, posTwo)
            if( (443 <= area) && (area <= this.areaS2) ){
                console.log(this.areaS2);
                console.log(clasesarea.waveArea(segOne, segTwo, posOne, posTwo)  + " area");
                // console.log(posOne + "   " + posTwo);
                // console.log(segOne + "   " + segTwo);
                console.log("//////////////////////////////" );
                return true;
            }else{
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