import { areas } from "./area";
export class samples {

    public zonesStr: number[];// zonas ordenadas de codificacio
    public pointZonesStr: number[];// puntos ordenadas de codificacio
    public zones: number[];//largo de la codificacion 
    public zonesTime: number;

    public timeLen: number;
    public beginZone: number;
    public finalZone: number;

    public areaWave: number;
    private audioData: any;
    public S2: number[];


    public constructor(pAudioData: any) {
        this.zonesTime = 0;
        this.beginZone = 0;
        this.finalZone = 0;
        this.zones = [];
        this.S2 = [];
        this.zonesStr = [];
        this.pointZonesStr = [];
        this.audioData = pAudioData;
        this.areaWave = 0;// largo del audio
        this.timeLen = 0;
    }


    public dataS2() {
        var audioLength = this.audioData.channelData[0].length - 1;// largo del audio
        var s2Temp: number[] = [];//temp para guardar los datos de una zona 
        var point: number;//temp para guardar los datos de una zona 
        var points: number;//temp para guardar los datos de una zona 
        var nowZone: number;//temp para guardar los datos de una zona 
        points = 0;
        point = this.audioData.channelData[0][0];

        s2Temp.push(point);//punto
        s2Temp.push(0);//tiempo

        s2Temp.push(this.audioData.channelData[0][audioLength]);//punto
        s2Temp.push(Math.round(audioLength / 44100));//tiempo

        // console.log((Math.round(audioLength/44100)));//tiempo total de duracion 

        while (points !== 2) {

            if (point >= 0.75) { nowZone = 1 }
            else if (point >= 0.5) { nowZone = 2 }
            else if (point >= 0.25) { nowZone = 3 }
            else if (point >= 0) { nowZone = 4 }
            //-----------------------------------------------------------------LINEA CATESIANA X
            else if (point >= -0.25) { nowZone = 5 }
            else if (point >= -0.5) { nowZone = 6 }
            else if (point >= -0.75) { nowZone = 7 }
            else { nowZone = 8 }
            s2Temp.push(nowZone);//punto
            console.log(point);
            point = this.audioData.channelData[0][audioLength];
            points++;
        }

        this.S2 = s2Temp;
    }

    public areaS2() {
       
        var clasesarea = new areas();//area de S2 segun datos
        this.beginZone = this.S2[4];//inicio
        this.finalZone = this.S2[5];//final
        this.timeLen = this.S2[3];//tiempo
        this.areaWave =  clasesarea.waveArea(this.S2[1], this.S2[3], this.S2[0], this.S2[2]);
       

    }

    //     public setPoints(pCantPoint:number){
    //         var point:number;
    //         var auxPointIterator:number

    //         point = this.audioData.channelData[0][0];// primer punto guardado
    //         this.pointZonesStr.push(0);// se guarda los puntos para la razon de crecimiento
    //         this.zones.push(point);

    //         for(var i = pCantPoint-1 ; i !== 0 ; i--) {
    //             auxPointIterator =Math.round(((this.audioLength-1) / i));
    //             point = this.audioData.channelData[0][auxPointIterator];
    //             this.pointZonesStr.push(auxPointIterator);// se guarda los puntos para la razon de crecimiento
    //             console.log(auxPointIterator+ "//");
    //             this.zones.push(point);
    //         }
    //     }

    //     // codifica la muestra en "pCantCod" fragmentos 
    //     public mainComponent(pCantCod:number) {

    //         this.setPoints(pCantCod);
    //         var nowZone: number;
    //         var point: number;//temp para guardar los datos de una zona  
    //         this.zonesTime = this.audioLength-1;

    //         for (var i = 0; i <= this.zones.length-1 ; i++) {
    //             point = this.zones[i];

    //            // console.log('///////////////////////'+ point);
    //             if (point >= 0.75) { nowZone = 1 }
    //             else if (point >= 0.5) { nowZone = 2 }
    //             else if (point >= 0.25) { nowZone = 3 }
    //             else if (point >= 0) { nowZone = 4 }
    //             //-----------------------------------------------------------------LINEA CATESIANA X
    //             else if (point >= -0.25) { nowZone = 5 }
    //             else if (point >= -0.5) { nowZone = 6 }
    //             else if (point >= -0.75) { nowZone = 7 }
    //             else { nowZone = 8 }
    //             console.log(nowZone);
    //             this.zonesStr.push(nowZone);
    //         }
    //     }
    
}