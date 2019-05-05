export declare class splits {
    private zoneA;
    private zoneB;
    private zoneC;
    private zoneD;
    private zoneE;
    private zoneF;
    private zoneG;
    private zoneH;
    private pointAndTimeS2;
    private positionIS2;
    private zoneS2;
    private areaWaveS2;
    private totalAreaWaveS2;
    private dumppi;
    private audioData;
    constructor(pAudioData: any);
    splitSong(dataSong: boolean): void;
    private insertZone;
    getZone(zone: number): (number[][]);
    getDataS2(zone: number): (number[]);
    loadZoneS2(): void;
    areaS2(): void;
}
