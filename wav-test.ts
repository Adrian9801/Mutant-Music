import * as fs from 'fs';
// import { complex as fft } from 'fft';
import * as WavEncoder from 'wav-encoder';
// import { default as ft } from 'fourier-transform';
import * as WavDecoder from 'wav-decoder';


import { s2 } from "./sampleS2";


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


readFile("C:\\Users\\USER\\Documents\\VisualCode\\Wav\\ssi.wav").then((buffer) => {
  return WavDecoder.decode(buffer);
}).then(function (audioData) {
  console.log("ampliando 30%");
  const size = 20000;

  // var ss = new s2(audioData);
  // ss.mainComponent();
  // console.log('*******************');
  // console.log(ss.zones[0]);
  // console.log(ss.zones[1]);
  // console.log('*******************');
  // console.log(ss.zonesStr[0]);
  // console.log(ss.zonesStr[1]);



  console.log("listo");

  for (var i = 0; i < 5; i++) {
    console.log(audioData.channelData[0][i]);//IZQ
    console.log(audioData.channelData[1][i]);//DER
    console.log('*******************');
  }

  for (var i = 44100 * 5; i < 44100 * 10; i++) {
    audioData.channelData[0][i - 44100 * 5] = audioData.channelData[0][i];
  }

  for (var i = 44100 * 11; i < 44100 * 16; i++) {
    audioData.channelData[0][i + 44100 * 6] = audioData.channelData[0][i];
  }

  console.log("writing...");
  WavEncoder.encode(audioData).then((buffer: any) => {
    fs.writeFileSync("C:\\Users\\USER\\Desktop\\newsulky.wav", new Buffer(buffer));
  });



});
