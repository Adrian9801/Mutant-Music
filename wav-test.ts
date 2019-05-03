import * as fs from 'fs';
// import { complex as fft } from 'fft';
import * as WavEncoder from 'wav-encoder';
// import { default as ft } from 'fourier-transform';
import * as WavDecoder from 'wav-decoder';

let bigArea: number;
let area1: number;
let area2: number;
let area3: number;
let area4: number;
let areasS2: number[];


let time: number;
let bZone: number;
let fZone: number;
let zonesS2: number[];
let timesS2: number[];

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


readFile("./Sound/s2.wav").then((buffer) => {
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

  bigArea = clasesamples.areaWave;
  time = clasesamples.timeLen;
  zonesS2 = clasesamples.zonesStr;//zonas 
  areasS2 = clasesamples.areas;//areas
  timesS2 = clasesamples.timesS2;

  clasesamples.mainComponent(5);

});

console.log('');
readFile("./Sound/s7.wav").then((buffer) => {
  return WavDecoder.decode(buffer);
}).then(function (audioData) {

  ////////////////////////////////////////////////////////////////////
  var clasesplit = new splits(audioData);
  clasesplit.splitSong();


  let zone1: number[][];
  let zone2: number[][];

  let zone3: number[][];
  let zone4: number[][];
  let zone5: number[][];
  let zone6: number[][];
  let zone7: number[][];
  let zone8: number[][];


  // zone1 = clasesplit.getZone(bZone);
  // zone2 = clasesplit.getZone(fZone);
  // zone3 = clasesplit.getZone(zonesS2[1]);
  // zone4 = clasesplit.getZone(zonesS2[2]);
  // zone3 = clasesplit.getZone(zonesS2[3]);

    zone1 =  clasesplit.getZone(1);
    zone2 =  clasesplit.getZone(2);
    zone3 =  clasesplit.getZone(3);
    zone4 =  clasesplit.getZone(4);
    zone5 =  clasesplit.getZone(5);
    zone6 =  clasesplit.getZone(6);
    zone7 =  clasesplit.getZone(7);
    zone8 =  clasesplit.getZone(8);

    console.log("///////////////////////////////////////////////////")
    console.log("cantidad de secciones de la zona A 1" + zone1.length);
    console.log("cantidad de secciones de la zona B 2" + zone2.length);
    console.log("cantidad de secciones de la zona C 3" + zone3.length);
    console.log("cantidad de secciones de la zona D 4" + zone4.length);
    console.log("EJE X-----------------------------------------------")
    console.log("cantidad de secciones de la zona E 5" + zone5.length);
    console.log("cantidad de secciones de la zona F 6" + zone6.length);
    console.log("cantidad de secciones de la zona G 7" + zone7.length);
    console.log("cantidad de secciones de la zona H 8" + zone8.length);
    console.log("///////////////////////////////////////////////////")

  ////////////////////////////////////////////////////////////////////

  var claseMTC = new MTC();
  var index: number = 0;
  // claseMTC.setMC(zone1,zone2,bigArea,time);
  claseMTC.setMC(zone3, zone4, areasS2[0], timesS2[0]);
  // claseMTC.setMC(zone3,zone4,areasS2[1],timesS2[1]);
  // claseMTC.setMC(zone3,zone4,areasS2[2],timesS2[2]);
  claseMTC.Respuesta;

  //   ////////////////////////////////////////////////////////////////////

  //   // while(index <  claseMTC.Respuesta.length-1 ){}

  //   //  for (var i = claseMTC.Respuesta[0][0]; i < claseMTC.Respuesta[0][1]; i++) {
  //   //   audioData = audioData.channelData[0][i] ;
  //   // }


  //   // console.log("writing...");
  //   // WavEncoder.encode(audioData).then((buffer: any) => {
  //   //   fs.writeFileSync("C:\\Users\\USER\\Desktop\\newsulky.wav", new Buffer(buffer));
  //   // });

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


// let zone1: number[][];
//   let zone2: number[][];
//   let zone3: number[][];
//   let zone4: number[][];
//   let zone5: number[][];
//   let zone6: number[][];
//   let zone7: number[][];
//   let zone8: number[][];

//   zone1 =  clasesplit.getZone(1);
//   zone2 =  clasesplit.getZone(2);
//   zone3 =  clasesplit.getZone(3);
//   zone4 =  clasesplit.getZone(4);
//   zone5 =  clasesplit.getZone(5);
//   zone6 =  clasesplit.getZone(6);
//   zone7 =  clasesplit.getZone(7);
//   zone8 =  clasesplit.getZone(8);

//   console.log("///////////////////////////////////////////////////")
//   console.log("cantidad de secciones de la zona A 1" + zone1.length);
//   console.log("cantidad de secciones de la zona B 2" + zone2.length);
//   console.log("cantidad de secciones de la zona C 3" + zone3.length);
//   console.log("cantidad de secciones de la zona D 4" + zone4.length);
//   console.log("EJE X-----------------------------------------------")
//   console.log("cantidad de secciones de la zona E 5" + zone5.length);
//   console.log("cantidad de secciones de la zona F 6" + zone6.length);
//   console.log("cantidad de secciones de la zona G 7" + zone7.length);
//   console.log("cantidad de secciones de la zona H 8" + zone8.length);
//   console.log("///////////////////////////////////////////////////")