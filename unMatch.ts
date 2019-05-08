export class unmatchs {
    private audioData: any;
    private chanelOne: number[];
    private chanelTwo: number[];


    public constructor() {
        this.audioData ;
        this.chanelOne = [];
        this.chanelTwo = [];
    }
    public setAudio(pAudioData: any){
        this.audioData = pAudioData;
    }



    public MakeUnMacht(pChanel:number){
        var audioLength = this.audioData.channelData[pChanel].length - 1;// largo del audio
        var point: number;//temp para guardar los datos de una zona 

        for (var i = 0; i < audioLength; i++) {
            point = this.audioData.channelData[pChanel][i];//punto 
            if(point!==-7){
                if (pChanel == 0) {
                    this.chanelOne.push(point);
                } else {
                    this.chanelTwo.push(point);
                }
            }
           
        }

    }

    public GetMatchUnOne() {
        return this.chanelOne;
    }
    public GetMatchUnTwo() {
        return this.chanelTwo;
    }
}