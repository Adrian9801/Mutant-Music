export class Mix{
    private dominantSection: number[][];

    public constructor(pDominantSectionL: number[][], pDominantSectionR: number[][]){
        this.dominantSection = this.s(pDominantSectionL,pDominantSectionR);
    }

    private createMix(pDominantSectionL: number[][], pDominantSectionR: number[][]): number[][]{
        var result: number[][] = [];
        var length: number = pDominantSectionL.length;
        var pos: number = 0;
        for(var i: number = 0; i < length;){
            pos = Math.floor(Math.random() *(length));
            if(pDominantSectionL[pos].length > 0){
                result.push(Object.assign([], pDominantSectionL[pos]));
                pDominantSectionL[pos] = [];
                i++;
            }
        }
        return result;
    }
}