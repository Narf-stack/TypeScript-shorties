import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";

const numberCollection = new NumbersCollection([10000,3,-5,0])
const sorter = new Sorter(numberCollection);
sorter.sort();
console.log(numberCollection.data)


const characCollection = new CharactersCollection('Xaayb')
const stringsorter = new Sorter(characCollection);
stringsorter.sort();
console.log(characCollection.data)