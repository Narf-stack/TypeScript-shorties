import {MatchReader} from './MatchReader';
// import { MatchResult } from './MatchResult';
import { CsvFileReader } from './CsvFileReader'
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { Summary } from './Summary';
import { HtmlReport } from './reportTargets/HtmlReport';

// read CSV Node "fs" library
// const reader = new MatchReader('football.csv')
// reader.read()

// Create the object that satisfies the 'DataReader' interface 

const csvFileReader = new CsvFileReader('football.csv')


// Create an instance of MatchReader and pass in 
//something satisfying the DataReader interface 

const matchReader = new MatchReader(csvFileReader)
matchReader.load()

// let manUnitedWins = 0 ;

// for(let match of matchReader.matches){
//     if( match[1]=== 'Man United' && match[5] === MatchResult.HomeWin){
//         manUnitedWins++
//     }else if( match[2]=== 'Man United' && match[5] === MatchResult.AwayWin){
//         manUnitedWins++
//     }
// }

// console.log(manUnitedWins)

// Print the report on terminal 
const summary = new Summary(
    new WinsAnalysis('Man United'),
    new ConsoleReport()
)

summary.buildAndPrintReport(matchReader.matches)

// Create an Html page
const summary2 = new Summary(
    new WinsAnalysis('Man United'),
    new HtmlReport()
)