import * as fs from 'fs';
// import { complex as fft } from 'fft';
import * as WavEncoder from 'wav-encoder';
// import { default as ft } from 'fourier-transform';
import * as WavDecoder from 'wav-decoder';

import { Djs } from "./Dj";

import { Mix } from "./Mix";


const readFile = (filepath: string) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filepath, (err, buffer) => {
      if (err) {
        return reject(err);
      }
      return resolve(buffer);
    });
  });
};

readFile("C:\\Users\\adri-\\OneDrive\\Escritorio\\SW.wav").then((buffer) => {
  return WavDecoder.decode(buffer);
}).then(function(audioData) {

  var dj = new Djs(audioData.channelData[0], true);
  var djs = new Djs(audioData.channelData[1], false);
  djs.getShape(audioData.channelData[1].slice(44100,88200));
  console.log(dj.getShape2());

  var mix = new Mix(dj.getDominantS(), audioData.channelData);

  var audioMix: number[][]= mix.getDominantSection();
 
  audioData.channelData[0] = new Float32Array(audioMix[0]);
  
  audioData.channelData[1] = new Float32Array(audioMix[1]);
  

  console.log("writing...");
  WavEncoder.encode(audioData).then((buffer: any) => {
    fs.writeFileSync("C:\\Users\\adri-\\OneDrive\\Escritorio\\Mutant Music Algoritmos\\Mutant-Music\\Mix.wav", new Buffer(buffer));
  });

});