export declare class splits {
    private zoneA;
    zoneB: number[][];
    zoneC: number[][];
    zoneD: number[][];
    zoneE: number[][];
    zoneF: number[][];
    zoneG: number[][];
    zoneH: number[][];
    pointAndTimeS2: number[];
    positionIS2: number[];
    zoneS2: number[];
    areaWaveS2: number[];
    totalAreaWaveS2: number;
    dumppi: number[][];
    private audioData;
    constructor(pAudioData: any);
    splitSong(dataSong: boolean): void;
    private insertZone;
    getZone(zone: number): (number[][]);
    loadZoneS2(): void;
    areaS2(): void;
}
