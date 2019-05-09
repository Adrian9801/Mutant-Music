export declare class genetic {
    private model;
    private progenitors;
    private dataSong;
    private offspringLength;
    private offspring;
    private selectionCrosses;
    private mutationData;
    constructor();
    setModel(pModel: number[][]): void;
    setDataSong(pDataSong: number[][]): void;
    fitness(): void;
    private sortSolution;
    reproduction(): void;
    cross0ver(): void;
    mutation(): void;
}
