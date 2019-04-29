export declare class samples {
    zonesStr: number[];
    pointZonesStr: number[];
    zones: number[];
    zonesTime: number;
    timeLen: number;
    beginZone: number;
    finalZone: number;
    areaWave: number;
    private audioData;
    S2: number[];
    constructor(pAudioData: any);
    dataS2(): void;
    areaS2(): void;
}
