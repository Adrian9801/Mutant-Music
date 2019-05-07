export class Mix{
    private dominantSection: number[][];
    private silence: number[];

    public constructor(pDominantSection: number[], pAudio: number[][]){
        this.silence = this.createSilence();
        this.dominantSection = this.createMix(pDominantSection, pAudio);

    }

    private createMix(pDominantSection: number[], pAudio: number[][]): number[][]{
        var result: number[][] = [[],[]];
        var sectionTime: number[] = [];
        var length: number = pDominantSection.length;
        var pos: number = 0;
        for(var indice: number = 0; indice < 11; indice++){
            for(var index:number = 0; index < 3; index++){
                pos = Math.floor(Math.random() *(length));
                sectionTime[index] = pDominantSection[pos];
            }
            result = this.addPart(sectionTime,indice,pAudio, result);
        }
        return result;
    }

    private createSilence(): number[]{
        var silence: number[] = [];
        var silenceC: number[] = []
        silence.push(0);
        for(var index: number = 0; index < 22; index++){
            if(index < 12){
                silence = silence.concat(silence);
                if(index == 0 || index == 2 || index == 3 || index == 4 || index == 7 || index == 11){
                    silenceC = silenceC.concat(silence);
                }
            }
            else{
                if(index == 12){
                    silence = [];
                }
                silence = silence.concat(silenceC);
            }
        }
        return silence;
    }
    
    private addPart(pTime: number[], pPosAudio: number, pAudio: number[][], pResult: number[][]): number[][]{
        switch(pPosAudio){
            case 2 || 5 || 7:{
                pResult[0] = pResult[0].concat(Array.prototype.slice.call(pAudio[0].slice(pTime[0], 44100 + pTime[0])));
                pResult[1] = pResult[1].concat(this.silence);
                pResult[0] = pResult[0].concat(this.silence);
                pResult[1] = pResult[1].concat(Array.prototype.slice.call(pAudio[1].slice(pTime[1], 44100+pTime[1])));
                pResult[0] = pResult[0].concat(Array.prototype.slice.call(pAudio[0].slice(pTime[2], 44100*2+pTime[2])));
                pResult[1] = pResult[1].concat(Array.prototype.slice.call(pAudio[1].slice(pTime[2], 44100*2+pTime[2])));
                break;
            }
            case 3 || 4 || 8 || 9:{
                var duration = (Math.floor(Math.random() *(3)) +4);
                for(var index: number = 0; index < duration; index++){
                    pResult[0] = pResult[0].concat(Array.prototype.slice.call(pAudio[0].slice(pTime[0], 44100+pTime[0])));
                    pResult[1] = pResult[1].concat(Array.prototype.slice.call(pAudio[1].slice(pTime[0], 44100+pTime[0])));
                }
                break;
            }
            default:{
                var duration = (Math.floor(Math.random() *(3)) +3);
                for(var index: number = 0; index < duration; index++){
                    pResult[0] = pResult[0].concat(this.silence);
                    pResult[1] = pResult[1].concat(this.silence);
                    pResult[0] = pResult[0].concat(Array.prototype.slice.call(pAudio[0].slice(pTime[index%3], 44100+pTime[index%3])));
                    pResult[1] = pResult[1].concat(Array.prototype.slice.call(pAudio[1].slice(pTime[index%3], 44100+pTime[index%3])));
                }
                break;
            }
        }
        return pResult;
    }

    public getDominantSection(): number[][]{
        return this.dominantSection;
    }
}