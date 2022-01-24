import fs from 'fs';


// read CSV Node "fs" library
const matches = fs.readFileSync('football.csv',{
    encoding: 'utf-8'
}).split('\n')
.map((row:string):string[]=>{
    return row.split(',');
})


console.log(matches)