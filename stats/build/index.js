"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
// import { MatchResult } from './MatchResult';
var CsvFileReader_1 = require("./CsvFileReader");
var ConsoleReport_1 = require("./reportTargets/ConsoleReport");
var WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
var Summary_1 = require("./Summary");
// read CSV Node "fs" library
// const reader = new MatchReader('football.csv')
// reader.read()
// Create the object that satisfies the 'DataReader' interface 
var csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
// Create an instance of MatchReader and pass in 
//something satisfying the DataReader interface 
var matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
// let manUnitedWins = 0 ;
// for(let match of matchReader.matches){
//     if( match[1]=== 'Man United' && match[5] === MatchResult.HomeWin){
//         manUnitedWins++
//     }else if( match[2]=== 'Man United' && match[5] === MatchResult.AwayWin){
//         manUnitedWins++
//     }
// }
// console.log(manUnitedWins)
var summary = new Summary_1.Summary(new WinsAnalysis_1.WinsAnalysis('Man United'), new ConsoleReport_1.ConsoleReport());
summary.buildAndPrintReport(matchReader.matches);
