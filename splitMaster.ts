import { areas } from "./area";
var claseArea = new areas();

export class splitMaster {

    private peak: number[];
    private peakArea: number[];

    public constructor() {
        this.peak = [];
        this.peakArea = [];
    }

    public splitPeak(pSide: number, pAudioData: any, pI: number, pLastI: number): number {

        var musicalFootprint: number = 0;
        var lastSeg: number = -1
        var nowseg: number = 1
        var point: number;//temp para guardar los datos de una zona 
        var down: boolean = true;
        var grow: number = 1;
        var auxPoint: number = 0;
        var auxData: number = 0;


        for (var i = pI; i < pLastI; i++) {

            point = pAudioData.channelData[pSide][i];//punto 
            nowseg = Math.round(i / 22050);//aca

            if (point > 0.3) {//aca 

                if ((point >= pAudioData.channelData[pSide][i + 1]) && down) {
                    if (auxPoint < point) {
                        auxPoint = point;
                    }


                    else if ((nowseg != lastSeg)) {// toma de 4 a 3 muestras por seg 
                        auxData = auxData + auxPoint;
                        lastSeg = nowseg;
                        this.peak.push(auxPoint);//punto
                        this.peak.push(Math.round(i / 44100));//tiempo
                        down = false;
                        i++;
                        grow++;
                        auxPoint = 0;
                    }
                }
                else if (pAudioData.channelData[pSide][i] < pAudioData.channelData[pSide][i + 1]) {
                    down = true;
                }
            }
        }
        for (var i = 0; i < this.peak.length - 1; i++) {
            musicalFootprint = musicalFootprint + claseArea.waveTiangle(0, 0, 0, this.peak[i] * 10, this.peak[i], this.peak[i + 1]);
            this.peakArea.push(musicalFootprint);
            i++;
        }
        this.peak = [];
        this.peakArea = [];
        return musicalFootprint;
    }

}