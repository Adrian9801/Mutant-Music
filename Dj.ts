export class Djs{
    private shapeSecond: number[][];
    private coincidenceList: number[][];

    public constructor(pAudioData: number[]){
        this.shapeSecond = this.getShape(pAudioData);
        this.coincidenceList = [];
        for(var index: number = 0; this.shapeSecond.length > 0; index++){
            this.splitSong(index);
        }
        this.coincidenceList = this.sortSolution(this.coincidenceList,0);
    }

    private splitSong(pPos: number){
        this.shapeSecond = this.sortSolution(this.shapeSecond,1);
        var split: number[][] = Object.assign([],this.shapeSecond);
        var num: number = 0;
        if(split.length > 1){
            for(var i: number = 1; i < split.length; i++){
                num = Math.abs(split[0][1] - split[i][1])+Math.abs(split[0][2] - split[i][2])+Math.abs(split[0][3] - split[i][3])
                +Math.abs(split[0][4] - split[i][4])+Math.abs(split[0][5] - split[i][5])+Math.abs(split[0][6] - split[i][6])
                +Math.abs(split[0][7] - split[i][7])+Math.abs(split[0][8] - split[i][8]);
                if((num > 4000)){
                    this.shapeSecond = this.shapeSecond.slice(i);
                    split = split.slice(0,i);
                    break;
                }
            }
        }
        else{
            this.shapeSecond = [];
        }
        var similar: number[] = [split.length];
        while(split.length > 0){
            similar.push(split[split.length-1][0]);
            split.pop();
        }
        this.coincidenceList[pPos] = similar;
    }

    private sortSolution(pSolution: number[][], pPosShape: number) : number[][] {
        return pSolution.sort((shapeA: number[], shapeB: number[]) => {
        if (shapeA[pPosShape] > shapeB[pPosShape]) {
            return -1;
        } 
        if (shapeA[pPosShape] < shapeB[pPosShape]) {
            return 1;
        } 
        return 0;
        });
    }

    private getShape(pAudioData: number[]): number[][]{
        var result:number[][] = [];
        var audioLength:number = pAudioData.length - 1;
        var num:number = 0;
        var cont: number = 0;
        result[0] = [0,0,0,0,0,0,0,0];
        for(var i:number = 0; i < audioLength; i++){
            num = (pAudioData[i+1]-pAudioData[i])*100;
            if(num >= 15){
                result[cont][1] += 1;
            }
            else if(num >= 10){
                result[cont][2] += 1;
            }
            else if(num >= 5){
                result[cont][3] += 1;
            }
            else if(num >= 1){
                result[cont][4] += 1;
            }
            else if(num > -1){
                result[cont][5] += 1;
            }
            else if(num >= -5){
                result[cont][6] += 1;
            }
            else if(num >= -10){
                result[cont][7] += 1;
            }
            else{
                result[cont][8] += 1;
            }
            result[cont][0] = cont;
            if((i+1)%44100 == 0){
                cont++;
                result[cont] = [0,0,0,0,0,0,0,0,0];
            }    
        }
        result[cont][0] = cont;
        return result;
    }

    public getDominantS(): number[]{ 
        var dominantSection: number[]= [];
        for(var index: number = 0; index < 10; index++){
            dominantSection.push(this.coincidenceList[index][1]*44100);
        }
        return dominantSection;
    }
}