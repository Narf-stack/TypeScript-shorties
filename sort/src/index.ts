import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

// No Refacto
// const numberCollection = new NumbersCollection([10000,3,-5,0])
// const sorter = new Sorter(numberCollection);
// sorter.sort();
// console.log(numberCollection.data)


// const characCollection = new CharactersCollection('Xaayb')
// const stringsorter = new Sorter(characCollection);
// stringsorter.sort();
// console.log(characCollection.data)


// const linkedList = new LinkedList();
// linkedList.add(500)
// linkedList.add(-10)
// linkedList.add(-3)
// linkedList.add(4)

// const linksort = new Sorter(linkedList)
// linksort.sort()
// linkedList.print()


//  Refacto
const numberCollection = new NumbersCollection([10000,3,-5,0])
numberCollection.sort();
console.log(numberCollection.data)


const characCollection = new CharactersCollection('Xaayb')
characCollection.sort();
console.log(characCollection.data)