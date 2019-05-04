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
var bigArea;
var area1;
var area2;
var area3;
var area4;
var areasS2;
var puntosytiempos;
var posiciondepuntos;
var zonesSamplaes; // zonas de los puntos
var zonesSS2; // areadecdzonas
var totalArea; //areatotaldelaszoanas
var time;
var bZone;
var fZone;
var zonesS2;
var timesS2;
var split_1 = require("./split");
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
readFile("./Sound/s2.wav").then(function (buffer) {
    return WavDecoder.decode(buffer);
}).then(function (audioData) {
    console.log("ampliando 30%");
    var size = 20000;
    var clasesplit = new split_1.splits(audioData);
    clasesplit.splitSong(true);
    puntosytiempos = clasesplit.pointAndTimeS2;
    posiciondepuntos = clasesplit.positionIS2;
    zonesSamplaes = clasesplit.zoneS2;
    zonesSamplaes = clasesplit.zoneS2;
    zonesSS2 = clasesplit.areaWaveS2;
    totalArea = clasesplit.totalAreaWaveS2;
});
// console.log('');
// readFile("./Sound/Dua.wav").then((buffer) => {
//   return WavDecoder.decode(buffer);
// }).then(function (audioData) {
//   var claseMTC = new MTC();
//   ////////////////////////////////////////////////////////////////////
//   var zoneA: number[][];
//   var zoneB: number[][];
//   var firs: number[] = [];
//   var sameZone: boolean;
//   claseMTC.setZonesS2( zonesSamplaes );
//   var clasesplit = new splits(audioData);
//   clasesplit.splitSong(false);
//   zoneA = clasesplit.getZone(5);
//   zoneB = clasesplit.getZone(5);
//   // for (var i = 0; i < zonesSS2.length - 1; i++) {
//   //   zoneA = clasesplit.getZone(zonesSS2[i]);
//   //   zoneB = clasesplit.getZone(zonesSS2[i + 1]);
//   //   if (i == i + 1) {
//   //     sameZone = true;
//   //   } else {
//   //     sameZone = false;
//   //   }
//   //   claseMTC.monteCarlo(zoneA,zoneB,sameZone); 
//   //   i++;
//   // }
//   // let zone1: number[][];
//   // let zone2: number[][];
//   // let zone3: number[][];
//   // let zone4: number[][];
//   // let zone5: number[][];
//   // let zone6: number[][];
//   // let zone7: number[][];
//   // let zone8: number[][];
//   // zone1 = clasesplit.getZone(1);
//   // zone2 = clasesplit.getZone(2);
//   // zone3 = clasesplit.getZone(3);
//   // zone4 = clasesplit.getZone(4);
//   // zone5 = clasesplit.getZone(5);
//   // zone6 = clasesplit.getZone(6);
//   // zone7 = clasesplit.getZone(7);
//   // zone8 = clasesplit.getZone(8);
//   // console.log("///////////////////////////////////////////////////")
//   // console.log("cantidad de secciones de la zona A 1" + zone1.length);
//   // console.log("cantidad de secciones de la zona B 2" + zone2.length);
//   // console.log("cantidad de secciones de la zona C 3" + zone3.length);
//   // console.log("cantidad de secciones de la zona D 4" + zone4.length);
//   // console.log("EJE X-----------------------------------------------")
//   // console.log("cantidad de secciones de la zona E 5" + zone5.length);
//   // console.log("cantidad de secciones de la zona F 6" + zone6.length);
//   // console.log("cantidad de secciones de la zona G 7" + zone7.length);
//   // console.log("cantidad de secciones de la zona H 8" + zone8.length);
//   // console.log("///////////////////////////////////////////////////");
//   ////////////////////////////////////////////////////////////////////
//   //var claseMTC = new MTC();
//   //var index: number = 0;
//   // claseMTC.setMC(zone1,zone2,bigArea,time);
//   ///claseMTC.setMC(zone3, zone4, areasS2[0], timesS2[0]);
//   // claseMTC.setMC(zone3,zone4,areasS2[1],timesS2[1]);
//   // claseMTC.setMC(zone3,zone4,areasS2[2],timesS2[2]);
//   //claseMTC.Respuesta;
//   //   ////////////////////////////////////////////////////////////////////
//   //   // while(index <  claseMTC.Respuesta.length-1 ){}
//   //   //  for (var i = claseMTC.Respuesta[0][0]; i < claseMTC.Respuesta[0][1]; i++) {
//   //   //   audioData = audioData.channelData[0][i] ;
//   //   // }
//   //   // console.log("writing...");
//   //   // WavEncoder.encode(audioData).then((buffer: any) => {
//   //   //   fs.writeFileSync("C:\\Users\\USER\\Desktop\\newsulky.wav", new Buffer(buffer));
//   //   // });
// });
//  //////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  //-----------------------------------------------------RODRI------------------------------------------------//
//  //////////////////////////////////////////////////////////////////////////////////////////////////////////////
//   // for (var i = 0; i < 5; i++) {
//   //   console.log(audioData.channelData[0][i]);//IZQ
//   //   console.log(audioData.channelData[1][i]);//DER
//   //   console.log('*******************');
//   // }
//   // for (var i = 44100 * 5; i < 44100 * 10; i++) {
//   //   audioData.channelData[0][i - 44100 * 5] = audioData.channelData[0][i];
//   // }
//   // for (var i = 44100 * 11; i < 44100 * 16; i++) {
//   //   audioData.channelData[0][i + 44100 * 6] = audioData.channelData[0][i];
//   // }
// //   console.log("writing...");
// //   WavEncoder.encode(audioData).then((buffer: any) => {
// //     fs.writeFileSync("C:\\Users\\USER\\Desktop\\newsulky.wav", new Buffer(buffer));
// //   });
// // let zone1: number[][];
// //   let zone2: number[][];
// //   let zone3: number[][];
// //   let zone4: number[][];
// //   let zone5: number[][];
// //   let zone6: number[][];
// //   let zone7: number[][];
// //   let zone8: number[][];
// //   zone1 =  clasesplit.getZone(1);
// //   zone2 =  clasesplit.getZone(2);
// //   zone3 =  clasesplit.getZone(3);
// //   zone4 =  clasesplit.getZone(4);
// //   zone5 =  clasesplit.getZone(5);
// //   zone6 =  clasesplit.getZone(6);
// //   zone7 =  clasesplit.getZone(7);
// //   zone8 =  clasesplit.getZone(8);
// //   console.log("///////////////////////////////////////////////////")
// //   console.log("cantidad de secciones de la zona A 1" + zone1.length);
// //   console.log("cantidad de secciones de la zona B 2" + zone2.length);
// //   console.log("cantidad de secciones de la zona C 3" + zone3.length);
// //   console.log("cantidad de secciones de la zona D 4" + zone4.length);
// //   console.log("EJE X-----------------------------------------------")
// //   console.log("cantidad de secciones de la zona E 5" + zone5.length);
// //   console.log("cantidad de secciones de la zona F 6" + zone6.length);
// //   console.log("cantidad de secciones de la zona G 7" + zone7.length);
// //   console.log("cantidad de secciones de la zona H 8" + zone8.length);
// //   console.log("///////////////////////////////////////////////////")
//# sourceMappingURL=wav-test.js.map