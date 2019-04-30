import * as fs from 'fs';
// import { complex as fft } from 'fft';
import * as WavEncoder from 'wav-encoder';
// import { default as ft } from 'fourier-transform';
import * as WavDecoder from 'wav-decoder';
let area:number;
let time:number;
let bZone:number;
let fZone:number;

import { splits } from "./split";
import { samples } from "./sampleS2";

import { MTC } from "./monteCarlo";


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

//C:\Users\USER\Documents\VisualCode\Mutant-Music\Sound readFile("C:\\Users\\USER\\Documents\\VisualCode\\Mutant-Music\\Sound\\s2.wav").then((buffer) => {
readFile("./Sound/s22.wav").then((buffer) => {
  return WavDecoder.decode(buffer);
}).then(function (audioData) {
  console.log("ampliando 30%");
  const size = 20000;
  
  console.log('');
  var clasesamples = new samples(audioData);
  clasesamples.dataS2();//lee los datos de S2
  clasesamples.areaS2();//calcula el area y el tiempo de s2
  bZone = clasesamples.beginZone;
  fZone = clasesamples.finalZone;
  area =  clasesamples.areaWave;
  time = clasesamples.timeLen;
  
});

  console.log('');
  readFile("./Sound/Dua.wav").then((buffer) => {
    return WavDecoder.decode(buffer);
  }).then(function (audioData) {

  ////////////////////////////////////////////////////////////////////
  var clasesplit = new splits(audioData);
  clasesplit.splitSong();

  let zone1: number[][];
  let zone2: number[][];
  
  zone1 =  clasesplit.getZone(bZone);
  zone2 =  clasesplit.getZone(fZone);
  
  ////////////////////////////////////////////////////////////////////
  
  var claseMTC = new MTC();
  var index :number =0;
  claseMTC.setMC(zone1,zone2,area,time);
  claseMTC.Respuesta;

 // while(index <  claseMTC.Respuesta.length-1 ){}

  //  for (var i = claseMTC.Respuesta[0][0]; i < claseMTC.Respuesta[0][1]; i++) {
  //   audioData = audioData.channelData[0][i] ;
  // }


  // console.log("writing...");
  // WavEncoder.encode(audioData).then((buffer: any) => {
  //   fs.writeFileSync("C:\\Users\\USER\\Desktop\\newsulky.wav", new Buffer(buffer));
  // });

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


