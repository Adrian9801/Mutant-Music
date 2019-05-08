export declare class Mix {
    private dominantSection;
    private silence;
    constructor(pDominantSection: number[], pAudio: number[][]);
    private createMix;
    private createSilence;
    private addPart;
    getDominantSection(): number[][];
}
