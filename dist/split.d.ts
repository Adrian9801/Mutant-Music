export declare class splits {
    zoneA: number[][];
    zoneB: number[][];
    zoneC: number[][];
    zoneD: number[][];
    zoneE: number[][];
    zoneF: number[][];
    zoneG: number[][];
    zoneH: number[][];
    dumppi: number[][];
    private audioData;
    constructor(pAudioData: any);
    splitSong(): void;
    private insertZone;
    getZone(zone: number): (number[][]);
}
