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
var split_1 = require("./split");
var sampleS2_1 = require("./sampleS2");
var area_1 = require("./area");
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
readFile("C:\\Users\\USER\\Documents\\VisualCode\\Sound\\Dua.wav").then(function (buffer) {
    return WavDecoder.decode(buffer);
}).then(function (audioData) {
    console.log("ampliando 30%");
    var size = 20000;
    var ss = new sampleS2_1.samples(audioData);
    var pp = new area_1.areas();
    ss.mainComponent();
    console.log('*******************');
    console.log(ss.zonesTime);
    console.log(ss.zones[0]);
    console.log(ss.zones[1]);
    console.log(ss.zonesStr[0]);
    console.log(ss.zonesStr[1]);
    // pp.waveArea(0,ss.zonesTime,ss.zones[0],ss.zones[1]);
    console.log('El area de la muestra es ' + pp.waveArea(0, ss.zonesTime, ss.zones[0], ss.zones[1]));
    var s = new split_1.splits(audioData);
    s.splitSong();
    var zone1;
    var zone2;
    zone1 = s.getZone(ss.zonesStr[0]);
    zone2 = s.getZone(ss.zonesStr[1]);
    console.log("cantidad de secciones de la zona 1 " + zone1.length);
    console.log("cantidad de secciones de la zona 2 " + zone2.length);
    console.log("zona 1 " + zone1.length);
    // console.log("zona 2 " + zone2[1].length);
    // for (var i = 0; i < 5; i++) {
    //   console.log(audioData.channelData[0][i]);//IZQ
    //   console.log(audioData.channelData[1][i]);//DER
    //   console.log('*******************');
    // }
    for (var i = 44100 * 5; i < 44100 * 10; i++) {
        audioData.channelData[0][i - 44100 * 5] = audioData.channelData[0][i];
    }
    for (var i = 44100 * 11; i < 44100 * 16; i++) {
        audioData.channelData[0][i + 44100 * 6] = audioData.channelData[0][i];
    }
    //   console.log("writing...");
    //   WavEncoder.encode(audioData).then((buffer: any) => {
    //     fs.writeFileSync("C:\\Users\\USER\\Desktop\\newsulky.wav", new Buffer(buffer));
    //   });
});
//# sourceMappingURL=wav-test.js.map