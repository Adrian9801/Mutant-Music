export class samples {

    public zonesStr: number[];// zonas ordenadas de codificacio
    public pointZonesStr: number[];// puntos ordenadas de codificacio
    public zones: number[];//largo de la codificacion 
    public zonesTime: number;

    private audioLength:number;
    private audioData: any;
   

    public constructor(pAudioData: any) {
        this.zonesTime =0;
        this.zones = [];
        this.zonesStr = [];
        this.pointZonesStr=[];
        this.audioData = pAudioData;
        this.audioLength = this.audioData.channelData[0].length;// largo del audio
    }

    public setPoints(pCantPoint:number){
        var point:number;
        var auxPointIterator:number

        point = this.audioData.channelData[0][0];// primer punto guardado
        this.pointZonesStr.push(0);// se guarda los puntos para la razon de crecimiento
        this.zones.push(point);
       
        for(var i = pCantPoint-1 ; i !== 0 ; i--) {
            auxPointIterator =Math.round(((this.audioLength-1) / i));
            point = this.audioData.channelData[0][auxPointIterator];
            this.pointZonesStr.push(auxPointIterator);// se guarda los puntos para la razon de crecimiento
            console.log(auxPointIterator+ "//");
            this.zones.push(point);
        }
    }

    // codifica la muestra en "pCantCod" fragmentos 
    public mainComponent(pCantCod:number) {

        this.setPoints(pCantCod);
        var nowZone: number;
        var point: number;//temp para guardar los datos de una zona  
        this.zonesTime = this.audioLength-1;

        for (var i = 0; i <= this.zones.length-1 ; i++) {
            point = this.zones[i];
            
           // console.log('///////////////////////'+ point);
            if (point >= 0.75) { nowZone = 1 }
            else if (point >= 0.5) { nowZone = 2 }
            else if (point >= 0.25) { nowZone = 3 }
            else if (point >= 0) { nowZone = 4 }
            //-----------------------------------------------------------------LINEA CATESIANA X
            else if (point >= -0.25) { nowZone = 5 }
            else if (point >= -0.5) { nowZone = 6 }
            else if (point >= -0.75) { nowZone = 7 }
            else { nowZone = 8 }
            console.log(nowZone);
            this.zonesStr.push(nowZone);
        }
    }
}