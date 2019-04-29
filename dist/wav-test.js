"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = __importStar(require("fs"));
// import { default as ft } from 'fourier-transform';
var WavDecoder = __importStar(require("wav-decoder"));
var area;
var bZone;
var fZone;
var split_1 = require("./split");
var sampleS2_1 = require("./sampleS2");
var monteCarlo_1 = require("./monteCarlo");
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
//C:\Users\USER\Documents\VisualCode\Mutant-Music\Sound readFile("C:\\Users\\USER\\Documents\\VisualCode\\Mutant-Music\\Sound\\s2.wav").then((buffer) => {
readFile("./Sound/s2.wav").then(function (buffer) {
    return WavDecoder.decode(buffer);
}).then(function (audioData) {
    console.log("ampliando 30%");
    var size = 20000;
    console.log('');
    var clasesamples = new sampleS2_1.samples(audioData);
    clasesamples.dataS2(); //lee los datos de S2
    clasesamples.areaS2(); //calcula el area y el tiempo de s2
    bZone = clasesamples.beginZone;
    fZone = clasesamples.finalZone;
    area = clasesamples.areaWave;
});
console.log('');
readFile("./Sound/Dua.wav").then(function (buffer) {
    return WavDecoder.decode(buffer);
}).then(function (audioData) {
    ////////////////////////////////////////////////////////////////////
    var clasesplit = new split_1.splits(audioData);
    clasesplit.splitSong();
    var zone1;
    var zone2;
    zone1 = clasesplit.getZone(bZone);
    zone2 = clasesplit.getZone(fZone);
    ////////////////////////////////////////////////////////////////////
    var claseMTC = new monteCarlo_1.MTC();
    claseMTC.setMC(zone1, zone2, area);
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//-----------------------------------------------------RODRI------------------------------------------------//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
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