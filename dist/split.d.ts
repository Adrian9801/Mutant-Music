export declare class splits {
    private pointAndTimeS2;
    private positionIS2;
    private zoneS2;
    private areaWaveS2;
    private totalAreaWaveS2;
    private totalAreaOrg;
    private zoneA;
    private zoneB;
    private zoneC;
    private zoneD;
    private zoneE;
    private zoneF;
    private zoneG;
    private zoneH;
    private dumppi;
    private audioData;
    constructor(pAudioData: any);
    splitSong(dataSong: boolean, pChanel: number): void;
    loadZoneS2(pChanel: number): void;
    areaS2(): void;
    private insertZone;
    getZone(zone: number): (number[][]);
    getDataS2(zone: number): (number[]);
}
