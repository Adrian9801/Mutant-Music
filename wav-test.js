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
var split_1 = require("./split");
var Dj_1 = require("./Dj");
var p = [];
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
readFile("C:\\Users\\adri-\\OneDrive\\Escritorio\\Boku.wav").then(function (buffer) {
    return WavDecoder.decode(buffer);
}).then(function (audioData) {
    console.log("ampliando 30%");
    var size = 20000;
    //var s = new mats(audioData);
    //s.splitSong();
    var m = new Dj_1.Djs(audioData.channelData[0]);
    console.log("listo");
    var c = new split_1.splits(audioData);
    //c.splitSong(false);
    //c.pr();
    // for(var i=0; i<audioData.channelData[0].length; i++) {
    //   audioData.channelData[1][i]+=audioData.channelData[0][i];
    //   audioData.channelData[0][i]*=20;
    //   audioData.channelData[0][i]+=0.000000259254;
    // }
    var audioDatap;
    var pte = 230500;
    for (var i = 0; i < 44100 * 2; i++) {
        //audioDatap.channelData[0][0] = 0;
        audioData.channelData[0][i] = audioData.channelData[0][pte + i];
    }
    for (var i = 0; i < 44100 * 2; i++) {
        audioData.channelData[1][i] = audioData.channelData[1][pte + i];
    }
    for (var i = 44100 * 2; i < 44100 * 8; i++) {
        audioData.channelData[0][i] = 0;
    }
    for (var i = 44100 * 2; i < 44100 * 8; i++) {
        audioData.channelData[1][i] = 0;
    }
    console.log("writing...");
    WavEncoder.encode(audioData).then(function (buffer) {
        fs.writeFileSync("C:\\Users\\adri-\\OneDrive\\Escritorio\\Mutant Music Algoritmos\\Mutant-Music\\sssi.wav", new Buffer(buffer));
    });
});
