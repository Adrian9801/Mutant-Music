export declare class genetic {
    private model;
    private lastprogenitors;
    private newPopulation;
    private newSong;
    private audioS2;
    private dataSong;
    constructor();
    setModel(pModel: number[][]): void;
    setDataSong(pDataSong: number[][]): void;
    getPopulation(): number[][];
    fitness(): void;
    private sortSolution;
    reproduction(pFathe: number[], pMother: number[], pPopulation: number): void;
    selectionPopulation(): boolean;
    mutation(pKid: number[]): number[];
    private getZonePoint;
    setAudioS2(pAudioS2: number[][]): void;
    generateSong(): void;
    getNewSong(): number[][];
}
