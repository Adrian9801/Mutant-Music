///////////////////////////////////////////////
import * as fs from 'fs';
// import { complex as fft } from 'fft';
import * as WavEncoder from 'wav-encoder';
// import { default as ft } from 'fourier-transform';
import * as WavDecoder from 'wav-decoder';
////////////////////////////////////////////////
import { splits } from "./split";
import { MTC } from "./monteCarlo";
import { splitMaster } from "./splitMaster";
import { unmatchs } from "./unMatch";
import { Djs } from "./Dj";
import { Mix } from "./Mix";

var claseMTCOne = new MTC();
var claseMTCTwo = new MTC();
var masterAreaOne: number;
var masterAreaTwo: number;
var claseUnMatch = new unmatchs();

var unMatchOne;
var unMatchTwo;
var audioDataUnMatch: any;

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

//for s2
readFile("./Sound/s22.wav").then((buffer) => {
  return WavDecoder.decode(buffer);
}).then(function (audioData) {



  // splitMaster a one
  var clasSplitMasterOne = new splitMaster(); //canal estudiado,audioa estudiar,inicio,final
  masterAreaOne = clasSplitMasterOne.splitPeak(0, audioData, 0, audioData.channelData[0].length - 1);

  // splitMaster a two
  var clasSplitMasterTwo = new splitMaster();//canal estudiado,audioa estudiar,inicio,final
  masterAreaTwo = clasSplitMasterTwo.splitPeak(1, audioData, 0, audioData.channelData[1].length - 1);

  //split a one
  var clasesplitOne = new splits(audioData);
  clasesplitOne.splitSong(true, 0);

  //split a two
  var clasesplitTwo = new splits(audioData);
  clasesplitTwo.splitSong(true, 1);

  //MTC a one
  claseMTCOne.setDataS2(clasesplitOne.getDataS2(1), clasesplitOne.getDataS2(2),
    clasesplitOne.getDataS2(3), clasesplitOne.getDataS2(4),
    clasesplitOne.getDataS2(5), clasesplitOne.getDataS2(6));

  //MTC a Two
  claseMTCTwo.setDataS2(clasesplitTwo.getDataS2(1), clasesplitTwo.getDataS2(2),
    clasesplitTwo.getDataS2(3), clasesplitTwo.getDataS2(4),
    clasesplitTwo.getDataS2(5), clasesplitTwo.getDataS2(6));


});


// for MTC ,matc and get data un match dj
console.log('');
readFile("./Sound/Dua.wav").then((buffer) => {
  return WavDecoder.decode(buffer);
}).then(function (audioData) {

 //------------------- for DJ----------------------------//
  var dj = new Djs(audioData.channelData[0]);
  var mix = new Mix(dj.getDominantS(), audioData.channelData);
  var audioMix: number[][]= mix.getDominantSection();
 
  //------------------------------------------------------//
  audioDataUnMatch = audioData;

  //------------------- for son in  One----------------------------//

  var clasesplitOneSong = new splits(audioData);
  //split song one 
  clasesplitOneSong.splitSong(false, 0);

  //set data mtc one
  claseMTCOne.setDataSong(clasesplitOneSong.getZone(1), clasesplitOneSong.getZone(2),
    clasesplitOneSong.getZone(3), clasesplitOneSong.getZone(4),
    clasesplitOneSong.getZone(5), clasesplitOneSong.getZone(6),
    clasesplitOneSong.getZone(7), clasesplitOneSong.getZone(8));
  claseMTCOne.setAudioData(audioData);
  // make match insong for one 
  claseMTCOne.makeMT(masterAreaOne, 0);
  console.log(claseMTCOne.GetMatchOne().length + " este de aca");
  //----------------------------------------------------------------//


  //------------------- for son in  Two----------------------------//

  var clasesplitTwoSong = new splits(audioData);
  //split song one 
  clasesplitTwoSong.splitSong(false, 1);

  //set data mtc one
  claseMTCTwo.setDataSong(clasesplitTwoSong.getZone(1), clasesplitTwoSong.getZone(2),
    clasesplitTwoSong.getZone(3), clasesplitTwoSong.getZone(4),
    clasesplitTwoSong.getZone(5), clasesplitTwoSong.getZone(6),
    clasesplitTwoSong.getZone(7), clasesplitTwoSong.getZone(8));
  claseMTCTwo.setAudioData(audioData);
  // make match insong for one 
  claseMTCTwo.makeMT(masterAreaTwo, 1);

  console.log(claseMTCTwo.GetMatchTwo().length + " este de aca");
  //----------------------------------------------------------------//

  audioData.channelData[0] = new Float32Array(claseMTCOne.GetMatchOne());
  audioData.channelData[1] = new Float32Array(claseMTCTwo.GetMatchTwo());


  audioDataUnMatch = claseMTCOne.getAudioDataUnMatch();


  console.log("writing...");
  WavEncoder.encode(audioData).then((buffer: any) => {
    fs.writeFileSync("./Sound/Match.wav", new Buffer(buffer));
  });

  claseUnMatch.setAudio(audioDataUnMatch);
  claseUnMatch.MakeUnMacht(0);
  claseUnMatch.MakeUnMacht(1);


  audioData.channelData[0] = new Float32Array(claseUnMatch.GetMatchUnOne());
  audioData.channelData[1] = new Float32Array(claseUnMatch.GetMatchUnTwo());



  console.log("writing...");
  WavEncoder.encode(audioData).then((buffer: any) => {
    fs.writeFileSync("./Sound/Unmatch.wav", new Buffer(buffer));
  });



  audioData.channelData[0] = new Float32Array(audioMix[0]);
  
  audioData.channelData[1] = new Float32Array(audioMix[1]);
  

  console.log("writing...");
  WavEncoder.encode(audioData).then((buffer: any) => {
    fs.writeFileSync("./Sound/Dj.wav", new Buffer(buffer));
  });
});



// // for  Unmatch
// console.log('');
// readFile("./Sound/Dua.wav").then((buffer) => {
//   return WavDecoder.decode(buffer);
// }).then(function (audioData) {

//   claseUnMatch.setAudio(audioDataUnMatch);
//   claseUnMatch.MakeUnMacht(0);
//   claseUnMatch.MakeUnMacht(1);


//   audioDataUnMatch.channelData[0] = new Float32Array(claseUnMatch.GetMatchUnOne());
//   audioDataUnMatch.channelData[1] = new Float32Array(claseUnMatch.GetMatchUnTwo());


// //
//   console.log("writing...");
//   WavEncoder.encode(audioDataUnMatch).then((buffer: any) => {
//     fs.writeFileSync("./Sound/Unmatch.wav", new Buffer(buffer));
//   });
// });











