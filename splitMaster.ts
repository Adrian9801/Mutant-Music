import { areas } from "./area";
var claseArea = new areas();

export class splitMaster {


    private audioData: any;

    private peak: number[];
    public constructor() {
      
        this.peak = [];
    }

  

    // 0 IZQ
    public splitPeak( pSide: number,pAudioData: any ,pI:number,pLastI:number):number {
        this.audioData = pAudioData;
        var musicalFootprint:number = 0;
        var audioLength = this.audioData.channelData[0].length - 1;// largo del audio
        var point: number;//temp para guardar los datos de una zona 
        var zone: number[] = [];//temp para guardar los datos de una zona 
        var down: boolean = true;
        var btime: number = 0;//tiempo
        var bn: number = 1;//n para calculo de tiempo
        var grow: number = 1;
        var auxPoint:number=-3;

        for (var i = pI; i < pLastI; i++) {

            point = this.audioData.channelData[pSide][i];//punto 

            if (point > -0 ) {

                if ( point > this.audioData.channelData[pSide][i + 1] && down) {
                    if(auxPoint < point){
                        auxPoint = point;
                    }
                   
                    else if( i >= (audioLength/8)*grow ){
                        //console.log(point);
                        this.peak.push(auxPoint);//punto
                        this.peak.push(i / 44100);//tiempo
                        down = false;
                        grow++;
                    }
                   
                } else if (this.audioData.channelData[pSide][i] < this.audioData.channelData[pSide][i + 1]) {
                    down = true;
                }
            }
        }
        for (var i = 0; i < this.peak.length-2; i++) {
            musicalFootprint = musicalFootprint + claseArea.waveTiangle( 0, 0, 0,this.peak[i] , this.peak[i],this.peak[i+1]);

        }
        console.log( musicalFootprint);
        return  musicalFootprint;
    }
   


}