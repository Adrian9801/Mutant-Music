"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
///////////////////////////////////////////////
var fs = __importStar(require("fs"));
// import { complex as fft } from 'fft';
var WavEncoder = __importStar(require("wav-encoder"));
// import { default as ft } from 'fourier-transform';
var WavDecoder = __importStar(require("wav-decoder"));
////////////////////////////////////////////////
var split_1 = require("./split");
var monteCarlo_1 = require("./monteCarlo");
var splitMaster_1 = require("./splitMaster");
var genetic_1 = require("./genetic");
////////////////////////////////////////////////
var claseGenetic = new genetic_1.genetic();
var claseMTCOne = new monteCarlo_1.MTC();
var claseMTCTwo = new monteCarlo_1.MTC();
var masterAreaOne;
var masterAreaTwo;
var unMatchOne;
var unMatchTwo;
var audioDataUnMatch;
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
//===============================================for s2===================================================//
readFile("./Sound/s2.wav").then(function (buffer) {
    return WavDecoder.decode(buffer);
}).then(function (audioData) {
    //-------------------DJ--------------------------//
    //-----------------------------------------------//
    //-------------------------------splitMaster a one-----------------------------------------------//
    var clasSplitMasterOne = new splitMaster_1.splitMaster(); //canal estudiado,audioa estudiar,inicio,final
    masterAreaOne = clasSplitMasterOne.splitPeak(0, audioData, 0, audioData.channelData[0].length - 1);
    //----------------------------------------------------------------------------------------------//
    //--------------------------------splitMaster a two-----------------------------------------------//
    var clasSplitMasterTwo = new splitMaster_1.splitMaster(); //canal estudiado,audioa estudiar,inicio,final
    masterAreaTwo = clasSplitMasterTwo.splitPeak(1, audioData, 0, audioData.channelData[1].length - 1);
    //----------------------------------------------------------------------------------------------//
    //------------------------------------split a one-----------------------------------------------//
    var clasesplitOne = new split_1.splits(audioData);
    clasesplitOne.splitSong(true, 0);
    //----------------------------------------------------------------------------------------------//
    //----------------------------------------split a two------------------------------------------//
    var clasesplitTwo = new split_1.splits(audioData);
    clasesplitTwo.splitSong(true, 1);
    //----------------------------------------------------------------------------------------------//
    //-----------------------------------------MTC a one-------------------------------------------//
    claseMTCOne.setDataS2(clasesplitOne.getDataS2(1), clasesplitOne.getDataS2(2), clasesplitOne.getDataS2(3), clasesplitOne.getDataS2(4), clasesplitOne.getDataS2(5), clasesplitOne.getDataS2(6));
    //----------------------------------------------------------------------------------------------// 
    //------------------------------------------MTC a Two-------------------------------------------//
    claseMTCTwo.setDataS2(clasesplitTwo.getDataS2(1), clasesplitTwo.getDataS2(2), clasesplitTwo.getDataS2(3), clasesplitTwo.getDataS2(4), clasesplitTwo.getDataS2(5), clasesplitTwo.getDataS2(6));
    //----------------------------------------------------------------------------------------------// 
});
//====================================================================================================//
//==================================for MTC ,matc and get data un match dj=============================//
console.log('');
readFile("./Sound/Dua.wav").then(function (buffer) {
    return WavDecoder.decode(buffer);
}).then(function (audioData) {
    //------------------- for DJ----------------------------//
    //var djs = new Djs(audioData.channelData[0], true);
    //var mix = new Mix(djs.getDominantS(), audioData.channelData);
    //------------------------------------------------------//
    //--------------------------for son in  One----------------------------//
    var clasesplitOneSong = new split_1.splits(audioData);
    //------------split song one-----------// 
    clasesplitOneSong.splitSong(false, 0);
    //-------------------------------------//
    //---------------------set data mtc one---------------//
    claseMTCOne.setDataSong(clasesplitOneSong.getZone(1), clasesplitOneSong.getZone(2), clasesplitOneSong.getZone(3), clasesplitOneSong.getZone(4), clasesplitOneSong.getZone(5), clasesplitOneSong.getZone(6), clasesplitOneSong.getZone(7), clasesplitOneSong.getZone(8));
    claseMTCOne.setAudioData(audioData);
    //--------------------------------------------------//
    //------------------make match insong for one----------// 
    claseMTCOne.makeMT(masterAreaOne, 0);
    claseMTCOne.MakeUnMacht(0); //un match
    //------------------------------------------------------//
    //-----------------------------------------------------------------------------------//
    //--------------------------- for son in  Two----------------------------------//
    var clasesplitTwoSong = new split_1.splits(audioData);
    //--------split song one----------// 
    clasesplitTwoSong.splitSong(false, 1);
    //--------------------------------//
    //-----------------set data mtc one--------------------//
    claseMTCTwo.setDataSong(clasesplitTwoSong.getZone(1), clasesplitTwoSong.getZone(2), clasesplitTwoSong.getZone(3), clasesplitTwoSong.getZone(4), clasesplitTwoSong.getZone(5), clasesplitTwoSong.getZone(6), clasesplitTwoSong.getZone(7), clasesplitTwoSong.getZone(8));
    claseMTCTwo.setAudioData(audioData);
    //---------------------------------------------------//
    //----------------make match insong for one------------------// 
    claseMTCTwo.makeMT(masterAreaTwo, 1);
    claseMTCTwo.MakeUnMacht(1); //.un match
    //----------------------------------------------------------------//
    //----------------------------------------------------------------//
    audioData.channelData[0] = new Float32Array(claseMTCOne.getMatchOne());
    audioData.channelData[1] = new Float32Array(claseMTCTwo.getMatchTwo());
    //----------------------------------------------------------------//
    console.log("writing  Match...");
    WavEncoder.encode(audioData).then(function (buffer) {
        fs.writeFileSync("./Sound/Match1.wav", new Buffer(buffer));
    });
    //====================================================================================================//
    //------------------------UnMatch-----------------------------------//
    audioDataUnMatch = claseMTCOne.getAudioDataUnMatch();
    audioData.channelData[0] = new Float32Array(claseMTCOne.getUnMatchOne());
    audioData.channelData[1] = new Float32Array(claseMTCTwo.getUnMatchTwo());
    //------------------------------------------------------------------//
    //-------------TimesMatch-----------//
    console.log(claseMTCOne.getSeg());
    console.log(claseMTCTwo.getSeg());
    //-------------------------------------//
    console.log("writing  UnMatch...");
    WavEncoder.encode(audioData).then(function (buffer) {
        fs.writeFileSync("./Sound/Unmatch1.wav", new Buffer(buffer));
    });
    //====================================================================================================//
    // audioData.channelData[0] = new Float32Array(mix.getDominantSection()[0]);
    // audioData.channelData[1] = new Float32Array(mix.getDominantSection()[1]);
    console.log("writing  Mix...");
    WavEncoder.encode(audioData).then(function (buffer) {
        fs.writeFileSync("./Sound/Mix.wav", new Buffer(buffer));
    });
    // claseGenetic.fitness();
    // claseGenetic.selectionPopulation();
    // while( claseGenetic.selectionPopulation()){
    // }
    // console.log(claseGenetic.getPopulation() );
});
//====================================================================================================//
//# sourceMappingURL=wav-test.js.map