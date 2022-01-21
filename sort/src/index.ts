import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";

const numberCollection = new NumbersCollection([10000,3,-5,0])
const sorter = new Sorter(numberCollection);
sorter.sort();
console.log(numberCollection.data)