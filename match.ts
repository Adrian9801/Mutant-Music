export class mats {

    //aaaa
    private zoneA: number[][];
    private zoneZ: number[][];
    private zoneB: number[][];
    private zoneC: number[][];

    private zoneD: number[][];
    private zoneE: number[][];
    private zoneF: number[][];

    private zoneG: number[][];
    private zoneH: number[][];

  

    private audioData: any;

    public constructor(pAudioData: any) {
        this.zoneA = [];
        this.zoneB = [];
        this.zoneC = [];
        this.zoneD = [];
        this.zoneE = [];
        this.zoneF = [];
        this.zoneG = [];
        this.zoneH = [];
        this.zoneZ = [];
        this.audioData = pAudioData;
    }

    public splitSong() {
        var pSpliteSize: number = 1;// cantidad de pisos
        var audioLength = this.audioData.channelData[0].length;// largo del audio
        var accepted: number;//

        var firstTime: boolean = true;
        var lastZone: number = 0;
        var nowZone: number = 0;

        var point: number;//temp para guardar los datos de una zona 
        var zone: number[] = [];//temp para guardar los datos de una zona 

        switch (pSpliteSize) {

            case 1: {
                for (var i = 0; i < audioLength; i++) {
                    accepted = Math.floor(Math.random() * 2);//switch de canales

                    if (accepted < 2) {

                        point = this.audioData.channelData[0][i];

                        if (!firstTime) {// sino es la primera vez

                            // asigna nuevo valor a nowZone
                            if (point >= 0.5) { nowZone = 1 }
                            else if (point >= 0) { nowZone = 2 }
                            else if (point >= -0.5) { nowZone = 3 }
                            else { nowZone = 4 }

                            if (lastZone == nowZone) {// si las zonas son iguales sigue anadiendo puntos
                                zone.push(point);
                            } 
                            else {//si las zonas cambian o sea se brinca de una zona a otra 
                                this.insertZone(lastZone, Object.assign([], zone));// guarda los datos de toda la zona pasada
                                zone = [];// refresca el temp de lazona
                                lastZone = nowZone;
                                zone.push(point);
                            }
                        } else {// solo para el primer caso
                            zone.push(point);
                            if (point >= 0.5) { lastZone = nowZone = 1 }///ZONE A
                            else if (point >= 0) { lastZone = nowZone = 2 }//ZONE B
                            else if (point >= -0.5) { lastZone = nowZone = 3 }// ZONE C
                            else { lastZone = nowZone = 4 }// ZONE D
                            firstTime = false;
                        }
                    }
                }

            }


            case 2: {
                for (var i = 0; i < audioLength; i++) {
                    accepted = Math.floor(Math.random() * 2);//switch de canales

                    if (accepted < 2) {

                        point = this.audioData.channelData[0][i];

                        if (!firstTime) {// sino es la primera vez

                            // asigna nuevo valor a nowZone
                            if (point >= 0.6) { nowZone = 1}
                            else if (point >= 0.3) { nowZone = 2 }
                            else if (point >= 0) { nowZone = 3 }
                            else if (point >= -0.3) { nowZone = 4 }
                            else if (point >= -0.6) { nowZone = 5 }
                            else { nowZone = 6 }

                            if (lastZone == nowZone) {// si las zonas son iguales sigue anadiendo puntos
                                zone.push(point);
                            } 
                            else {//si las zonas cambian o sea se brinca de una zona a otra 
                                this.insertZone(lastZone, Object.assign([], zone));// guarda los datos de toda la zona pasada
                                zone = [];// refresca el temp de lazona
                                lastZone = nowZone;
                                zone.push(point);
                            }
                        } else {// solo para el primer caso
                            zone.push(point);
                            if (point >= 0.6) {lastZone = nowZone = 1}
                            else if (point >= 0.3) { lastZone = nowZone = 2 }
                            else if (point >= 0) { lastZone = nowZone = 3 }
                            else if (point >= -0.3) { lastZone = nowZone = 4 }
                            else if (point >= -0.6) { lastZone = nowZone = 5 }
                            else {lastZone = nowZone = 6}
                            firstTime = false;
                        }
                    }
                }

            }
        }
    }

    private insertZone(pZoneNumber: number, pZone: number[]) {
        switch (pZoneNumber) {
            case 1: {
                this.zoneA.push(pZone);
                break;
            }
            case 2: {
                this.zoneB.push(pZone);
                break;
            }
            case 3: {
                this.zoneC.push(pZone);
                break;
            }
            case 4:{
                this.zoneD.push(pZone);
                break;
            }
            case 5:{
                this.zoneE.push(pZone);
                break;
            }
            case 6:{
                this.zoneF.push(pZone);
                break;
            }
            
        }
    }
}