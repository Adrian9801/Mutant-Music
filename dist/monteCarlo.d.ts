export declare class MTC {
    Respuesta: number[][];
    zoneA: number[][];
    zoneB: number[][];
    zonesS2: number[];
    respMT: number[];
    areaS2: number;
    time: number;
    constructor();
    setMC(pZone1: number[][], pZone2: number[][], pAreaS2: number, ptime: number): void;
    setZonesS2(pZonesS2: number[]): void;
    monteCarlo(pZoneA: number[][], pZoneB: number[][], psameZone: boolean, pAterior: number[]): void;
    MC(): void;
    segMonteCarlo(segOne: number, segTwo: number, posOne: number, posTwo: number): boolean;
}
