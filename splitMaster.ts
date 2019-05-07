import { areas } from "./area";
var claseArea = new areas();

export class splitMaster {


    private audioData: any;

    private peak: number[];
    private peakArea: number[];
    public constructor() {

        this.peak = [];
        this.peakArea = [];
    }



    // 0 IZQ
    public splitPeak(pSide: number, pAudioData: any, pI: number, pLastI: number): number {

        var musicalFootprint: number = 0;
        var lastSeg:number=-1
        var nowseg:number=1
        var point: number;//temp para guardar los datos de una zona 
        var down: boolean = true;
        var grow: number = 1;
        var auxPoint: number = 0;

        var auxData: number = 0;

        for (var i = pI; i < pLastI; i++) {

            point = pAudioData.channelData[pSide][i];//punto 
            nowseg = Math.round(i / 44100);

             if (point > 0.5) {

                 if ((point >= pAudioData.channelData[pSide][i + 1]) && down) {
                    if (auxPoint < point) {
                        auxPoint = point;
                    }

                    /// else if (i >= ((pLastI - pI)/ 90) * grow) {
                    else if (i >= ((pLastI - pI)/ 8) * grow
                             && (nowseg != lastSeg)) {
                                auxData = auxData + auxPoint;
                        
                        // console.log(Math.round(i / 44100));.
                        lastSeg = Math.round(i / 44100);
                        this.peak.push(auxPoint);//punto
                        this.peak.push(Math.round(i / 44100));//tiempo
                        down = false;
                        i++;
                        grow++;
                        //auxPoint=0;
                    }

                }
                else if (pAudioData.channelData[pSide][i] < pAudioData.channelData[pSide][i + 1]) {
                    down = true;
                }
            }
        }
        for (var i = 0; i < this.peak.length - 1; i++) {

            musicalFootprint = musicalFootprint + claseArea.waveTiangle(0, 0, 0, this.peak[i]*10, this.peak[i], this.peak[i + 1]);
            this.peakArea.push(musicalFootprint);
            i++;
        }

       
        // console.log(this.peak);
        // console.log(this.peakArea.length);
        //console.log(musicalFootprint + "area total");
        console.log("AAAAAAAAAAAAAAAAAAAAA");
        console.log(auxData);
        console.log("AAAAAAAAAAAAAAAAAAAAA");
        this.peak=[];
        this.peakArea=[];
        return musicalFootprint;
    }



}