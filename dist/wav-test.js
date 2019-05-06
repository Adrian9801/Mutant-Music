"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
///////////////////////////////////////////////
var fs = __importStar(require("fs"));
// import { default as ft } from 'fourier-transform';
var WavDecoder = __importStar(require("wav-decoder"));
////////////////////////////////////////////////
var split_1 = require("./split");
var monteCarlo_1 = require("./monteCarlo");
var claseMTC = new monteCarlo_1.MTC();
var audioAux;
var readFile = function (filepath) {
    return new Promise(function (resolve, reject) {
        fs.readFile(filepath, function (err, buffer) {
            if (err) {
                return reject(err);
            }
            return resolve(buffer);
        });
    });
};
readFile("./Sound/Ceratis2.wav").then(function (buffer) {
    return WavDecoder.decode(buffer);
}).then(function (audioData) {
    console.log("ampliando 30%");
    var size = 20000;
    var clasesplit = new split_1.splits(audioData);
    clasesplit.splitSong(true);
    claseMTC.setDataS2(clasesplit.getDataS2(1), clasesplit.getDataS2(2), clasesplit.getDataS2(3), clasesplit.getDataS2(4), clasesplit.getDataS2(5));
});
console.log('');
readFile("./Sound/Cerati.wav").then(function (buffer) {
    return WavDecoder.decode(buffer);
}).then(function (audioData) {
    var clasesplit = new split_1.splits(audioData);
    clasesplit.splitSong(false);
    claseMTC.setDataSong(clasesplit.getZone(1), clasesplit.getZone(2), clasesplit.getZone(3), clasesplit.getZone(4), clasesplit.getZone(5), clasesplit.getZone(6), clasesplit.getZone(7), clasesplit.getZone(8));
    claseMTC.setAudioData(audioData);
    claseMTC.makeMT();
    // for (var i = 44100 * 5; i < 44100 * 10; i++) {
    //   audioData.channelData[0][i - 44100 * 5] = audioData.channelData[0][i];
    // }
    // for (var i = 44100 * 11; i < 44100 * 16; i++) {
    //   audioData.channelData[0][i + 44100 * 6] = audioData.channelData[0][i];
    // }
    // console.log("writing...");
    // WavEncoder.encode( audioAux).then((buffer: any) => {
    //   fs.writeFileSync("C:\\Users\\USER\\Desktop\\pp.wav", new Buffer(buffer));
});
//  //////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  //-----------------------------------------------------RODRI------------------------------------------------//
//  //////////////////////////////////////////////////////////////////////////////////////////////////////////////
// for (var i = 0; i < 5; i++) {
//   console.log(audioData.channelData[0][i]);//IZQ
//   console.log(audioData.channelData[1][i]);//DER
//   console.log('*******************');
// }
// for (var i = 44100 * 5; i < 44100 * 10; i++) {
//   audioData.channelData[0][i - 44100 * 5] = audioData.channelData[0][i];
// }
// for (var i = 44100 * 11; i < 44100 * 16; i++) {
//   audioData.channelData[0][i + 44100 * 6] = audioData.channelData[0][i];
// }
//   console.log("writing...");
//   WavEncoder.encode(audioData).then((buffer: any) => {
//     fs.writeFileSync("C:\\Users\\USER\\Desktop\\newsulky.wav", new Buffer(buffer));
//   });
//# sourceMappingURL=wav-test.js.map