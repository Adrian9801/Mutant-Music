///////////////////////////////////////////////
import * as fs from 'fs';
// import { complex as fft } from 'fft';
import * as WavEncoder from 'wav-encoder';
// import { default as ft } from 'fourier-transform';
import * as WavDecoder from 'wav-decoder';
////////////////////////////////////////////////
import { splits } from "./split";
import { MTC } from "./monteCarlo";

var claseMTC = new MTC();

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

  var clasesplit = new splits(audioData);
  clasesplit.splitSong(true);

  claseMTC.setDataS2(clasesplit.getDataS2(1),
    clasesplit.getDataS2(2), clasesplit.getDataS2(3), clasesplit.getDataS2(4), clasesplit.getDataS2(5));

});

console.log('');
readFile("./Sound/Dua.wav").then((buffer) => {
  return WavDecoder.decode(buffer);
}).then(function (audioData) {

  var clasesplit = new splits(audioData);
  clasesplit.splitSong(false);

  claseMTC.setDataSong(clasesplit.getZone(1), clasesplit.getZone(2), clasesplit.getZone(3), clasesplit.getZone(4),
    clasesplit.getZone(5), clasesplit.getZone(6), clasesplit.getZone(7), clasesplit.getZone(8));


 claseMTC.setAudioData(audioData);
  claseMTC.makeMT();

});


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


