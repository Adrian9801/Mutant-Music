export declare class MTC {
    Respuesta: number[][];
    zoneA: number[][];
    zoneB: number[][];
    respMT: number[];
    areaS2: number;
    time: number;
    constructor();
    setMC(pZone1: number[][], pZone2: number[][], pAreaS2: number, ptime: number): void;
    MC(): void;
    segMonteCarlo(segOne: number, segTwo: number, posOne: number, posTwo: number): boolean;
}
