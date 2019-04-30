export declare class samples {
    zonesStr: number[];
    pointZonesStr: number[];
    zones: number[];
    zonesTime: number;
    timeLen: number;
    beginZone: number;
    finalZone: number;
    audioLength: number;
    areaWave: number;
    areas: number[];
    private audioData;
    S2: number[];
    constructor(pAudioData: any);
    dataS2(): void;
    areaS2(): void;
    allAreaS2(): void;
    setPoints(pCantPoint: number): void;
    mainComponent(pCantCod: number): void;
}
