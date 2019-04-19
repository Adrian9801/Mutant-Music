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
// import { complex as fft } from 'fft';
var WavEncoder = __importStar(require("wav-encoder"));
// import { default as ft } from 'fourier-transform';
var WavDecoder = __importStar(require("wav-decoder"));
var sampleS2_1 = require("./sampleS2");
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
readFile("C:\\Users\\USER\\Documents\\VisualCode\\Wav\\ssi.wav").then(function (buffer) {
    return WavDecoder.decode(buffer);
}).then(function (audioData) {
    console.log("ampliando 30%");
    var size = 20000;
    var ss = new sampleS2_1.s2(audioData);
    ss.mainComponent();
    console.log('*******************');
    console.log(ss.zones[0]);
    console.log(ss.zones[1]);
    console.log('*******************');
    console.log(ss.zonesStr[0]);
    console.log(ss.zonesStr[1]);
    // var s = new mats(audioData);
    // s.splitSong();
    console.log("listo");
    for (var i = 0; i < 5; i++) {
        console.log(audioData.channelData[0][i]);
        console.log(audioData.channelData[1][i]);
        console.log('*******************');
    }
    for (var i = 44100 * 5; i < 44100 * 10; i++) {
        audioData.channelData[0][i - 44100 * 5] = audioData.channelData[0][i];
    }
    for (var i = 44100 * 11; i < 44100 * 16; i++) {
        audioData.channelData[0][i + 44100 * 6] = audioData.channelData[0][i];
    }
    console.log("writing...");
    WavEncoder.encode(audioData).then(function (buffer) {
        fs.writeFileSync("C:\\Users\\USER\\Desktop\\newsulky.wav", new Buffer(buffer));
    });
});
//# sourceMappingURL=wav-test.js.map