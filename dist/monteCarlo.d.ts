export declare class MTC {
    Respuesta: number[][];
    zoneA: number[][];
    zoneB: number[][];
    respMT: number[];
    areaS2: number;
    constructor();
    setMC(zone1: number[][], zone2: number[][], areaS2: number): void;
    MC(): void;
    segMonteCarlo(segOne: number, segTwo: number, posOne: number, posTwo: number): boolean;
}
