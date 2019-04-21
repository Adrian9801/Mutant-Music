import * as fs from 'fs';
// import { complex as fft } from 'fft';
import * as WavEncoder from 'wav-encoder';
// import { default as ft } from 'fourier-transform';
import * as WavDecoder from 'wav-decoder';

import { splits } from "./split";
import { samples } from "./sampleS2";
import { areas } from "./area";


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


readFile("C:\\Users\\USER\\Documents\\VisualCode\\Sound\\Dua.wav").then((buffer) => {
  return WavDecoder.decode(buffer);
}).then(function (audioData) {
  console.log("ampliando 30%");
  const size = 20000;

  var ss = new samples(audioData);
  var pp = new areas();
  ss.mainComponent();
  console.log('*******************');
  console.log(ss.zonesTime);
  console.log(ss.zones[0]);
  console.log(ss.zones[1]);
  console.log(ss.zonesStr[0]);
  console.log(ss.zonesStr[1]);
 // pp.waveArea(0,ss.zonesTime,ss.zones[0],ss.zones[1]);
  console.log('El area de la muestra es ' + pp.waveArea(0,ss.zonesTime,ss.zones[0],ss.zones[1]));

  var s = new splits(audioData);
  s.splitSong();

  let zone1: number[][];
  let zone2: number[][];
  let zone3: number[][];
  let zone4: number[][];
  let zone5: number[][];
  let zone6: number[][];
  
  zone1 = s.getZone(1);
  zone2 = s.getZone(2);
  zone3 = s.getZone(3);
  zone4 = s.getZone(4);
  zone5 = s.getZone(5);
  zone6 = s.getZone(6);
  //zone2 = s.getZone(ss.zonesStr[1]);
  
  console.log("cantidad de secciones de la zona A " + zone1.length);
  console.log("cantidad de secciones de la zona B " + zone2.length);
  console.log("cantidad de secciones de la zona C " + zone3.length);
  console.log("cantidad de secciones de la zona D " + zone4.length);
  console.log("cantidad de secciones de la zona E " + zone5.length);
  console.log("cantidad de secciones de la zona F " + zone6.length);
 // console.log("cantidad de secciones de la zona 2 " + zone2.length);

  console.log("zona 1 " + zone1.length);
  //console.log("zona 2 " + zone2.length);
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
