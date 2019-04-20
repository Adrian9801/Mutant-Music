export declare class splits {
    zoneA: number[][];
    zoneB: number[][];
    zoneC: number[][];
    zoneD: number[][];
    private zoneE;
    private zoneF;
    private zoneG;
    private zoneH;
    private audioData;
    constructor(pAudioData: any);
    splitSong(): void;
    private insertZone;
    getZone(zone: number): (number[][]);
}
