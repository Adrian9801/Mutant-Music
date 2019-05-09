export declare class genetic {
    private model;
    private lastprogenitors;
    private newPopulation;
    private dataSong;
    private offspringLength;
    private offspring;
    private selectionCrosses;
    private mutationData;
    constructor();
    setModel(pModel: number[][]): void;
    setDataSong(pDataSong: number[][]): void;
    getPopulation(): number[][];
    fitness(): void;
    private sortSolution;
    reproduction(pFathe: number[], pMother: number[], pPopulation: number): void;
    selectionPopulation(): boolean;
    mutation(pKid: number[]): number[];
}
