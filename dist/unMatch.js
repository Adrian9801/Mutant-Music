"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var unmatchs = /** @class */ (function () {
    function unmatchs() {
        this.audioData = 0;
        this.chanelOne = [];
        this.chanelTwo = [];
    }
    unmatchs.prototype.setAudio = function (pAudioData) {
        this.audioData = pAudioData;
    };
    unmatchs.prototype.MakeUnMacht = function (pChanel) {
        var audioLength = this.audioData.channelData[pChanel].length - 1; // largo del audio
        var point; //temp para guardar los datos de una zona 
        console.log(audioLength);
        // for (var i = 0; i < audioLength; i++) {
        //     point = this.audioData.channelData[pChanel][i];//punto 
        //     if(point!==-7){
        //         if (pChanel == 0) {
        //             this.chanelOne.push(point);
        //         } else {
        //             this.chanelTwo.push(point);
        //         }
        //     }
        // }
    };
    unmatchs.prototype.GetMatchUnOne = function () {
        return this.chanelOne;
    };
    unmatchs.prototype.GetMatchUnTwo = function () {
        return this.chanelTwo;
    };
    return unmatchs;
}());
exports.unmatchs = unmatchs;
//# sourceMappingURL=unMatch.js.map