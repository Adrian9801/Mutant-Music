export class s2 {

    public zonesStr: string[];
    public zones: number[];
   // public zonesTime: number[];

    private BeginZone: string;
    private FinalZone: string;

    private BeginPoint: number;
    private FinalPoint: number;

    private audioData: any;

    public constructor(pAudioData: any) {
       // this.zonesTime = [];
        this.zones = [];
        this.zonesStr = [];
        this.BeginPoint = 0;
        this.FinalPoint = 0;
        this.BeginZone = "";
        this.FinalZone = "";
        this.audioData = pAudioData;
    }

    public mainComponent() {

        var audioLength = this.audioData.channelData[0].length;// largo del audio
        var nowZone: string = "";

        var point: number;//temp para guardar los datos de una zona 
        var zone: number[] = [];//temp para guardar los datos de una zona 
        var zonesStr: string[] = [];//temp para guardar los datos de una zona 

        this.BeginPoint = this.audioData.channelData[0][0];
        this.FinalPoint = this.audioData.channelData[0][audioLength-1];
        this.zones.push(this.BeginPoint);
        this.zones.push(this.FinalPoint);
        // this.zonesTime[0] = 0;
        // this.zonesTime[0] = audioLength-1;


       
        for (var i = 0; i <= this.zones.length-1 ; i++) {
            point = this.zones[i];
            console.log('///////////////////////'+ point);
            if (point >= 0.5) { nowZone = "A" }
            else if (point >= 0) { nowZone = "B" }
            else if (point >= -0.5) { nowZone = "C" }
            else { nowZone = "D" }
            this.zonesStr.push(nowZone);
        }


        // console.log('*******************');
        // console.log(zone[0]);
        // console.log(zone[1]);
        // console.log('*******************');
        // console.log(zonesStr[0]);
        // console.log(zonesStr[1]);
    }



}