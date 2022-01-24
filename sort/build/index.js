"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = require("./NumbersCollection");
var CharactersCollection_1 = require("./CharactersCollection");
var LinkedList_1 = require("./LinkedList");
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
var numberCollection = new NumbersCollection_1.NumbersCollection([10000, 3, -5, 0]);
numberCollection.sort();
console.log(numberCollection.data);
var characCollection = new CharactersCollection_1.CharactersCollection('Xaayb');
characCollection.sort();
console.log(characCollection.data);
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
linkedList.sort();
linkedList.print();
