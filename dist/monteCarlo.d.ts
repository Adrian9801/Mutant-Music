export declare class MTC {
    private NumMTC;
    private dumppi;
    private lastSeconS2;
    private pointsAndTimesS2;
    private pointPositionS2;
    private zonesPointsS2;
    private zonesAreaS2;
    private totalAreasS2;
    private zonesAreaSong;
    private zone1;
    private zone2;
    private zone3;
    private zone4;
    private zone5;
    private zone6;
    private zone7;
    private zone8;
    private audioData;
    constructor();
    setAudioData(pAudioData: any): void;
    setDataS2(pPointsAndTimesS2: number[], pPointPositionS2: number[], pZonesPointsS2: number[], pZonesAreaS2: number[], pTotalAreasS2: number[]): void;
    setDataSong(pZ1: number[][], pZ2: number[][], pZ3: number[][], pZ4: number[][], pZ5: number[][], pZ6: number[][], pZ7: number[][], pZ8: number[][]): void;
    makeMT(): void;
    MC(pZoneA: number[][], pZoneB: number[][]): void;
    getZone(zone: number): (number[][]);
}
