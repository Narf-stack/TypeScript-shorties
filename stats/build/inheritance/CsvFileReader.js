"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
var fs_1 = __importDefault(require("fs"));
var CsvFileReader = /** @class */ (function () {
    function CsvFileReader(filename) {
        this.filename = filename;
        this.data = [];
    }
    //will be implementeds by the child class
    CsvFileReader.prototype.read = function () {
        // read CSV Node "fs" library
        this.data = fs_1.default.readFileSync(this.filename, {
            encoding: 'utf-8'
        }).split('\n')
            .map(function (row) {
            return row.split(',');
        })
            .map(this.mapRow);
    };
    return CsvFileReader;
}());
exports.CsvFileReader = CsvFileReader;
